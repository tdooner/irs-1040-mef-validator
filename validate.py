import decimal
import xmlschema

print("Loading schema...")
schema = xmlschema.XMLSchema("2018v6.3/IndividualIncomeTax/Ind1040/Return1040.xsd")

irs1040 = schema.types['IRS1040Type']
irs1040_description = irs1040.annotation.documentation[0].text

def description_if_present(type_obj):
    if type_obj.annotation:
        return type_obj.annotation.documentation[0].text

def to_typescript_type(type_obj):
    if hasattr(type_obj, 'primitive_type') and type_obj.primitive_type:
        if type_obj.primitive_type.python_type == str:
            return 'string'
        elif type_obj.primitive_type.python_type == bool:
            return 'boolean'
        elif type_obj.primitive_type.python_type == decimal.Decimal:
            return 'number'
    elif type_obj.name:
        return type_obj.name
    else:
        raise Exception('Unknown python type: ' + str(type_obj.primitive_type.python_type))

output_types = []

for name, type_obj in schema.types.items():
    print("Processing Type: " + name)
    if type(type_obj) == xmlschema.validators.complex_types.XsdComplexType:
        # TODO: Get type_obj.attributes
        items = []
        if type(type_obj.content) == xmlschema.validators.XsdAtomicRestriction:
            print("  Skipping subitem (atomic): " + str(item))
            continue
        if not (type_obj.content.model == 'sequence' or type_obj.content.model == 'choice'):
            import ipdb
            ipdb.set_trace()
        for item in type_obj.content:
            if type(item) == xmlschema.validators.XsdGroup:
                # TODO: Handle sub-types that are Complex
                print("  Skipping subitem (group): " + str(item))
                continue
            elif type(item.type) == xmlschema.validators.complex_types.XsdComplexType:
                # TODO: Handle sub-types that are XsdGroups
                print("  Skipping subitem (complex): " + str(item.name))
                continue
            items.append({
                # "description": description_if_present(type_obj), # TODO: get this
                "name": item.local_name,
                "typescript_type": to_typescript_type(item.type)
            })
        output_types.append({
            "full_name": type_obj.name,
            "name": type_obj.local_name,
            "description": description_if_present(type_obj),
            "typescript_type": {"type": "sequence", "items": items},
        })
    elif type(type_obj) == xmlschema.validators.simple_types.XsdUnion:
        items = []
        for member in type_obj.member_types:
            if member.name:
                items.append(member.name)
            else:
                items.append(to_typescript_type(member))
        # TODO: Verify how these relate to each other - string vs the more complex types
        output_types.append({
            "full_name": type_obj.name,
            "name": type_obj.local_name,
            "description": description_if_present(type_obj),
            "typescript_type": {"type": "union", "items": items},
        })
    elif type(type_obj) == xmlschema.validators.simple_types.XsdList:
        output_types.append({
            "full_name": type_obj.name,
            "name": type_obj.local_name,
            "description": description_if_present(type_obj),
            "typescript_type": {"type": "array", "arrayOf": type_obj.base_type.name},
        })
    elif type(type_obj) == xmlschema.validators.XsdAtomicRestriction:
        # TODO: Can use type_obj.facets / type_obj.primitive_type.facets to
        # get more post-processing/validations for the type.
        output_types.append({
            "full_name": type_obj.name,
            "name": type_obj.local_name,
            "description": description_if_present(type_obj),
            "typescript_type": {"type": "primitive", "primitive": to_typescript_type(type_obj)},
        })
    else:
        print("Unknown subelement type: " + type(type_obj))
        import ipdb
        ipdb.set_trace()

with open('out.ts', 'w') as f:
    for output in output_types:
        f.write(f"// {output['description']}\n")
        type = output['typescript_type']
        if type['type'] == 'primitive':
            f.write(f"type {output['name']}: {type['primitive']}\n")
        elif type['type'] == 'array':
            f.write(f"type {output['name']}: {type['arrayOf']}[]\n")
        elif type['type'] == 'union':
            f.write(f"type {output['name']}: " + " | ".join(type['items']) + "\n")
        elif type['type'] == 'sequence':
            f.write(f"type {output['name']}: {{\n")
            for i in type['items']:
                f.write(f"  {i['name']}: {i['typescript_type']}\n")
            f.write(f"}}\n")

print("Done")
import ipdb
ipdb.set_trace()

# get return element:
# schema.find("efile:Return")

# print("Validating test.xml...")
# if schema.validate('test.xml'):
#     print("Valid!")
