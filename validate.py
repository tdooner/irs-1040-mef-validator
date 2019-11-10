import xmlschema

print("Loading schema...")
schema = xmlschema.XMLSchema("2018v6.3/IndividualIncomeTax/Ind1040/Return1040.xsd")

print("Validating test.xml...")
if schema.validate('test.xml'):
    print("Valid!")
