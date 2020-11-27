// Base type for a string
type StringType: string
// Base type for a URI
type URIType: string
// Base type for a date
type DateType: string
// Year and month type in the format of YYYY-MM
type YearMonthType: string
// Year and month type in the format of YYMM
type TaxYearEndMonthDtType: string
// Month type in the format of --MM
type MonthType: string
// Month and day type in the format of --MM-DD
type MonthDayType: string
// The end date of a calendar quarter.
type QuarterEndDateType: string
// Base type for a date and time stamp
type TimestampType: string
// Base type for a 4-digit year
type YearType: string
// Base type for a boolean. Typically used on an Yes or No field.
type BooleanType: boolean
// Typically used by an optional checkbox.
type CheckboxType: string
// Base type for an integer
type IntegerType: number
// Base type for a non-negative integer
type IntegerNNType: number
// Base type for a positive integer
type IntegerPosType: number
// Base type for a long integer. Range of values is: -9,223,372,036,854,775,808 thru 9,223,372,036,854,775,807
type LongIntegerType: number
// 2-digit decimal typically used by a decimal amount field.
type DecimalType: number
// 2-digit decimal typically used by a non-negative decimal amount field.
type DecimalNNType: number
// Type for a U.S. integer amount field
type USAmountType: number
// Type for a U.S. non-negative integer amount field
type USAmountNNType: number
// Type for a U.S. negative integer amount field
type USAmountNegType: number
// Type for a U.S. positive integer amount field
type USAmountPosType: number
// Type for a U.S. amount field with dollars and cents
type USDecimalAmountType: number
// Type for a U.S. non-negative amount field with dollars and cents
type USDecimalAmountNNType: number
// Type for a U.S. positive amount field with dollars and cents
type USDecimalAmountPosType: number
// Type for a foreign integer amount field
type ForeignAmountType: number
// Type for a foreign non-negative integer amount field
type ForeignAmountNNType: number
// A fraction between 0 and .9999 that allows up to 4 decimal places
type SmallRatioType: number
// A fraction between 0 and 1 that allows up to 5 decimal places
type RatioType: number
// A non-negative decimal that allows up to 22 total digits and 12 fraction digits
type LargeRatioType: number
// Business Activity Code
type BusinessActivityCodeType: number
// Routing Transit Number - 9 digits beginning with 01 through 12, or 21 through 32
type RoutingTransitNumberType: string
// Bank Account Number - 17 alphanumeric characters with hyphens
type BankAccountNumberType: string
// Type of Bank Account - 1 for Checking, 2 for Savings
type BankAccountType: string
// Type for Social Security No. - 9 digits
type SSNType: string
// Type for Employer Identification No. - 9 digits
type EINType: string
// Type for Electronic Transmitter Identification No. - 5 digits
type ETINType: string
// Type for Preparer Personal Identification No. - P followed by 8 digits
type PTINType: string
// Type for Electronic Filing Identification No. - 6 digits
type EFINType: string
// Type for Practitioner PIN, Self-Select PIN and Third Party Designee PIN
type PINType: string
// Type for Intermediate Service Provider No. - 6 uppercase alphanumeric characters
type ISPType: string
// The type of originator
type OriginatorType: string
// Used for a PIN signature
type SignatureType: string
// The Software ID - 8 digits
type SoftwareIdType: string
// The Software Version - 20 characters
type SoftwareVersionType: string
// Pattern used for generating TransmissionId, OriginId, ItemId, and AcknowledgementId. A timestamp may be used as an ID as long as it is unique within its parent element and within the filing season. Up to 4-decimal fractional digits may be used for the second in a timestamp to increase its uniqueness. Legal Characters: A-Z, a-z, 0-9, colon, period and hyphen.
type IdType: string
// Type for list of Ids
type IdListType: {http://www.irs.gov/efile}IdType[]
// Typically used for line 1 of a business name. Legal Characters: A-Z, a-z, 0-9, hash, hyphen, parentheses, ampersand, apostrophe and single space. Illegal Character: leading space, trailing space, adjacent spaces, and other symbols.
type BusinessNameLine1Type: string
// Typically used for line 2 of a business name. Legal Characters: A-Z, a-z, 0-9, hash, slash, percent, hyphen, parentheses, ampersand, apostrophe and single space. Illegal Character: leading space, trailing space, adjacent spaces, and other symbols.
type BusinessNameLine2Type: string
// Typically used for line 3 of a business name or line 2 of an individual name. Element must begin with a percent followed by a space. Legal Characters: A-Z, a-z, 0-9, hash, slash, percent, hyphen, parentheses, ampersand, apostrophe and single space. Illegal Character: leading space, trailing space, adjacent spaces, and other symbols.
type InCareOfNameType: string
// Typically used for line 1 of a name. Legal Characters: A-Z, a-z, hyphen, ampersand, less-than sign and single space. Illegal Character: leading space, trailing space, adjacent spaces, spaces surrounding the less-than sign and other symbols.
type NameLine1Type: string
// Typically used for a person's name. Legal Characters: A-Z, a-z, 0-9, hyphen, apostrophe and single space. Illegal Character: leading space, trailing space, adjacent spaces, and other symbols.
type PersonNameType: string
// Typically used for a person's title. Legal Characters: printable characters from ! to ~ plus single space. Illegal Character: leading space, trailing space, adjacent spaces.
type PersonTitleType: string
// Used for a Name Control. Legal Characters: A-Z, 0-9, hyphen and ampersand. Illegal Character: spaces and symbols.
type BusinessNameControlType: string
// Used for a Check Digit field. 2 uppercase characters.
type CheckDigitType: string
// Used for a street address. Legal Characters: A-Z, a-z, 0-9, hyphen, slash and single space. Illegal Character: leading space, trailing space, adjacent spaces, and other symbols.
type StreetAddressType: string
// Used for a city. Legal Characters: A-Z, a-z, and single space. Illegal Character: leading space, trailing space, adjacent spaces, and symbols.
type CityType: string
// State abbreviations, a.k.a. state codes
type StateType: string
// Federal Unemployment Tax Act (FUTA) state abbreviations
type FUTAStateCdType: string
// ZIP Code - 5 digits plus optional 4 or 7 digits
type ZIPCodeType: string
// Used for a phone no. - 10 digits
type PhoneNumberType: string
// Used for a foreign phone no. - up to 30 digits
type ForeignPhoneNumberType: string
// Used for an email address. Symbol @ follows and is followed by at least one of the characters allowed by TextType - up to 75 characters in total.
type EmailAddressType: string
// Used for a text field. Legal Characters: printable characters from ! to ~ plus symbols from ¡ to ¿ plus Spanish characters and single space. Illegal Character: leading space, trailing space, adjacent spaces.
type TextType: string
// A typical explanation field that allows up to 9000 characters
type ExplanationType: string
// A one-line explanation field that allows up to 100 characters.
type LineExplanationType: string
// A short explanation field that allows up to 1000 characters.
type ShortExplanationType: string
// A short description field that allows up to 20 characters.
type ShortDescriptionType: string
// A medium explanation field that allows up to 100,000 characters.
type MediumExplanationType: string
// A long explanation field that allows up to 1,000,000 characters.
type LongExplanationType: string
// Country abbreviations, a.k.a. country codes
type CountryType: string
// Country Code Type Including 'US'
type AllCountriesType: string | {http://www.irs.gov/efile}CountryType
// Depreciation convention abbreviations
type DepreciationConventionCodeType: string
// Depreciation convention abbreviations
type DepreciationConventionType: string
// Depreciation method abbreviations
type DepreciationMethodCodeType: string
// Depreciation method abbreviations
type DepreciationMethodType: string
// None
type BINType: string
// None
type GTXKeyType: string
// None
type MethodOfAccountingType: string
// None
type NumericType: string
// None
type AlphaNumericType: string
// None
type AlphaNumericAndParenthesesType: string
// None
type IRSServiceCenterType: string
// None
type StringVARIOUSType: string
// None
type CUSIPNumberType: string
// None
type FuelGallonsType: number
// None
type FuelGallonsNNType: number
// None
type MilesType: number
// None
type MilesNNType: number
// None
type GovernmentCodeType: string
// Tax Shelter Registration Number - 9 positions in length starting with MA followed by 7 numbers or 11 positions in length composed of all numbers or either of the two literals listed below.
type TaxShelterRegistrationType: string
// Recurring Number of Shares Type
type NumberOfSharesType: number
// Type for Vehicle Identification No. - 1 to 17 or 19 alphanumeric characters
type VINType: string
// Number of days
type NumberOfDaysType: number
// Used to indicate who entered the PIN (Personal Identification Number)
type PINEnteredByType: string
// Used to indicate the type of  PIN (Personal Identification Number)
type PINCodeType: string
// Used to indicate if a return was filed using the English or Spanish Free-File Program or Free Fillable Forms
type ConsortiumType: string
// Used to indicate if a return was filed using the English or Spanish Partners Page (Affordable Filing Program)
type PartnersPageFilingType: string
// Typically used for a person's first name. Legal Characters: A-Z, a-z, hyphen and single space. Illegal Character: leading space, trailing space, adjacent spaces, and other symbols.
type PersonFirstNameType: string
// Typically used for a person's last name. Legal Characters: A-Z, a-z, hyphen and single space. Illegal Character: leading space, trailing space, adjacent spaces, and other symbols.
type PersonLastNameType: string
// Used for a Name Control. Legal Characters: A-Z, hyphen and space. Illegal Character: numbers and symbols.
type PersonNameControlType: string
// Decimal format for IP Address
type IPv4Type: string
// Hexidecimal format for IP Address
type IPv6Type: string
// Base type for time
type TimeType: string
// None
type TimezoneType: string
// Type for Preparer Personal Identification No. - S followed by 8 digits
type STINType: string
// None
type RegistrationNumType: string
// None
type DeviceIdType: string
// None
type ForeignRegulatedInvestmtCompCdType: string
// None
type SubmissionIdType: string
// None
type FTINType: string
// None
type F965RatioType: number
// Type for a U.S. non-positive integer amount field
type USAmountNonPosType: number
// None
type F965SchHRatioType: number
// None
type AgriculturalActivityCodeType: string
// None
type IRS1065BSchK1OtherCodeType: string
// None
type AlphaNumericAndSpaceType: string
// None
type CheckOrNAType: string
// None
type NPSProjectNumType: string
// Recurring Stock Description Type
type StockDescriptionType: string
// Recurring Stock Description Type
type StockDescription5471SchOType: string
// None
type Form6478NumGallonsType: number
// None
type PropertyIdentifierType: string
// None
type DateAcquiredByDonorType: string | {http://www.irs.gov/efile}YearMonthType
// None
type NumberOfAttachedFormsType: number
// None
type FilingStatusCdType: string
// None
type Form8824PropertyDescriptionType: string
// None
type NumOfFrgnDisregardedEntitiesType: number
// None
type IRS8865SchK1OtherIncomeLossCodeType: string
// None
type IRS8865SchK1OtherDeductionsCodeType: string
// None
type IRS8865SchK1SelfEmploymentEarningsLossCodeType: string
// None
type IRS8865SchK1CreditsCodeType: string
// None
type IRS8865SchK1FrgnTransCountryPossCodeType: string
// None
type IRS8865SchK1FrgnTransAmountCodeType: string
// None
type IRS8865SchK1AMTItemsCodeType: string
// None
type IRS8865SchK1TaxExemptIncomeNonDedExpensesCodeType: string
// None
type SchK1DistributionsCdType: string
// None
type IRS8865SchK1OtherInformationCodeType: string
// None
type AdjustmentsToGainOrLossCdType: string
// None
type MonthNumberCdType: string
// 12 digit integer type for various quantity types on FormT
type IRSFormTInteger12Type: number
// 6 digit integer type for various quantity types on FormT
type IRSFormTInteger6Type: number
// Content model for the individual tax return
type ReturnHeaderType: {
  ReturnTs: string
  TaxYr: string
  TaxPeriodBeginDt: string
  TaxPeriodEndDt: string
  ImperfectReturnInd: string
  InactiveITINReturnInd: string
  ConsortiumReturnCd: string
  AffordableFilingCd: string
  ISPNum: string
  SoftwareId: string
  SoftwareVersionNum: string
  IdentityProtectionPIN: string
  SpouseIdentityProtectionPIN: string
  PINTypeCd: string
  JuratDisclosureCd: string
  SpousePINEnteredByCd: string
  PrimarySignaturePIN: string
  SpouseSignaturePIN: string
  PrimarySignatureDt: string
  SpouseSignatureDt: string
  ReturnTypeCd: string
  Form8283PaperDocumentInd: string
  Form8858PaperDocumentInd: string
  Form8332PaperDocumentInd: string
  Form3468PaperDocumentInd: string
  Form3115PaperDocumentInd: string
  Form5713PaperDocumentInd: string
  Form1098CPaperDocumentInd: string
  Form8885PaperDocumentInd: string
  Form8864PaperDocumentInd: string
  Form4136PaperDocumentInd: string
  POAPaperDocumentInd: string
  Form8949PaperDocumentInd: string
}
// None
type DrvrLcnsOrStateIssdIdGrpType: {
  DrvrLcnsOrStateIssdIdNum: string
  DrvrLcnsOrStateIssdIdStCd: string
  DrvrLcnsOrStateIssdIdExprDt: string
  DrvrLcnsOrStateIssdIdIssDt: string
}
// None
type USItemizedEntryType: {
  Desc: string
  Amt: number
}
// None
type ForeignItemizedEntryType: {
  Desc: string
  ForeignAmt: number
}
// None
type USAddressType: {
  AddressLine1Txt: string
  AddressLine2Txt: string
  CityNm: string
  StateAbbreviationCd: string
  ZIPCd: string
}
// None
type OtherUSAddressType: {
  AddressLine1Txt: string
  AddressLine2Txt: string
  CityNm: string
  StateAbbreviationCd: string
  ZIPCd: string
}
// None
type ForeignAddressType: {
  AddressLine1Txt: string
  AddressLine2Txt: string
  CityNm: string
  ProvinceOrStateNm: string
  CountryCd: string
  ForeignPostalCd: string
}
// None
type OtherForeignAddressType: {
  AddressLine1Txt: string
  AddressLine2Txt: string
  CityNm: string
  ProvinceOrStateNm: string
  CountryCd: string
  ForeignPostalCd: string
}
// None
type BusinessNameType: {
  BusinessNameLine1Txt: string
  BusinessNameLine2Txt: string
}
// Recurring Name and Address Type
type NameAndAddressType: {
}
// None
type PersonFullNameType: {
  PersonFirstNm: string
  PersonLastNm: string
}
// IP address type to include either decimal or hexidecimal format
type IPAddressType: {
  IPv4AddressTxt: string
  IPv6AddressTxt: string
}
// None
type VehicleDescriptionGrpType: {
  VehicleModelYr: string
  VehicleMakeNameTxt: string
  VehicleModelNameTxt: string
}
// None
type ForeignEntityIdentificationGrpType: {
  ForeignEntityReferenceIdNum: string
}
// Content model for Binary Attachment
type BinaryAttachmentType: {
  DocumentTypeCd: string
  Desc: string
  AttachmentLocationTxt: string
}
// Content model for IRS Form 1040
type IRS1040Type: {
  SpecialConditionDesc: string
  PrimaryDeathDt: string
  SpouseDeathDt: string
  PECFPrimaryInd: string
  PECFSpouseInd: string
  IndividualReturnFilingStatusCd: string
  QualifyingHOHNm: string
  QualifyingHOHSSN: string
  QualifyingPersonSSN: string
  PrimaryClaimAsDependentInd: string
  SpouseClaimAsDependentInd: string
  ExemptSpouseNm: string
  ExemptSpouseNameControlTxt: string
  TotalExemptPrimaryAndSpouseCnt: number
  MoreDependentsInd: string
  ChldWhoLivedWithYouCnt: number
  ChldNotLivingWithYouCnt: number
  OtherDependentsListedCnt: number
  TotalExemptionsCnt: number
  TaxExemptInterestAmt: number
  OrdinaryF8814Cd: string
  OrdinaryF8814Amt: number
  QualifiedF8814Cd: string
  QualifiedF8814Amt: number
  QualifiedDividendsAmt: number
  StateLocalIncomeTaxRefundAmt: number
  AlimonyReceivedAmt: number
  CapitalDistributionInd: string
  Form8814Cd: string
  Form8814Amt: number
  IRADistributionsLiteralCd: string
  PensionsAnnuitiesAmt: number
  ForeignEmployerPensionCd: string
  TaxableForeignPensionsTotalAmt: number
  TaxableSocSecAmt: number
  ProtectiveSec108iELCRecordInd: string
  TotalAdditionalIncomeAmt: number
  TotalIncomeAmt: number
  EducatorExpensesAmt: number
  SelfEmpldSepSimpleQlfyPlansAmt: number
  SelfEmpldHealthInsDedAmt: number
  PnltyOnErlyWthdrwOfSavingsAmt: number
  TotalAlimonyPaidAmt: number
  IRADeductionAmt: number
  IRADeductionCd: string
  StudentLoanInterestDedAmt: number
  AdjustedGrossIncomeAmt: number
  Primary65OrOlderInd: string
  PrimaryBlindInd: string
  Spouse65OrOlderInd: string
  SpouseBlindInd: string
  TotalBoxesCheckedCnt: number
  MustItemizeInd: string
  QualifiedBusinessIncomeDedAmt: number
  AGILessDeductionsAmt: number
  ScheduleQCd: string
  TaxAmt: number
  Schedule2AttachedInd: string
  AdditionalTaxAmt: number
  TotalTaxBeforeCrAndOthTaxesAmt: number
  OtherCreditsAmt: number
  TotalNonrefundableCreditsAmt: number
  TotalCreditsAmt: number
  Schedule3AttachedInd: string
  TaxLessCreditsAmt: number
  UnrprtdSocSecAndMedcrTaxAmt: number
  HealthCareRspnsCoverageInd: string
  HealthCareRspnsPenaltyAmt: number
  OtherTaxCdInd: string
  Section965TaxInstallmentAmt: number
  AggregateTaxAmt: number
  TotalTaxAmt: number
  EICEligibilityLiteralCd: string
  NontxCombatPayElectionAmt: number
  RequestForExtensionAmt: number
  ExcessSocSecAndTier1RRTATaxAmt: number
  OtherPaymentsInd: string
  OtherPaymentsAmt: number
  RefundableCreditsAmt: number
  TotalPaymentsAmt: number
  OverpaidAmt: number
  RefundAmt: number
  RoutingTransitNum: string
  BankAccountTypeCd: string
  DepositorAccountNum: string
  OwedAmt: number
  EsPenaltyAmt: number
  ThirdPartyDesigneeInd: boolean
  ThirdPartyDesigneeNm: string
  ThirdPartyDesigneePhoneNum: string
  ThirdPartyDesigneePIN: string
  CommPropStateRtnInd: string
  PowerOfAttorneySignedByInd: string
  PowerOfAttorneyNm: string
  PrimaryOccupationTxt: string
  SpouseOccupationTxt: string
  SurvivingSpouseInd: string
  PersonalRepresentativeInd: string
  NonPaidPreparerCd: string
  RefundProductCd: string
  RefundProductCodeTxt: string
}
// None
type PYEarnedIncomElectionGrpType: {
  PriorYearEarnedIncomeCd: string
  PriorYearEarnedIncomeAmt: number
}
// Content model for IRS Form 926
type IRS926Type: {
  Owned10PercentForeignCorpInd: boolean
  ControlledBy5OrFewerDomCorpInd: boolean
  ExistedAfterTransferInd: boolean
  ParentCorporationInd: boolean
  PrtnrPickProRataShrGnTrnsfrInd: boolean
  PrtnrDispsngEntireIntPrtshpInd: boolean
  PrtnrDisposingIntLtdPrtshpInd: boolean
  TransfereeCountryOfIncorpCd: string
  ForeignLawCharacterizationTxt: string
  TransfereeForeignCorpInd: boolean
  CashOnlyPropertyTransferredInd: boolean
  StockOrSecuritiesTransferInd: boolean
  ForeignBranchAssetTransferInd: boolean
  DomCorpAstTransferForeignBrInd: boolean
  DomesticCorpUSShareholderInd: boolean
  TransferredLossAmt: number
  IntangiblePropertyTrnsfrInd: boolean
  UsefulLifeTransferInd: boolean
  IndfntUsefulLifeTransferInd: boolean
  Apply20YearInclusionPeriodInd: boolean
  LimitationAmt: number
  IntngblPropTrnsfrContriInd: boolean
  SupplementalInformationTxt: string
  TransferorsBeforeTransferIntRt: number
  TransferorsAfterTransferIntRt: number
  NonrecognitionTransactionTxt: string
  ResultedInChangeClsfInd: boolean
  CoverPropertyDistributionInd: boolean
  RecognizeTotalGainLossAmt: number
  PropDistriGainLossNotRcgnzInd: boolean
  Section355StockDistributionInd: boolean
}
// None
type ControllingShareholderType: {
}
// None
type InformationRegardingTransferPropertyType: {
  TransferDt: string
  PropertyDesc: string
  FairMarketValueAmt: number
  CostOrOtherBasisAmt: number
  GainRecognizedOnTransferAmt: number
}
// None
type CashInformationRegardingTransferPropertyType: {
  TransferDt: string
  FairMarketValueAmt: number
}
// None
type TrdOrBusExcPropTotalGrpType: {
  FairMarketValueAmt: number
  CostOrOtherBasisAmt: number
  GainRecognizedOnTransferAmt: number
}
// None
type IntangiblePropertyDetailGrpType: {
  TransferDt: string
  PropertyDesc: string
  UsefulLifeDesc: string
  TransferDtArmLengthPriceAmt: number
  CostOrOtherBasisAmt: number
  IncomeInclusionAmt: number
}
// None
type BuiltInLossPropSection367dGrpType: {
  TransferDt: string
  PropertyDesc: string
  FairMarketValueAmt: number
  CostOrOtherBasisAmt: number
}
// Content model for IRS Form 965
type IRS965Type: {
  TotalCYSection965aInclusionAmt: number
  Section965aInclusionRcvdAmt: number
  TotalPYSection965aInclusionAmt: number
  PYSection965aInclusionRcvdAmt: number
  CYAggrgtForeignCashPositionAmt: number
  SmllrCY965aOrFrgnCashPosAmt: number
  CY15Pnt5PctRateEquivalentPct: number
  CYSect965cDed15Pnt5PctAmt: number
  NetSmllrCY965aOrFrgnCashPosAmt: number
  CY8PctRateEquivalentPct: number
  CYSect965cDeduction8PctAmt: number
  CYSect965cDedNonPassThruAmt: number
  CYTotalSect965cDeductionAmt: number
  AggrgtForeignCashPositionAmt: number
  SmllrPY965aOrFrgnCashPosAmt: number
  PY15Pnt5PctRateEquivalentPct: number
  PYSect965cDed15Pnt5PctAmt: number
  NetSmllrPY965aOrFrgnCashPosAmt: number
  PY8PctRateEquivalentPct: number
  PYSect965cDeduction8PctAmt: number
  PYSect965cDedNonPassThruAmt: number
  PYTotalSect965cDeductionAmt: number
  FYSect15Blended965c2Rt: number
  FYSect15Blend965c2Less15PctRt: number
  FY15Pnt5PctRateEquivalentPct: number
  FYSect15Blend965c2Less8PctRt: number
  FY8PctRateEquivalentPct: number
  Section965hElectionInd: boolean
  Section965iElectionInd: boolean
  Section965mElectionInd: boolean
  Section965nElectionInd: boolean
  Section9652f2ElectionInd: boolean
}
// Content model for IRS Form 965-A
type IRS965AType: {
  AmendedInd: string
  NetSection965TaxLiabUnpaidAmt: number
  NetSection965TaxLiabPaidAmt: number
  TotSCorpDefrdNet965TaxLiabAmt: number
}
// Content model for IRS Form 965 Schedule A
type IRS965ScheduleAType: {
  TotalProRataShareAmt: number
  TotalAggrgtForeignEPDeficitAmt: number
  TotalSection965aInclusionAmt: number
  TotalPYSection965aInclusionAmt: number
  TotalCYSection965aInclusionAmt: number
}
// Content model for IRS Form 965 Schedule B
type IRS965ScheduleBType: {
  SeparateCategoryCd: string
  SanctionedCountryCd: string
}
// Content model for IRS Form 965 Schedule C
type IRS965ScheduleCType: {
  SeparateCategoryCd: string
  SanctionedCountryCd: string
  TotalProRataShareAmt: number
}
// Content model for IRS Form 965 Schedule D
type IRS965ScheduleDType: {
  TotProRataShrCashPosPYAmt: number
  TotProRataShrCashPosBfrNovAmt: number
  TotProRataShrCashPosBfrJanAmt: number
  TotalCalculatedProRataShareAmt: number
  AggrgtForeignCashPositionAmt: number
  PYAggrgtForeignCashPositionAmt: number
  CYAggrgtForeignCashPositionAmt: number
}
// Content model for IRS Form 965 Schedule E
type IRS965ScheduleEType: {
  TotCashPosNotHedgeTransPYAmt: number
  TotCashPosHedgeTransPYAmt: number
  TotCashPositionAtClosePYAmt: number
  TotCashPosNotHedgeTransNovAmt: number
  TotCashPosHedgeTransNovAmt: number
  TotCashPositionAtCloseNovAmt: number
  TotCashPosNotHedgeTransJanAmt: number
  TotCashPosHedgeTransJanAmt: number
  TotCashPositionAtCloseJanAmt: number
}
// Content model for IRS Form 965 Schedule F
type IRS965ScheduleFType: {
  SeparateCategoryCd: string
  SanctionedCountryCd: string
  TotNotPTESect965aInclusionAmt: number
  TotPTESect965aInclusionAmt: number
  TotNotPTETaxesDeemedPaidAmt: number
  TotPTETaxesDeemedPaidAmt: number
}
// Content model for IRS Form 965 Schedule G
type IRS965ScheduleGType: {
  SeparateCategoryCd: string
  SanctionedCountryCd: string
  TotNotPTESect965aInclusionAmt: number
  TotPTESect965aInclusionAmt: number
  TotNotPTETaxesDeemedPaidAmt: number
  TotPTETaxesDeemedPaidAmt: number
}
// Content model for IRS Form 965 Schedule H
type IRS965ScheduleHType: {
  SeparateCategoryCd: string
  SanctionedCountryCd: string
  NetSmllrCY965aOrFrgnCashPosAmt: number
  CYTotalSection965aInclusionAmt: number
  CYTot965aNetSmllrPct: number
  CYApplcblTot965aNetSmllrPct: number
  SmllrCY965aOrFrgnCashPosAmt: number
  CYTot965aSmllrPct: number
  CYApplcblTot965aSmllrPct: number
  CYApplicableNotPTEPct: number
  NetSmllrPY965aOrFrgnCashPosAmt: number
  PYTotalSection965aInclusionAmt: number
  PYTot965aNetSmllrPct: number
  PYApplcblTot965aNetSmllrPct: number
  SmllrPY965aOrFrgnCashPosAmt: number
  PYTot965aSmllrPct: number
  PYApplcblTot965aSmllrPct: number
  PYApplicableNotPTEPct: number
}
// None
type DisallowedForeignTaxGrpType: {
  TotNotPTESect965aInclusionAmt: number
  TotPTESect965aInclusionAmt: number
  TotalSection965aInclusionAmt: number
  TotNotPTESect965cDeductionAmt: number
  TotPTESect965cDeductionAmt: number
  TotalSection965cDeductionAmt: number
  TotNotPTETaxesDeemedPaidAmt: number
  TotPTETaxesDeemedPaidAmt: number
  TotalTaxesDeemedPaidAmt: number
  ApplicableNotPTEPct: number
  DisallowedForeignTaxNotPTEAmt: number
  TotalDisallowedForeignTaxAmt: number
}
// Content model for IRS Form 970
type IRS970Type: {
  ElectsLIFOMethodForFrstTYEndDt: string
  ClsInventoriesValuedForPrTYInd: boolean
  SectionAdjustmentAgreementInd: boolean
  TenPercentMethodInd: boolean
  CnsntChgValuingInvntryMthdInd: boolean
}
// Content model for IRS Form 982
type IRS982Type: {
  DschrgOfIndbtInATitle11CaseInd: string
  DschrgIndbtExtentInsolventInd: string
  DischargeOfQlfyFarmIndbtInd: string
  DschrgQlfyRealPropBusIndbtInd: string
  DischargeOfQualifiedPrinResInd: string
  TotalDischargedIndebtednessAmt: number
  TreatAllAsDeprecPropBoxInd: boolean
  ExcldForDschrgQlfyRealPropAmt: number
  ExcludedToReduceNOLAmt: number
  ExcludedToReduceGenBusCrAmt: number
  ExcludedToReduceMinimumTxCrAmt: number
  ExcludedToReduceNetCapLossAmt: number
  ExcludedToReduceBasisOfPropAmt: number
  ExcludedToReducePrinResAmt: number
  DepreciablePropUsedOrHeldAmt: number
  LandUsedOrHeldAmt: number
  OtherPropertyUsedOrHeldAmt: number
  PassiveActyLossAndCrCyovAmt: number
  ForeignCreditCarryoverAmt: number
  ExcludedUnderSectPtIII1081BAmt: number
  TaxYearBeginDt: string
  TaxYearEndDt: string
  IncorporationStateCd: string
}
// Content model for Schedule 8812
type IRS1040Schedule8812Type: {
  TaxLessCreditsAmt: number
  CTCODCAmt: number
  ACTCBeforeLimitAmt: number
  QlfyChildUnderAgeSSNCnt: number
  QlfyChildUnderAgeSSNLimtAmt: number
  ACTCAfterLimitAmt: number
  TotalEarnedIncomeAmt: number
  NontaxableCombatPayAmt: number
  EarnedIncmMoreThanSpecifiedInd: boolean
  NetTotalEarnedIncomeAmt: number
  NetEarnedIncomeCalculatedAmt: number
  ThreeOrMoreQlfyChildrenInd: boolean
  FromW2Amt: number
  FromTaxReturnAmt: number
  CalcFromW2AndReturnAmt: number
  CalcAmtFromRetPlusTaxWhldAmt: number
  CalculatedDifferenceAmt: number
  LargerCalcIncomeOrDiffAmt: number
  AdditionalChildTaxCreditAmt: number
}
// Content model for IRS 1040 Schedule A
type IRS1040ScheduleAType: {
  MedicalAndDentalExpensesAmt: number
  TaxReturnAGIAmt: number
  CalculatedMedicalAllowanceAmt: number
  TotalMedicalAndDentalExpnssAmt: number
  StateAndLocalSalesTaxInd: string
  StateAndLocalTaxAmt: number
  RealEstateTaxesAmt: number
  PersonalPropertyTaxesAmt: number
  TotalStateAndLocalTaxAmt: number
  StateAndLocalTaxLimitationAmt: number
  TotalTaxesPaidAmt: number
  HomeMortgNotUsedInd: string
  RptHomeMortgIntAndPointsAmt: number
  Form1098PointsNotReportedAmt: number
  TotalHomeMortgIntAndPointsAmt: number
  TotalInterestPaidAmt: number
  GiftsByCashOrCheckAmt: number
  CarryoverFromPriorYearAmt: number
  TotalCharitableContriAmt: number
  TotalItemizedDeductionsAmt: number
  ItmzdDedLessThanStdDedInd: string
}
// Content model for Schedule B
type IRS1040ScheduleBType: {
  TotalSellerFinancedMortgIntAmt: number
  TaxableInterestSubtotalAmt: number
  CalculatedTotalTaxableIntAmt: number
  TotalOrdinaryDividendsAmt: number
  Form8814LiteralCd: string
  ForeignAccountsQuestionInd: boolean
  FinCENForm114Ind: boolean
  ForeignCountryCd: string
  TrustFormLiteralCd: string
  ForeignTrustQuestionInd: boolean
}
// None
type Form1040SchBPartIGroup1Type: {
  SellerFinancedNm: string
  SellerFinancedSSN: string
  SellerFinancedMortgageIntAmt: number
}
// None
type Form1040SchBPartIGroup2Type: {
  InterestAmt: number
}
// None
type Form1040SchBPartIIGroup1Type: {
  DividendAmt: number
}
// Content model for IRS 1040 Schedule C
type IRS1040ScheduleCType: {
  ProprietorNm: string
  SSN: string
  PrincipalBusinessActivityDesc: string
  BusinessNameLine1Txt: string
  EIN: string
  MaterialParticipationInCYInd: boolean
  NewBusinessInCurrentYearInd: string
  PaymentRqrFilingForm1099Ind: boolean
  RequiredForm1099FiledInd: boolean
  StatutoryEmployeeFromW2Ind: string
  TotalGrossReceiptsAmt: number
  ReturnsAndAllowancesAmt: number
  NetGrossReceiptsAmt: number
  GrossProfitAmt: number
  OtherIncomeAmt: number
  GrossIncomeAmt: number
  AdvertisingAmt: number
  CommissionsAndFeesAmt: number
  ContractLaborAmt: number
  EmployeeBenefitProgramAmt: number
  InsuranceAmt: number
  LegalAndProfessionalServiceAmt: number
  OfficeExpensesAmt: number
  PensionProfitSharingPlansAmt: number
  MachineryAndEquipmentRentAmt: number
  OtherBusinessPropertyRentAmt: number
  RepairsAndMaintenanceAmt: number
  SuppliesAmt: number
  TaxesAndLicensesAmt: number
  TravelAmt: number
  MealsAndEntertainmentAmt: number
  UtilitiesAmt: number
  WagesLessEmploymentCreditsAmt: number
  TotalExpensesAmt: number
  TentativeProfitOrLossAmt: number
  TotalAreaOfHomeCnt: number
  HomeBusinessUseSquareFeetCnt: number
  AllInvestmentIsAtRiskInd: string
  PurchasesLessPersonalItemsAmt: number
  CostOfLaborAmt: number
  MaterialsAndSuppliesAmt: number
  OtherCostsAmt: number
  TotalCostsAmt: number
  EndOfYearInventoryAmt: number
  CostOfGoodsSoldAmt: number
}
// Content model for IRS 1040 Schedule CEZ
type IRS1040SchCEZType: {
  ProprietorNm: string
  SSN: string
  PrincipalBusinessActivityDesc: string
  BusinessNameLine1Txt: string
  EIN: string
  PaymentRqrFilingForm1099Ind: boolean
  RequiredForm1099FiledInd: boolean
  StatutoryEmployeeFromW2Ind: string
  TotalGrossReceiptsAmt: number
  TotalOtherExpensesAmt: number
  NetProfitAmt: number
}
// Content model for Schedule D
type IRS1040ScheduleDType: {
  STGainOrLossFromFormsAmt: number
  NetSTGainOrLossFromSchK1Amt: number
  STCapitalLossCarryoverAmt: number
  NetSTCapitalGainOrLossAmt: number
  LTGainOrLossFromFormsAmt: number
  NetLTGainOrLossFromSchK1Amt: number
  Form8814LiteralCd: string
  Form8814Amt: number
  LTCapitalLossCarryoverAmt: number
  NetLTCapitalGainOrLossAmt: number
  NetSTAndLTCapitalGainOrLossAmt: number
  STAndLTGainInd: boolean
  UnrcptrSect1250GainWrkshtAmt: number
  ZeroOrBlankInd: boolean
  AllowableLossAmt: number
  QualifiedDividendsInd: boolean
}
// None
type F1040BasisRptNoAdjustmentsType: {
  TotalProceedsSalesPriceAmt: number
  TotalCostOrOtherBasisAmt: number
  TotalGainOrLossAmt: number
}
// None
type CapitalGainAndLossType: {
  TotalProceedsSalesPriceAmt: number
  TotalCostOrOtherBasisAmt: number
  TotAdjustmentsToGainOrLossAmt: number
  TotalGainOrLossAmt: number
}
// Content model for Schedule E
type IRS1040ScheduleEType: {
  PaymentRqrFilingForm1099Ind: boolean
  RequiredForms1099FiledInd: boolean
  TotAllPaymentsAllRentalPropAmt: number
  TotAllPaymentsAllRyltyPropAmt: number
  TotalMortgageInterestPaidAmt: number
  TotalDepreciationAmt: number
  TotalAllPropTotalExpensesAmt: number
  IncomeAmt: number
  LossesAmt: number
  PriorYearsLossesInd: boolean
  TotalPassiveIncomeAmt: number
  BusTotalNonpassiveIncomeAmt: number
  TotalPassiveLossAllowedAmt: number
  TotalNonpassiveLossAmt: number
  TotSect179ExpenseDeductionAmt: number
  TotalPrtshpSCorpIncomeAmt: number
  TotalPrtshpSCorpLossAmt: number
  NetPrtshpSCorpIncomeOrLossAmt: number
  EstateAndTrustTotPssvIncmAmt: number
  TotalOtherIncomeAmt: number
  TotPassiveDedOrLossAllowedAmt: number
  TotalDeductionOrLossAmt: number
  TotalEstateOrTrustIncomeAmt: number
  TotalEstateOrTrustLossAmt: number
  TotalREMICIncomeAmt: number
  NetFarmRentalIncomeOrLossAmt: number
  TotalSuppIncomeOrLossAmt: number
  FarmingAndFishingIncomeAmt: number
  RecnclForREProfessionalsAmt: number
}
// None
type OtherExpenseDetailType: {
  Desc: string
  Amt: number
}
// Content model for IRS Form 1040 Schedule EIC
type IRS1040ScheduleEICType: {
}
// Content model for Form 1040 Schedule F
type IRS1040ScheduleFType: {
  SSN: string
  PrincipalProductDesc: string
  AgriculturalActivityCd: string
  MateriallyParticipatedInd: boolean
  RequiredToFileForms1099Ind: boolean
  RequiredForms1099FiledInd: boolean
}
// None
type OtherFarmExpensesType: {
  ExpenseDescriptionTxt: string
  ExpenseAmt: number
}
// Content model for Schedule H
type IRS1040SchHType: {
  HouseholdEmployerNm: string
  EmployerNameControlTxt: string
  SSN: string
  HsldEmplPdCashWageOverLmtCYInd: boolean
  HsldEmplFedIncmTaxWithheldInd: boolean
  HsldEmplPdCashWageOvrLmtQtrInd: boolean
  SocialSecurityTaxCashWagesAmt: number
  SocialSecurityTaxAmt: number
  MedicareTaxCashWagesAmt: number
  MedicareTaxWithheldAmt: number
  TotMedcrTaxCashWagesAddnlWhAmt: number
  AddnlMedicareTaxWithholdingAmt: number
  FederalIncomeTaxWithheldAmt: number
  TotSocSecMedcrAndFedIncmTaxAmt: number
  HsldEmplPdTotCashWageAnyQtrInd: boolean
  UnemplPaidOnlyOneStateInd: boolean
  PayAllStateUnemplContriInd: boolean
  TxblFUTAWagesAlsoTxblUnemplInd: boolean
  TotalTaxHouseholdEmplCalcAmt: number
  CombinedFUTATaxPlusNetTaxesAmt: number
  RequiredToFileForm1040Ind: boolean
}
// Content model for Schedule J
type IRS1040ScheduleJType: {
  TaxableIncomeAmt: number
  ElectedFarmIncomeAmt: number
  ExcessNetLongTermCapGainAmt: number
  UnrecapturedPropertyGainAmt: number
  NetIncomeAmt: number
  CurrentTaxAmt: number
  TotalTaxTableAmt: number
  TentativeTax3rdPYRtnAmt: number
  TentativeTax2ndPYRtnAmt: number
  TentativeTax1stPYRtnAmt: number
  GrossFarmIncomeTaxAmt: number
  AverageFarmIncomeTaxAmt: number
}
// Content model for SCHEDULE R
type IRS1040ScheduleRType: {
  FilingStatusAmt: number
  TaxableDisabilityAmt: number
  SmallerOfFSOrTaxableAmt: number
  NontxSocSecAndRlrdBenefitsAmt: number
  NontaxableOtherAmt: number
  TotalNontaxableAmt: number
  TaxReturnAGIAmt: number
  ExemptionAmt: number
  AdjustedGrossIncomeAmt: number
  HalfAGIAmt: number
  AdjustedCreditAmt: number
  NetCreditAmt: number
  CalculatedAmountOfNetCreditAmt: number
  TotalTaxLessCreditsAmt: number
  CreditForElderlyOrDisabledAmt: number
}
// Content model for Schedule SE
type IRS1040ScheduleSEType: {
  PersonNm: string
  SSN: string
}
// None
type ShortScheduleSEType: {
  NetFarmProfitLossAmt: number
  ConservationReserveProgPymtAmt: number
  NetNonFarmProfitLossAmt: number
  MinimumProfitForSETaxAmt: number
  SelfEmploymentTaxAmt: number
  DeductibleSelfEmploymentTaxAmt: number
}
// None
type LongScheduleSEType: {
  ExemptForm4361Ind: string
  NetFarmProfitLossAmt: number
  ConservationReserveProgPymtAmt: number
  NetNonFarmProfitLossAmt: number
  MinimumProfitForSETaxAmt: number
  OptionalMethodAmt: number
  CombinedSEAmt: number
  W2WagesFromChurchesAmt: number
  MinAllowableChurchWagesAmt: number
  CombinedSEAndChurchWagesAmt: number
  SSTWagesRRTCompAmt: number
  UnreportedTipsAmt: number
  WagesSubjectToSSTAmt: number
  TotalWagesAndUnreportedTipsAmt: number
  AllowableSEAmt: number
  TaxBaseAmt: number
  SEBaseAmt: number
  SelfEmploymentTaxAmt: number
  DeductibleSelfEmploymentTaxAmt: number
  SETaxFarmOptionalMethodAmt: number
  SETaxNonFarmOptionalBaseAmt: number
  SETaxNonFarmOptionalMethodAmt: number
}
// Content model for Form 1065B Schedule K-1
type IRS1065BScheduleK1Type: {
  CorrectedInd: string
  PubliclyTradedPartnershipInd: string
  NonrecourseAmt: number
  QualifiedNonRcrsFinancingAmt: number
  ShareOfLiabilitiesOtherAmt: number
  TaxableIncomeLossPssvActyAmt: number
  TaxableIncomeLossOtherActyAmt: number
  QualifiedDividendsAmt: number
  NetCapitalGainLossPssvActyAmt: number
  NetCapitalGainLossOtherActyAmt: number
  NetPassiveAMTAdjustmentAmt: number
  NetOtherAMTAdjustmentAmt: number
  PassiveActivityCreditAmt: number
  LowIncomeHousingCreditAmt: number
}
// Content model for Form 1065 Schedule D
type IRS1065ScheduleDType: {
  RelatedPartyLikeKindExchInd: string
  STCapGainInstalSlsAmt: number
  STCapGainLossLikeKindExchAmt: number
  PrtshpShareSTCapGainOrLossAmt: number
  NetSTCapitalGainOrLossAmt: number
  LTCapGainInstalSlsAmt: number
  LTCapGainLossLikeKindExchAmt: number
  PrtshpShrLTCapGainOrLossAmt: number
  CapitalGainDistributionsAmt: number
  NetLTCapitalGainOrLossAmt: number
}
// None
type BasisRptNoAdjustmentsType: {
  TotalProceedsSalesPriceAmt: number
  TotalCostOrOtherBasisAmt: number
  TotalGainOrLossAmt: number
}
// None
type AssetSaleType: {
  TotalProceedsSalesPriceAmt: number
  TotAdjustmentsToGainOrLossAmt: number
  TotalGainOrLossAmt: number
}
// Content model for Form 1099-R
type IRS1099RType: {
  CorrectedInd: string
  PayerNameControlTxt: string
  PayerEIN: string
  RecipientNm: string
  PayerRecipientAccountNum: string
  PaymentDt: string
  GrossDistributionAmt: number
  TaxableAmt: number
  TxblAmountNotDeterminedInd: string
  TotalDistributionInd: string
  CapitalGainAmt: number
  FederalIncomeTaxWithheldAmt: number
  EmployeeContributionsAmt: number
  NetUnrlzdSecuritiesApprcnAmt: number
  F1099RDistributionCd: string
  IRASEPSIMPLEInd: string
  OtherDistributionAmt: number
  RcpntOthDistributionPct: number
  RcpntTotalDistributionPct: number
  TotalEmployeeContributionsAmt: number
  IRRAllocatedAmt: number
  DesignatedROTHAcctFirstYr: string
  FATCAFilingRequirementInd: string
  StandardOrNonStandardCd: string
}
// None
type F1099RStateLocalTaxGrpType: {
}
// Content model for Form 1116
type IRS1116Type: {
  AlternativeMinimumTaxCd: string
  ResidenceForeignCountryCd: {http://www.irs.gov/efile}AllCountriesType
  ForeignRegulatedInvestmtCompCd: string
  ForeignIncHighTaxedKickOutCd: string
  TotalForeignGrossIncomeAmt: number
  TotalDeductionOrLossAmt: number
  NetForeignTaxableIncomeLossAmt: number
  TotalForeignTaxesPaidOrAccrAmt: number
  ForeignGrossTaxPaidOrAccrAmt: number
  ForeignIncHighTaxKickOutAdjAmt: number
  ForeignTaxAvailableForCrRedAmt: number
  ForeignTaxableIncomeOrLossAmt: number
  ForeignNetTaxableIncomeAmt: number
  ForeignTaxableIncBfExemptAmt: number
  ForeignTaxableIncBfExemptRt: number
  TaxFromTaxReturnAmt: number
  MaxAllowedForeignTaxCreditAmt: number
  ForeignIncmSection951ACrAmt: number
  ForeignBranchIncomeCrAmt: number
  ForeignPassiveIncTaxCreditAmt: number
  ForeignGeneralIncTaxCreditAmt: number
  ForeignIncmSection901jCrAmt: number
  ForeignIncRsrcdTreatyTaxCrAmt: number
  ForeignIncLumpSumDistribCrAmt: number
  TentativeForeignTaxCreditAmt: number
  SmllrOfRtnTaxOrForeignTaxCrAmt: number
  IntlBoycottCreditReductionAmt: number
  ForeignTaxCreditAmt: number
}
// Content model for Form 1310
type IRS1310Type: {
  RefundDueTaxYr: string
  DecedentNm: string
  DeathDt: string
  DecedentSSN: string
  PersonNameControlTxt: string
  RefundClaimantSSN: string
  OtherPersonClaimingRefundInd: string
  ValidProofOfDeathInd: string
  DecedentHasWillInd: boolean
  CourtAppointedRepInd: boolean
  RepresentativeToBeAppointedInd: boolean
  PaymentAccordingToStateLawInd: boolean
  RefundClaimantSignatureDt: string
}
// Content model for IRS Form 2106
type IRS2106Type: {
  PersonNm: string
  OccupationTxt: string
  SSN: string
  VehicleExpenseAmt: number
  ParkingFeesTollsLocalTransAmt: number
  TravExpnsLessMealsEntrmtAmt: number
  BusExpnssLessMealsEntrmtAmt: number
  MealsAndEntertainmentAmt: number
  TotExpnssLessMealsEntrmtAmt: number
  TotalMealsAndEntrmtAmt: number
  OtherReimbNotRptOnW2Amt: number
  MealsEntrmtReimbNotRptW2Amt: number
  UnreimbursedBusinessExpenseAmt: number
  UnreimbursedMealsExpenseAmt: number
  AllowableBusinessDeductionAmt: number
  AllowableMealsDeductionAmt: number
  UnreimEmployeeBusExpnsAmt: number
  VehicleAvailableOffDutyHrsInd: boolean
  AnotherVehicleForPrsnlUseInd: boolean
  EvidenceToSupportDeductionInd: boolean
  EvidenceWrittenInd: boolean
  StandardMileageDeductionAmt: number
}
// Content model for IRS 2120
type IRS2120Type: {
  CalendarYr: string
}
// Content model for FORM 2210
type IRS2210Type: {
  CurrentYearTaxAfterCreditsAmt: number
  OtherTaxesAmt: number
  RefundableCreditsAmt: number
  CurrentYearTaxAmt: number
  CurrentYearTaxCalculatedAmt: number
  WithholdingTaxesAmt: number
  NetTaxDueAmt: number
  AnnualPaymentBasedOnPriorYrAmt: number
  RequiredAnnualPaymentAmt: number
  OwePenaltyInd: boolean
  WaiverOfEntirePenaltyInd: string
  WaiverOfPartOfPenaltyInd: string
  AnnualizedIncomeMethodInd: string
  ActuallyWithheldInd: string
  JointReturnInd: string
  TotalEstimatedTaxPaymentsAmt: number
  TotalWhTaxesAndESPaymentsAmt: number
  TotalUnderpaymentForYearAmt: number
  TotalUnderpaymentCalculatedAmt: number
  DueDatePaidMultipliedAmt: number
  RequiredInstallmentAAmt: number
  RequiredInstallmentBAmt: number
  RequiredInstallmentCAmt: number
  RequiredInstallmentDAmt: number
  EstimatedTaxPdAndWithheldAAmt: number
  EstimatedTaxPdAndWithheldBAmt: number
  EstimatedTaxPdAndWithheldCAmt: number
  EstimatedTaxPdAndWithheldDAmt: number
  UnderpaymentAAmt: number
  OverpaymentAAmt: number
  TaxToBeAppliedBAmt: number
  TaxesDueColumnBAmt: number
  AppliedOverpaymentBAmt: number
  AppliedUnderpaymentBAmt: number
  UnderpaymentBAmt: number
  OverpaymentBAmt: number
  TaxToBeAppliedCAmt: number
  TaxesDueColumnCAmt: number
  AppliedOverpaymentCAmt: number
  AppliedUnderpaymentCAmt: number
  UnderpaymentCAmt: number
  OverpaymentCAmt: number
  TaxToBeAppliedDAmt: number
  TaxesDueColumnDAmt: number
  AppliedOverpaymentDAmt: number
  UnderpaymentDAmt: number
  AGIPeriodAAmt: number
  AnnualizedIncomeAAmt: number
  ItemizedDeductionsAAmt: number
  AnnualizedItemizedDedAAmt: number
  ReturnStandardDeductionAAmt: number
  InstallmentDeductionAAmt: number
  QualifiedBusinessIncomeDedAAmt: number
  AggregateDeductionAAmt: number
  NetIncomeAAmt: number
  ExemptionClaimedAAmt: number
  TaxableIncomeAAmt: number
  TentativeTaxAAmt: number
  OtherTaxesAAmt: number
  TaxBeforeCreditsAAmt: number
  AllowedCreditsAAmt: number
  NetTaxDueAAmt: number
  ApplicableTaxDueAAmt: number
  TaxDueAAmt: number
  InstallmentTaxAAmt: number
  AggregateTaxDueAAmt: number
  AnnualizedIncomeInstallAAmt: number
  AGIPeriodBAmt: number
  AnnualizedIncomeBAmt: number
  ItemizedDeductionsBAmt: number
  AnnualizedItemizedDedBAmt: number
  ReturnStandardDeductionBAmt: number
  InstallmentDeductionBAmt: number
  QualifiedBusinessIncomeDedBAmt: number
  AggregateDeductionBAmt: number
  NetIncomeBAmt: number
  ExemptionClaimedBAmt: number
  TaxableIncomeBAmt: number
  TentativeTaxBAmt: number
  OtherTaxesBAmt: number
  TaxBeforeCreditsBAmt: number
  AllowedCreditsBAmt: number
  NetTaxDueBAmt: number
  ApplicableTaxDueBAmt: number
  TaxDueBAmt: number
  InstallmentTaxBAmt: number
  AccumulatedAdjustedTaxBAmt: number
  AggregateTaxDueBAmt: number
  AnnualizedIncomeInstallBAmt: number
  AGIPeriodCAmt: number
  AnnualizedIncomeCAmt: number
  ItemizedDeductionsCAmt: number
  AnnualizedItemizedDedCAmt: number
  ReturnStandardDeductionCAmt: number
  InstallmentDeductionCAmt: number
  QualifiedBusinessIncomeDedCAmt: number
  AggregateDeductionCAmt: number
  NetIncomeCAmt: number
  ExemptionClaimedCAmt: number
  TaxableIncomeCAmt: number
  TentativeTaxCAmt: number
  OtherTaxesCAmt: number
  TaxBeforeCreditsCAmt: number
  AllowedCreditsCAmt: number
  NetTaxDueCAmt: number
  ApplicableTaxDueCAmt: number
  TaxDueCAmt: number
  InstallmentTaxCAmt: number
  AccumulatedAdjustedTaxCAmt: number
  AggregateTaxDueCAmt: number
  AnnualizedIncomeInstallCAmt: number
  AGIPeriodDAmt: number
  AnnualizedIncomeDAmt: number
  ItemizedDeductionsDAmt: number
  AnnualizedItemizedDedDAmt: number
  ReturnStandardDeductionDAmt: number
  InstallmentDeductionDAmt: number
  QualifiedBusinessIncomeDedDAmt: number
  AggregateDeductionDAmt: number
  NetIncomeDAmt: number
  ExemptionClaimedDAmt: number
  TaxableIncomeDAmt: number
  TentativeTaxDAmt: number
  OtherTaxesDAmt: number
  TaxBeforeCreditsDAmt: number
  AllowedCreditsDAmt: number
  NetTaxDueDAmt: number
  ApplicableTaxDueDAmt: number
  TaxDueDAmt: number
  InstallmentTaxDAmt: number
  AccumulatedAdjustedTaxDAmt: number
  AggregateTaxDueDAmt: number
  AnnualizedIncomeInstallDAmt: number
}
// Content model for Form 2210-F
type IRS2210FType: {
  PenaltyWaiverRequestInd: string
  JointReturnInd: string
  CurrentYearTaxAfterCreditsAmt: number
  OtherTaxesAmt: number
  TotalTaxAfterCrAndOtherTaxAmt: number
  EarnedIncomeCreditAmt: number
  AdditionalChildTaxCreditAmt: number
  RefundableAmerOppCreditAmt: number
  FuelTaxCreditAmt: number
  ReconciledPremiumTaxCreditAmt: number
  Section1341a5BCreditAmt: number
  HealthCoverageTaxCreditAmt: number
  FarmOrFishermanCrSubtotalAmt: number
  CurrentYearTaxAmt: number
  CurrentYearTaxCalculatedAmt: number
  WithholdingTaxesAmt: number
  NetTaxDueAmt: number
  PriorYearTaxAmt: number
  RequiredAnnualPaymentAmt: number
  EstTaxPaymentsAndOtherTaxesAmt: number
  UnderpaymentAmt: number
  EarlierOfPaymentOrTaxDueDt: string
  PenaltyDayCnt: number
}
// Content model for Form 2439
type IRS2439Type: {
  VoidInd: string
  CorrectedInd: string
  TaxPeriodBeginDt: string
  TaxPeriodEndDt: string
  TotalUndistributedLTCapGainAmt: number
  UnrecapturedSection1250GainAmt: number
  CapitalGainSect1202Amt: number
  Collectibles28PercentGainAmt: number
  TaxPaidByRICOrREITAmt: number
}
// Content model for Form 2441
type IRS2441Type: {
  EligibilityRequirementMetInd: string
  TotalQlfdExpensesOrLimitAmt: number
  PrimaryEarnedIncomeAmt: number
  SpouseEarnedIncomeAmt: number
  SmallerOfExpensesOrIncomeAmt: number
  AdjustedGrossIncomeAmt: number
  CareExpensesDecimalAmt: number
  TaxLiabLmtFromCrLmtWrkshtAmt: number
  CreditForChildAndDepdCareAmt: number
  DependentCareBenefitsAmt: number
  CarryoverAmt: number
  ForfeitedAmt: number
  AdjustedDepdCareBenefitsAmt: number
  QualifiedExpensesAmt: number
  SmallerOfAdjOrQualifiedAmt: number
  EarnedIncomeAmt: number
  SpouseIncomeAmt: number
  TentativeExclusionAmt: number
  SpecifiedAmt: number
  Form1040AFiledInd: boolean
  SolePropshpPrtshpAmt: number
  PropshpPrtshpLessAdjBnftAmt: number
  DeductibleBenefitsAmt: number
  ExcludedBenefitsAmt: number
  TaxableBenefitsAmt: number
  AllowedCaredForAmt: number
  SumOfDedAndExcludedBenefitsAmt: number
  NetAllowableAmt: number
  TotalQualifiedExpensesAmt: number
  SmallerOfTotalQlfyExpensesAmt: number
}
// None
type CareProviderGrpType: {
  PaidAmt: number
}
// None
type QualifyingPersonGrpType: {
  IdentityProtectionPIN: string
  QualifiedCareExpensesPaidAmt: number
}
// Content model for Form 2555
type IRS2555Type: {
  NameLine1Txt: string
  SSN: string
  OccupationTxt: string
  EmployerForeignEntityInd: string
  EmployerUnitedStatesCompanyInd: string
  SelfEmploymentInd: string
  ForeignAffiliateEmployerInd: string
  LastFrgnEarnIncExclClaimedYr: string
  NoFrgnEarnIncExclPrevFiledInd: string
  ForeignEarnIncExclRevokedInd: boolean
  CitizenCountryNm: string
  SeparateForeignResidenceInd: boolean
  SeparateForeignResLocationTxt: string
  SeparateForeignResidenceDayCnt: number
  FamilyLivedAbroadInd: boolean
  SubmittedNonResidentStmtInd: boolean
  RequiredToPayIncomeTaxInd: boolean
  EmploymentContractTermsDesc: string
  VisaTypeDesc: string
  MaintainedHouseInUSInd: boolean
  PrincipalEmploymentCountryNm: string
  ForeignEarnedTotalWagesIncAmt: number
  ForeignBusinessIncomeShareAmt: number
  NonCashLodgingIncomeAmt: number
  NonCashMealIncomeAmt: number
  NonCashCarIncomeAmt: number
  TotalNonCashOtherPropertyAmt: number
  CostOfLivingAndOverseasDiffAmt: number
  FamilyAllowanceAmt: number
  EducationAllowanceAmt: number
  HomeLeaveAllowanceAmt: number
  QuartersAllowanceAmt: number
  TotalOtherPurposeAllowanceAmt: number
  TotalAllowancesPaidOnBehalfAmt: number
  TotalOtherForeignIncomeAmt: number
  TotalForeignEarnedIncomeAmt: number
  TotalForeignEarnedIncmExclAmt: number
  ForeignEarnedIncomeAmt: number
  ClaimingHousingExclOrDedInd: boolean
  HousingQualifiedExpenseAmt: number
  HousingExpenseLocationDesc: string
  HousingExpenseLimitAmt: number
  SmallerQualifiedOrLimitAmt: number
  HousingQualifiedDaysCnt: number
  HousingMaximumAllowedAmt: number
  HousingExpensesOverMaxAmt: number
  EmployerProvidedHousingAmt: number
  EmployerProvHousingExclPct: number
  HousingExclusionAmt: number
  ForeignEarnIncmExclQlfyDaysCnt: number
  ForeignEarnedIncExclusionPct: number
  TentForeignEarnedIncomeExclAmt: number
  ForeignIncLessHousingExclAmt: number
  ForeignEarnedIncExclusionAmt: number
  TentativeIncomeExclusionAmt: number
  HousingDeductionExpenseAmt: number
  HousingDeductionExclusionAmt: number
  HousingDeductionTentativeAmt: number
  HousingDeductionCarryoverAmt: number
  HousingDeductionAmt: number
}
// Content model for Form 2555-EZ
type IRS2555EZType: {
  NameLine1Txt: string
  SSN: string
  BonaFideResidentInd: boolean
  PhysicalPresenceInd: boolean
  TaxHomeTestInd: boolean
  OccupationTxt: string
  EmployerUnitedStatesCompanyInd: string
  EmployerForeignEntityInd: string
  LastFrgnEarnIncExclClaimedYr: string
  ForeignEarnIncExclRevokeTaxYr: string
  CitizenCountryNm: string
  ForeignEarnIncmExclQlfyDaysCnt: number
  FrgnEarnIncExclQlfy366DaysInd: boolean
  ForeignEarnedIncExclusionPct: number
  TentForeignEarnedIncomeExclAmt: number
  TotalForeignEarnedIncomeAmt: number
  ForeignEarnedIncExclusionAmt: number
}
// Content model for Form 3115
type IRS3115Type: {
  TaxYearBeginDt: string
  TaxYearEndDt: string
  ContactPersonNm: string
  TelephoneNum: string
  ApplicantAttachedFormInd: boolean
  DesignatedAccountingMthdChgNum: number
  AllInformationProvidedInd: boolean
  RequestChgUndSect1381Ind: boolean
  PreparerOtherThanFilerNm: string
  AnyFederalReturnsUnderExamInd: boolean
  AcctMthdChgUndConsiderationInd: boolean
  CopyProvidedToExaminingAgtInd: boolean
  NotUnderExamInd: string
  ThreeMonthWindowInd: string
  OneHundredTwentyDaysPeriodInd: string
  ExaminationEndDt: string
  MethodNotBeforeDirectorInd: string
  NegativeAdjustmentInd: string
  CAPInd: string
  MemberJoinedGroupDt: string
  AuditProtectionExamInd: string
  OtherInd: string
  FedReturnBeforeAppealsInd: boolean
  AppealsOfficerInd: string
  CounselForTheGovernmentInd: string
  AOOrGovtCounselProvCopyInd: boolean
  PrtshpSCorpAcctMthdUndExamInd: boolean
  RequestingChgToOverallAcctInd: boolean
  ConferenceOfRightRequestedInd: boolean
  RequireUseCutOffBasisNoInd: string
  TakingEntireSectAdjIntoAcctInd: boolean
  DeMinimisElection50KInd: string
  EligibleAcquisTransElectInd: string
}
// None
type GrossReceipts4YrsPrecedingType: {
  GrossReceiptsForFirstPrecYrAmt: number
  FirstPrecedingYearEndDt: string
  GrossReceiptsFor2ndPrecYrAmt: number
  SecondPrecedingYearEndDt: string
  GrossReceiptsForThirdPrecYrAmt: number
  ThirdPrecedingYearEndDt: string
  GrossReceiptsFor4thPrecYrAmt: number
  FourthPrecedingYearEndDt: string
}
// Content model for Form 3115 Schedule A
type IRS3115ScheduleAType: {
  RequestingRecurItemExcInd: boolean
  SmallBusinessTaxpayerInd: boolean
}
// Content model for Form 3115 Schedule D
type IRS3115ScheduleDType: {
  LongTermApplicantContractsInd: boolean
  ApplcntReqPctOfCompMethodInd: boolean
  CmplnFctrCstCstSmplfdMthdInd: boolean
  EnterCostPlusLTCntrctInd: boolean
  EnterFederalLTCntrctInd: boolean
  ApplicationSubjectToSectionInd: boolean
}
// None
type InventoryIdentificationAndValuationMethodsType: {
  SpecificIdentificationInd: string
  FIFOInd: string
  LIFOInd: string
  CostInd: string
  CostOrMarketInd: string
  RetailCostInd: string
  LowerRetailOfCostOrMarketInd: string
}
// None
type PresentAndProposedMethodCheckboxesType: {
  PresentMethodTxt: string
  ProposedMethodTxt: string
}
// Content model for Form 3115 Schedule E
type IRS3115ScheduleEType: {
}
// None
type ContactInfoType: {
  PersonNm: string
  PhoneNum: string
}
// Type for Contact Information and tax year(s)
type ContactAndTaxYearInfoType: {
}
// Content model for Form 3468
type IRS3468Type: {
  PropertyDesc: string
  TreatedAsAcquiredPropertyAmt: number
  InvstIntgrtGasCombCycPropAmt: number
  CalcGasCombCycPropInvstCrAmt: number
  AdvancedCoalBaseTechnologyAmt: number
  CalcAdvancedCoalBaseTechAmt: number
  QlfyAdvCoalBasedTechAmt: number
  CalcAdvCoalBasedTechAmt: number
  TotalQlfyAdvncCoalProjCrAmt: number
  QlfyGasificationPropBssAmt: number
  CalcQlfyGasificationPropBssAmt: number
  OtherQlfyInvstPropertyBasisAmt: number
  CalcOtherQlfyInvstPropCrAmt: number
  TotalQlfyGasificationProjCrAmt: number
  BssQlfyInvstAdvncEnergyAmt: number
  CalcBssQlfyInvstAdvncEnergyAmt: number
  UnusedCreditFromCoopAmt: number
  TotAdvncCoalGasAndEnergyCrAmt: number
  RehabilitationPeriodBeginDt: string
  RehabilitationPeriodEndDt: string
  AdjustedBasisOfBuildingAmt: number
  QlfyRehbltExpendIncurredAmt: number
  Pre1936BuildingAmt: number
  CertifiedHistoricStructureAmt: number
  OtherCertifiedHistStrctrAmt: number
  NPSApprovalDt: string
  RehbltCrElectLargePartnerAmt: number
  GthrmlAndSolarEgyPropBssAmt: number
  CalcGthrmlAndSolarEgyPropAmt: number
  PropSolarIllmntnOrEgyBssAmt: number
  CalcPropSolarIllmntnOrEgyAmt: number
  QualifiedFuelCellPropBssAmt: number
  CalcQlfyFuelCellPropBssAmt: number
  BetweenLmtFuelCellPropKwCapQty: number
  BetweenLmtFuelCellPropKwCapAmt: number
  AdjustedQlfyFuelCellPropCrAmt: number
  BasisQlfyFuelCellPropAcqAmt: number
  CalcBssQlfyFuelCellPropAcqAmt: number
  AfterLmtFuelCellPropKwCapQty: number
  AfterLmtFuelCellPropKwCapAmt: number
  AdjBssQlfyApplcblFuelCellCrAmt: number
  QlfyMicroturbinePropBssAmt: number
  CalcQlfyMicroturbinePropBssAmt: number
  QlfyMicroturbinePropKwCapQty: number
  CalcQlfyMcrtrbnPropKwCapAmt: number
  AdjQlfyMicroturbineKwBssAmt: number
  BasisOfHeatAndPowerPropAmt: number
  CalcBasisOfHeatAndPowerPropAmt: number
  MegaHorsepowerPct: number
  AdjHeatAndPowerSysPropCrAmt: number
  BasisOfWindEnergyPropAmt: number
  CalcBasisOfWindEnergyPropAmt: number
  AdjBasisOfWindEnergyPropCrAmt: number
  BssOfWindEgyConstrErctnAmt: number
  CalcBssOfWindEgyConstrErctnAmt: number
  BssGthrmlPropHtPumpSysAmt: number
  CalcBssGthrmlPropHtPumpSysAmt: number
  BssOfPropPlacedInSrvcAmt: number
  CalcBssOfPropPlacedInSrvcAmt: number
  BssWindPropPlacedInSrvcAmt: number
  CalcBssWindPropPlacedInSrvcAmt: number
  BssWindPropPlacedInSrvcYr2Amt: number
  CalcBssWindPropPlcdSrvcYr2Amt: number
  BssWindPropPlacedInSrvcYr3Amt: number
  CalcBssWindPropPlcdSrvcYr3Amt: number
  UnusedCrRehbltEgyCrFromCoopAmt: number
  TotalInvestmentCreditAmt: number
}
// Content model for Form 3800
type IRS3800Type: {
  GeneralBusCrFromNnPssvActyAmt: number
  CurrYearPassiveActyCreditsAmt: number
  PssvActyForGenBusCrAllowedAmt: number
  CarryBackGeneralBusinessCrAmt: number
  CYCreditsNotAllwAgainstTMTAmt: number
  RegularTaxBeforeCreditsAmt: number
  AlternativeMinimumTaxAmt: number
  AdjustedRegTaxBeforeCreditAmt: number
  ForeignTaxCreditAmt: number
  CertainAllowableCreditsAmt: number
  TotalTaxCreditsAmt: number
  NetIncomeTaxAmt: number
  NetRegularTaxAmt: number
  ExcessNetRegularTaxAmt: number
  TentativeMinimumTaxAmt: number
  AdjustedExcessNetRegularTaxAmt: number
  AdjustedNetIncomeTaxAmt: number
  TentativeMinimunTaxTimesPctAmt: number
  GreaterExcessOrTimesPctAmt: number
  NetIncmTaxLessGreaterExcessAmt: number
  SubSmllrFromNetLessGreaterAmt: number
  TotEmpwrZoneGenBusCreditsAmt: number
  GBCFromPssvActyAllPartsAmt: number
  PassiveActyAllowedForTYAmt: number
  TotalPassiveActivityCreditAmt: number
  EmpwrZoneAndComEmploymentCrAmt: number
  NetIncomeTaxLessPctExcessAmt: number
  SumSmllrEmpwrZnEmplmnCrAmt: number
  NetSmllrAndEmpwrZnEmplmnCrAmt: number
  AllwGenBusCrFromNonPssvActyAmt: number
  GenBusEligSmllBusPssvActyCrAmt: number
  OtherSpecifiedAllwGenBusCrAmt: number
  AllwGenAndEligSmllBusCfwdCrAmt: number
  AllwGenAndEligSmllBusCybkCrAmt: number
  TotAllwGenAndEligSmllBusCrAmt: number
  SmllrGenBusCrOrTotGenEligCrAmt: number
}
// None
type GenBusCrOrEligSmllBusCrGrpType: {
}
// None
type ConsolidatedBusinessCreditsGrpType: {
  ConsolidatedSectionInd: string
}
// None
type GeneralBusCrFromNnpssvActyGrpType: {
  GeneralBusCrFromNnpssvActyInd: string
}
// None
type GeneralBusCrFromPassiveActyGrpType: {
  GeneralBusCrFromPassiveActyInd: string
}
// None
type GeneralBusCrCarryforwardsGrpType: {
  GeneralBusCrCarryforwardsInd: string
}
// None
type GeneralBusCrCarrybacksGrpType: {
  GeneralBusCrCarrybacksInd: string
}
// None
type EligSmllBusCrCarryforwardsGrpType: {
  EligSmllBusCrCarryforwardsInd: string
}
// None
type BusinessCreditsGrpType: {
  CurrentYearGeneralBusCrAmt: number
  SumOfAllowableGeneralBusCrAmt: number
  TotalBusinessCreditsAmt: number
}
// Content model for IRS Form 3903
type IRS3903Type: {
  MilitaryMoveCd: string
  TransportHouseholdGoodsAmt: number
  TravelAndLodgingExpenseAmt: number
  TotalMovingExpenseAmt: number
  TotalEmployerExpensesPaidAmt: number
  MovingExpensesDeductibleInd: boolean
  MovingDeductionAmt: number
}
// Content model for Form 4136
type IRS4136Type: {
  OffHwyBusUseGasolineGalsQty: number
  FarmingPurposesGasolineGalsQty: number
  ExportedNontxUseGasGalsQty: number
  AviationGasolineGallonsQty: number
  ExpNontxAviationGasGalsQty: number
  LUSTTxAvnFuelFrgnTradeGalsQty: number
  FarmPrpsUndyedDslFuelGalsQty: number
  TrainUseOfUndyedDieselGalsQty: number
  BusUseOfUndyedDieselGalsQty: number
  ExpUndyedDieselFuelGalsQty: number
  FarmPrpsUndyedKeroseneGalsQty: number
  BusUseOfUndyedKeroseneGalsQty: number
  ExportedUndyedKeroseneGalsQty: number
  KeroseneUsedInAvnTxd244GalsQty: number
  KeroseneUsedInAvnTxd219GalsQty: number
  LUSTTxKrsnAvnFrgnTrdGalsQty: number
  UndyedDieselRegistrationNum: string
  SlsUndyedDslStLclGovtGalsQty: number
  SlsUndyedDieselUseBusGalsQty: number
  UndyedKeroseneRegistrationNum: string
  SlsUndyedKrsnBlockPumpGalsQty: number
  SlsUndyedKrsnUseBusGalsQty: number
  KeroseneForAvnRegistrationNum: string
  SlsKrsnUsedInAvnTxd219GalsQty: number
  SlsKrsnUsedInAvnTxd244GalsQty: number
  SlsKrsnNnxmptUseInAvnGalsQty: number
  LUSTTxSlsKrsnAvnFrgnTrdGalsQty: number
  AlcoholFuelCrRegistrationNum: string
  BiodieselMixtureGallonsQty: number
  AgriBiodieselMixtureGallonsQty: number
  RenewableDieselMixtureGalsQty: number
  AlternativeFuelRegistrationNum: string
  LiquefiedPetroleumGasGalsQty: number
  PSeriesFuelsGallonsQty: number
  CompressedNaturalGasGalsQty: number
  LiquefiedHydrogenGallonsQty: number
  LiquidFuelDerFromCoalGalsQty: number
  LiquidFuelDerBiomassGalsQty: number
  LiquefiedNaturalGasGallonsQty: number
  LiquefiedGasDerBiomassGalsQty: number
  CompressedGasBiomassGGEQty: number
  CreditCardIssrRegistrationNum: string
  DslFuelSoldStLocalGovtGalsQty: number
  KrsnFuelSoldStLocalGovtGalsQty: number
  ExpNontxUseDslWtrEmulsionQty: number
  DieselWtrBlndgRegistrationNum: string
  BlndrCrUseDslWtrEmulsionQty: number
  ExportedDyedDieselFuelGalsQty: number
  ExportedDyedKeroseneGallonsQty: number
  TotalFuelTaxCreditAmt: number
}
// None
type GasoholType: {
  NontaxableUseOfFuelTypeCd: string
  GallonsQty: number
}
// None
type UndyedDieselKeroseneType: {
  NontaxableUseOfFuelTypeCd: string
  GallonsQty: number
}
// None
type AviationFuelGasolineType: {
  NontaxableUseOfFuelTypeCd: string
  GallonsQty: number
}
// None
type AviationGradeKeroseneType: {
  NontaxableUseOfFuelTypeCd: string
  GallonsQty: number
}
// None
type AlternativeFuelsType: {
  NontaxableUseOfFuelTypeCd: string
  GallonsQty: number
}
// None
type DieselWaterFuelEmulsionType: {
  NontaxableUseOfFuelTypeCd: string
  GallonsQty: number
}
// None
type BusNontaxableTypeOfUse: {
  FuelTaxLocalBusCd: string
  NontaxableUseOfFuelTypeCd: string
  CreditRt: number
  GallonsQty: number
}
// None
type NoncommercialAviationKeroseneType: {
  NontaxableUseOfFuelTypeCd: string
  GallonsQty: number
}
// None
type NontaxableUseTaxedAt044Type: {
  NontaxableUseOfFuelTypeCd: string
  GallonsQty: number
}
// None
type NontaxableUseTaxed219Type: {
  NontaxableUseOfFuelTypeCd: string
  GallonsQty: number
}
// Content model for IRS4137
type IRS4137Type: {
  PersonNm: string
  SSN: string
  TotalTipsReceivedAmt: number
  TotalTipsReportedAmt: number
  TotalTipsReceivedMinusRptAmt: number
  IncidentalCashAndTipsAmt: number
  NetUnreportedMinusIncdntlAmt: number
  SocialSecurityWagesAndTipsAmt: number
  NetWageSubjectToSocSecTaxAmt: number
  UnreportedTipsSubjToSocSecAmt: number
  SocialSecurityTaxTipAmt: number
  MedicareTaxTipsAmt: number
  SocSecMedicareTaxUnrptdTipAmt: number
}
// Content model for Form 4255
type IRS4255Type: {
  TotalIncreaseInTaxAmt: number
}
// None
type RecaptureOfInvstCrPropertiesType: {
  PropertyDesc: string
  CreditRt: number
  CreditBasePYAmt: number
  NonqualifiedFinanceNetChgAmt: number
  CreditBaseCYAmt: number
  RefiguredCreditAmt: number
  PriorYearsGeneralBusinessCrAmt: number
  AtRiskCreditRecaptureAmt: number
  UnusedGeneralBusCrOrigCrAmt: number
  NonqualifedFinanceRcptrTaxAmt: number
  PlacedInServiceDt: string
  PropertyCeasedToQualifyDt: string
  PropertyQualifiedYearCnt: number
  UnusedGeneralBusCrNoCrAmt: number
  AggregateCreditDecreaseAmt: number
  RecapturePct: number
  InvestmentCrRecaptureTaxAmt: number
}
// Content model for Form 4562
type IRS4562Type: {
  BusinessOrActivityTxt: string
  MaximumDollarLimitationAmt: number
  TotalCostOfSection179PropAmt: number
  ThresholdCostOfSect179PropAmt: number
  ReductionInLimitationAmt: number
  DollarLimitationForTaxYearAmt: number
  TotalElectedCostSect179PropAmt: number
  TentativeDeductionAmt: number
  DisallowedDeductionCyovAmt: number
  BusinessIncomeLimitationAmt: number
  NextYearCarryoverAmt: number
  SpecialAllowanceAmt: number
  OtherDepreciationAmt: number
  MACRSDedForAstInSrvcBfrPYAmt: number
  GeneralAssetAccountElectionInd: string
  TotalDepreciationAmt: number
  Section263ACurrentYearCostAmt: number
  EvidenceToSupportDeductionInd: boolean
  EvidenceWrittenInd: boolean
  TotalSpecialDeprecAllwncAmt: number
  TotalListedDepreciationAmt: number
  TotalSection179ExpenseAmt: number
  PolicyNoPrsnlOrCmmtngUseInd: boolean
  PolicyNoPrsnlExcCmmtngUseInd: boolean
  TreatAllVehUseAsPrsnlUseInd: boolean
  ProvideOverNumVehAndHaveRecInd: boolean
  MeetRqrForAutoDemoUseInd: boolean
  AmortizationCostsBeforeTYAmt: number
  TotalAmortizationAmt: number
}
// None
type ElectedPropertyType: {
  PropertyDesc: string
  CostForBusinessUseOnlyAmt: number
  ElectedCostAmt: number
}
// None
type GDS3To20YearPropertyType: {
  BasisForDepreciationAmt: number
  RecoveryPrd: number
  DepreciationConventionCd: string
  DepreciationMethodCd: string
  DepreciationDeductionAmt: number
}
// None
type MoreThanHalfBusinessUsePropertyType: {
  PropertyDesc: string
  PlacedInServiceDt: string
  BusinessInvestmentUsePct: number
  CostOrOtherBasisAmt: number
  BasisForDepreciationAmt: number
  RecoveryPrd: number
  DeprecMthdAndConventionTypeCd: string
  DepreciationDeductionAmt: number
  ElectedSection179CostAmt: number
}
// None
type LessThanHalfBusinessUsePropertyType: {
  PropertyDesc: string
  PlacedInServiceDt: string
  BusinessInvestmentUsePct: number
  CostOrOtherBasisAmt: number
  BasisForDepreciationAmt: number
  RecoveryPrd: number
  DepreciationConventionAndPreCd: string
  DepreciationDeductionAmt: number
}
// None
type VehicleUsageType: {
  BusinessMilesCnt: number
  CommutingMilesCnt: number
  OtherPersonalMilesCnt: number
  TotalMilesCnt: number
  VehicleAvailableOffDutyHrsInd: boolean
  UsedPrimarilyByOwnerInd: boolean
  AnotherVehicleForPrsnlUseInd: boolean
}
// None
type AmortizationInfoTableType: {
  CostDesc: string
  AmortizationBeginDt: string
  AmortizableAmt: number
  CodeSectionTxt: string
  AmortizationPeriodOrPctTxt: string
  AmortizationThisYearAmt: number
}
// Content model for Form 4563
type IRS4563Type: {
  NameLine1Txt: string
  SSN: string
  BonaFideResidenceBeginDt: string
  FamilyLivingWithYouInd: boolean
  HmMaintOutsdAmericanSamoaInd: boolean
  SelfEmployedCd: string
  WagesExclusionAmt: number
  TaxableInterestExclusionAmt: number
  OrdinaryDividendsExclusionAmt: number
  BusinessIncomeExclusionAmt: number
  CapitalGainExclusionAmt: number
  RentalRealEstateIncomeExclAmt: number
  FarmIncomeExclusionAmt: number
  TotalOtherIncomeExclusionAmt: number
  GrossIncomeExclusionAmt: number
}
// Content model for Form 4684
type IRS4684Type: {
  FederallyDeclaredDisasterInd: string
  FEMADisasterDeclarationNum: string
  TotalPrsnlPropertyTheftLossAmt: number
  CasualtyOrTheftLossLimitAmt: number
  NetCasualtyOrTheftLossAmt: number
  TotalCasualtyAndTheftGainAmt: number
  TotalNetCasualtyOrTheftLossAmt: number
  TotalTheftGainLessTotalLossAmt: number
  TotalLossLessTotalTheftGainAmt: number
  TenPercentOfAGIAmt: number
  CalcAdjGroIncmMnsTotNetLossAmt: number
  TotalBusPropertyTheftLossAmt: number
  TotShortTermTradeOrBusinessAmt: number
  ShortTermPropIncomeProdTotAmt: number
  ShortTermTotalGainsTheftAmt: number
  CasualtyOrTheftGainFrom4797Amt: number
  LongTermTradeOrBusinessTotAmt: number
  LongTermPropIncomeProdTotAmt: number
  LongTermTotalGainsTheftAmt: number
  LongTermPropertyTotalLossesAmt: number
}
// None
type BusinessPropertiesType: {
  PropertyDesc: string
  CostOrAdjustedBasisAmt: number
  InsuranceOrOthReimbursementAmt: number
  GainFromCasualtyOrTheftAmt: number
  FairMarketValueBeforeTheftAmt: number
  FairMarketValueAfterTheftAmt: number
  NetFairMarketValueAmt: number
  SmllrOfCostOrNetFairMrktVlAmt: number
}
// None
type PersonalUsePropertiesType: {
  PropertyDesc: string
  AcquiredDt: string
  CostOrOtherBasisAmt: number
  GainFromCasualtyOrTheftAmt: number
  FairMarketValueBeforeTheftAmt: number
  FairMarketValueAfterTheftAmt: number
  NetFairMarketValueAmt: number
  SmllrOfAdjOrNetFairMrktVlAmt: number
  PropertyMinusInsuranceValueAmt: number
}
// None
type GainsAndLossesType: {
  CasualtyOrTheftDesc: string
  TradeOrRentalPropertyAmt: number
  IncomeProducingPropertyAmt: number
  GainsFromCasualtiesOrTheftAmt: number
}
// None
type ShortTermPropNetGainOrLossType: {
  PassiveActivityLossLiteralCd: string
  ShortTermPropNetGainOrLossAmt: number
}
// None
type ShortTermPropertyIncTotalType: {
  PassiveActivityLossLiteralCd: string
  ShortTermPropIncomeProdTotAmt: number
}
// None
type LongTermPropNetGainOrLossType: {
  PassiveActivityLossLiteralCd: string
  LongTermPropNetGainOrLossAmt: number
}
// None
type LongTermPropertyIncomeTotalType: {
  PassiveActivityLossLiteralCd: string
  LongTermPropIncomeProdTotAmt: number
}
// None
type LongTermPropIncomePlusGainType: {
  PassiveActivityLossLiteralCd: string
  LongTermPropIncomePlusGainAmt: number
}
// None
type RevenueProcedure200920GrpType: {
  InitialInvestmentAmt: number
  SubsequentInvestmentsAmt: number
  IncmRptOnTxRtnTYPrDiscvYrAmt: number
  TotInitialSubsqInvstAndIncmAmt: number
  TotalWithdrawalsForAllYearsAmt: number
  TotalQlfyInvstAmt: number
  ActlOrPotentialClaimsRcvryPct: number
  RcvryPctTimesTotalQlfyInvstAmt: number
  ActualRecoveryAmt: number
  InsuranceSIPCRecoveryAmt: number
  TotalRecoveryAmt: number
  TheftLossDeductionAmt: number
}
// None
type TheftLossDedRevenuePr200920GrpType: {
}
// None
type FedDclrDsstrLossElectGrpType: {
  DisasterDesc: string
  DisasterDt: string
}
// None
type FedDclrDsstrLossPrElectRvkGrpType: {
  DisasterDesc: string
  ElectionFileDt: string
  ElectionRepymtAmtExplnTxt: string
}
// Content model for Form 4797
type IRS4797Type: {
  CurrentYearGrossProceedsAmt: number
  GainForm4684Amt: number
  GainInstallmentSalesFrm6252Amt: number
  GainLossForm8824Amt: number
  GainOthThanCasualtyOrTheftAmt: number
  TotalPropertyGainLossAmt: number
  NonrecapturedNet1231LossesAmt: number
  TotalGainLossAmt: number
  OrdinaryLossAmt: number
  PropGainNonrecapturedLossAmt: number
  PassiveActivityLossLiteralCd: string
  NetGainLossForm4684Amt: number
  OrdnryGainInstalSaleFrm6252Amt: number
  OrdinaryGainLossForm8824Amt: number
  TotalOrdinaryGainLossAmt: number
  Form4684LossAmt: number
  OtherGainLossAmt: number
  TotalGainsForAllPropertiesAmt: number
  Sect179DedDepreciationPYAmt: number
  Sect280DedDepreciationPYAmt: number
  Sect179RcmptDepreciationAmt: number
  Sect280RcmptDepreciationAmt: number
  Section179RecaptureAmt: number
  Sect280RecaptureAmt: number
}
// Type for repeating tables rows in Part I
type PropertySaleExchangeType: {
  PropertyDesc: string
  DepreciationAllowedAmt: number
  CostOrOtherBasisAmt: number
  GainOrLossAmt: number
}
// Type for repeating tables rows in Part II
type OrdinaryGainLossType: {
  GrossSalesPriceAmt: number
  DepreciationAllowedAmt: number
  CostOrOtherBasisAmt: number
  GainOrLossAmt: number
}
// Type for repeating property columns in Part III
type PropertyDispositionType: {
  PropertyDesc: string
  GrossSalesPriceAmt: number
  CostOrOtherBasisExpenseSaleAmt: number
  DepreciationDepletionAllwAmt: number
  AdjustedBasisAmt: number
  TotalGainAmt: number
  Section1245DepreciationAllwAmt: number
  Section1245PropertyAmt: number
  AddnlDepreciationAfter1975Amt: number
  ApplicablePercentageAmt: number
  GainLessDeprecAfter1975Amt: number
  AddnlDepreciation1969To1976Amt: number
  SmllrReducedGainAddnlDeprecAmt: number
  Section291Amt: number
  Section1250PropertyAmt: number
  SoilWaterLandClearExpenseAmt: number
  ApplcblPctSoilWtrClearExpnAmt: number
  Section1252PropertyAmt: number
  IntangibleDrillingDevCostAmt: number
  Section1254PropertyAmt: number
  ApplcblPctPaymentExcludedAmt: number
  Section1255PropertyAmt: number
}
// Content model for IRS4835
type IRS4835Type: {
  EIN: string
  ActivelyParticipatedInd: boolean
  LivestockAndCropIncomeAmt: number
  CooperativeDistributionsAmt: number
  CooperativeDistriTxblAmt: number
  AgriculturalProgramPymtAmt: number
  AgriculturalProgramPymtTxblAmt: number
  CCCLoansForfeitedAmt: number
  CCCLoansForfeitedTaxableAmt: number
  CropInsProcAndDsstrPymtAmt: number
  CropInsProcAndDsstrPymtTxblAmt: number
  CropInsProcDefrdPrevTYAmt: number
  OthIncmIncludingGasFuelTxCrAmt: number
  GrossFarmRentalIncomeAmt: number
  CarAndTruckExpensesAmt: number
  ChemicalExpenseAmt: number
  ConservationExpenseAmt: number
  CustomHireExpenseAmt: number
  DeprecAndSect179ExpnsDedAmt: number
  EmployeeBenefitProgramAmt: number
  FeedPurchasedExpenseAmt: number
  FertilizerAndLimeExpenseAmt: number
  FreightAndTruckingExpenseAmt: number
  GasolineFuelAndOilExpenseAmt: number
  InsuranceAmt: number
  LaborHiredExpenseAmt: number
  PensionProfitSharingPlansAmt: number
  MachineryAndEquipmentRentAmt: number
  OtherBusinessPropertyRentAmt: number
  RepairsAndMaintenanceAmt: number
  SeedAndPlantExpenseAmt: number
  StorageAndWarehousingExpnsAmt: number
  SuppliesAmt: number
  TaxExpenseAmt: number
  UtilitiesAmt: number
  VtrnryBreedingMedicineExpnsAmt: number
  Section263AIndicatorCd: string
  TotalExpensesAmt: number
  FarmRentalDeductibleLossAmt: number
}
// None
type OtherExpensesType: {
  Desc: string
  Amt: number
}
// Content model for IRS4952
type IRS4952Type: {
  InvestmentInterestExpenseAmt: number
  PriorYrDisallowInvsmtIntExpAmt: number
  TotalInvestmentInterestExpAmt: number
  InvestmentPropGrossIncomeAmt: number
  InvestmentPropQualDividendsAmt: number
  InvestmentPropNetGrossIncAmt: number
  InvestmentPropNetDispGainAmt: number
  InvestmentNetGainLessSmallAmt: number
  InvestmentIncomeElectionAmt: number
  InvestmentIncomeAmt: number
  InvestmentExpenseAmt: number
  NetInvestmentIncomeAmt: number
  DisallowedCarryForwardExpAmt: number
  InvestmentInterestExpDeductAmt: number
}
// Content model for FORM 4970
type IRS4970Type: {
  PersonSubjectToTrustTaxNm: string
  PersonSubjectToTrustTaxSSN: string
  TrustEIN: string
  BeneficiaryBirthDt: string
  TrustCnt: number
  CurrentDistributionAmt: number
  BeforeAgeDistributionAmt: number
  UndistributedNetIncomeAmt: number
  TrustTaxesAmt: number
  TotalDistributionAmt: number
  ExemptInterestAmt: number
  TotalDistributionTaxableAmt: number
  TrustEarlierTaxYearsCnt: number
  AverageAnnualDistributedAmt: number
  PercentageDistributionAmt: number
  EarlyTaxYearsAvgCnt: number
  AverageForRecomputingTaxAmt: number
  PYOneTaxableIncomeAmt: number
  PYTwoTaxableIncomeAmt: number
  PYThreeTaxableIncomeAmt: number
  PYFourTaxableIncomeAmt: number
  PYFiveTaxableIncomeAmt: number
  ThreeYearAdjustedTaxAmt: number
  AverageAdjustedTaxAmt: number
  TotalAdjustedTaxAmt: number
  PartialTaxOnAccumDistriAmt: number
}
// Content model for IRS 4972
type IRS4972Type: {
  PersonNm: string
  SSN: string
  DistributionOfQualifiedPlanInd: boolean
  RolloverInd: boolean
  EmployeeBeneficiaryDistriInd: boolean
  QualifyingAge5YearMemberInd: boolean
  PriorYearDistributionInd: boolean
  BeneficiaryDistributionInd: boolean
  CapitalGainTimesElectionPctAmt: number
  LumpSumDistriDeathBnftExclAmt: number
  LumpSumDistriTotalTaxableAmt: number
  AnnuityActuarialValueAmt: number
  LumpSumDistriAdjTotTaxableAmt: number
  LumpSumDistri50PctTotalTxblAmt: number
  LumpSumNetAdjTotalTaxableAmt: number
  LumpSumDistriProratedTxblAmt: number
  LumpSumMinDistriAllowanceAmt: number
  LumpSumDistriAllowableTxblAmt: number
  LumpDistribFederalEstateTaxAmt: number
  LumpSumDistriNetTaxableAmt: number
  LumpSumDistriActuarialAdjPct: number
  LumpSumDistriMinAllwPercentAmt: number
  LumpSumDistriAdjActuarialAmt: number
  LumpSumDistriPctAdjTxblAmt: number
  LumpSumDistriTaxOnPercentAmt: number
  LumpSumDistriTentAvgTaxAmt: number
  LumpSumDistriTxblAdjActrlAmt: number
  AdjustedActuarialAmt: number
  LumpSumDistriAdjAverageTaxAmt: number
  LumpSumRsdlAnnuityAvgTaxAmt: number
  LumpSumDistriMultRecipientsCd: string
  LumpSumDistributionTaxAmt: number
}
// Content model for IRS Form 5074
type IRS5074Type: {
}
// None
type AllocationGroupType: {
  WagesSalariesAndTipsAmt: number
  TaxableInterestAmt: number
  OrdinaryDividendsAmt: number
  TxblRefCrOffsetLocalIncmTaxAmt: number
  AlimonyReceivedAmt: number
  BusinessIncomeLossAmt: number
  CapitalGainLossAmt: number
  OtherGainLossAmt: number
  TaxableIRAAmt: number
  PensionsAnnuitiesAmt: number
  RentalRealEstateIncomeLossAmt: number
  FarmIncomeLossAmt: number
  UnemploymentCompAmt: number
  TaxableSocSecAmt: number
  TotalIncomeAmt: number
  EducatorExpensesAmt: number
  BusExpnsReservistsAndOthersAmt: number
  HealthSavingsAccountDedAmt: number
  MovingExpenseAmt: number
  DeductibleSelfEmploymentTaxAmt: number
  SelfEmpldSepSimpleQlfyPlansAmt: number
  SelfEmpldHealthInsDedAmt: number
  PnltyOnErlyWthdrwOfSavingsAmt: number
  IRADeductionAmt: number
  StudentLoanInterestDedAmt: number
  TuitionAndFeesDedAmt: number
  TotalAdjustmentsAmt: number
  AdjustedGrossIncomeAmt: number
  EstTaxPymntFldWithTerritoryAmt: number
  USGovCivIncomeTaxWithheldAmt: number
  USArmedForcesIncomeTaxWthldAmt: number
  TerritoryIncomeTaxWithheldAmt: number
  TotalPaymentsAmt: number
}
// Content model for Form 5329
type IRS5329Type: {
  PersonNm: string
  SSN: string
  AmendedReturnInd: string
  EarlyDistributionsAmt: number
  EarlyDistriExceptionReasonCd: string
  EarlyDistriNotSubjectToTaxAmt: number
  EarlyDistriSubjectToTaxAmt: number
  IRAEarlyDistributionsTaxAmt: number
  EducAcctDistributionAmt: number
  EducAcctDistriNotSubjToTaxAmt: number
  EducAcctDistriSubjectToTaxAmt: number
  EducIRADistributionsTaxAmt: number
  IRAExcessContriPriorYearAmt: number
  IRAExcessContriCreditAmt: number
  IRADistriIncludedInIncomeAmt: number
  IRAExcessContriWithdrawnAmt: number
  IRAExcessContriAdjustmentAmt: number
  IRAExcessContriPrYrAdjustAmt: number
  IRAExcessContriCurrentYearAmt: number
  IRAExcessContriTotalAmt: number
  IRAExcessContribTaxAmt: number
  RothIRAExcessContriPriorYrAmt: number
  RothIRAExcessContriCreditAmt: number
  RothIRADistriIncludedInCYAmt: number
  RothIRAExcessContriAdjustAmt: number
  RothIRAExcessContriPYWthdrwAmt: number
  RothIRAExcessContriCYAmt: number
  RothIRAExcessContriTotalAmt: number
  RothIRAExcessContribTaxAmt: number
  ESAExcessContriPriorYearAmt: number
  ESAExcessContriCreditAmt: number
  ESADistriIncludedInCYAmt: number
  ESAExcessContriAdjustmentAmt: number
  ESAExcessContriPYWthdrwAmt: number
  ESAExcessContriCYAmt: number
  ESAExcessContriTotalAmt: number
  EducIRAExcessContribTaxAmt: number
  ArcherMSAExcessContriPrYrAmt: number
  ArcherMSAExcessContriCreditAmt: number
  TaxableArcherMSADistriAmt: number
  ArcherMSAExcessContriAdjAmt: number
  ArcherMSAExContriPYWthdrwAmt: number
  ArcherMSAExcessContriCYAmt: number
  ArcherMSAExcessContriTotalAmt: number
  MSAExcessContribTaxAmt: number
  HSAExcessContriPriorYearAmt: number
  HSAExcessContriCreditAmt: number
  TaxableHSADistributionAmt: number
  HSAExcessContriAdjustmentAmt: number
  HSAExcessContriPYAdjustedAmt: number
  HSAExcessContriCurrentYearAmt: number
  HSAExcessContriTotalAmt: number
  HSAExcessContribTaxAmt: number
  ABLEExcessContriCYAmt: number
  ABLEExcessContribTaxAmt: number
  QlfyRetirePlanMinRqrDistriAmt: number
  QlfyRetirePlanActualDistriAmt: number
  RtmntAnntyExcessContribTaxAmt: number
}
// Content model for Form 5405
type IRS5405Type: {
  PersonNm: string
  SSN: string
  FirstTimeHmByrCrClaimedAmt: number
  FirstTimeHmByrCrRepaidPYRetAmt: number
  FirstTimeHmByrNetCrClaimedAmt: number
  GainOnSaleOfMainHomeAmt: number
  FirstTimeHmByrRepaymentAmt: number
  SellingPriceOfHomeProcAwardAmt: number
  SellingOfHomeExpensesAmt: number
  MortgSbsdySaleOfHmRealizedAmt: number
  AdjustedBasisOfHomeSoldAmt: number
  FirstTimeHmByrNetCrRpdPYRetAmt: number
  AdjustedBasisForRepymtCrAmt: number
  GainOrLossFromWorksheetAmt: number
}
// Content model for Form 5471
type IRS5471Type: {
  TaxYearBeginDt: string
  TaxYearEndDt: string
  ChangeInTaxableYearNo898cInd: string
  ElectionChangeInYear898cInd: string
  Section898cElectionInd: string
  Section338gElectionInd: string
  FilerTaxYearBeginDt: string
  FilerTaxYearEndDt: string
  CategoryOfFiler1Ind: string
  CategoryOfFiler2Ind: string
  CategoryOfFiler4Ind: string
  CategoryOfFiler5Ind: string
  VotingStockOwnedPct: number
  FinalForm5471Ind: string
  ForeignFinancialAssetInd: string
  CountryUnderWhoseLawsIncCd: string
  IncorporationDt: string
  PrincipalPlaceOfBusCountryCd: {http://www.irs.gov/efile}AllCountriesType
  PrincipalBusinessActivityDesc: string
  FunctionalCurrencyTxt: string
  TaxableIncomeOrNetLossAmt: number
  USIncomeTaxPaidAfterCrAmt: number
}
// Content model for Form 5471 Schedule A
type IRS5471ScheduleAType: {
}
// Content model for Form 5471 Schedule B
type IRS5471ScheduleBType: {
}
// Content model for Form 5471 Schedule C
type IRS5471ScheduleCType: {
  ForeignGrossReceiptsOrSalesAmt: number
  USGrossReceiptsOrSalesAmt: number
  ForeignReturnsAndAllowancesAmt: number
  USReturnsAndAllowancesAmt: number
  ForeignNetGrossReceiptsAmt: number
  USNetGrossReceiptsAmt: number
  ForeignCostOfGoodsSoldAmt: number
  USCostOfGoodsSoldAmt: number
  ForeignGrossProfitAmt: number
  USGrossProfitAmt: number
  ForeignDividendsAmt: number
  USDividendsAmt: number
  ForeignInterestIncomeAmt: number
  USInterestIncomeAmt: number
  ForeignGrossRentsAmt: number
  USGrossRentsAmt: number
  FrgnGrRoyaltiesAndLcnsFeesAmt: number
  USGrRoyaltiesAndLcnsFeesAmt: number
  FrgnNetGainOrLossSaleCapAstAmt: number
  USNetGainOrLossSaleCapAstAmt: number
  FrgnCurTransGainLossUnrlzdAmt: number
  USCurTransGainLossUnrlzdAmt: number
  FrgnCurTransGainLossrlzdAmt: number
  USCurTransGainLossRlzdAmt: number
  ForeignTotalIncomeAmt: number
  USTotalIncomeAmt: number
  ForeignCompensationNotDedAmt: number
  USCompensationNotDedAmt: number
  ForeignRentsAmt: number
  USRentsAmt: number
  FrgnRoyaltiesAndLcnsFeesAmt: number
  USRoyaltiesAndLcnsFeesAmt: number
  ForeignInterestDeductionAmt: number
  USInterestDeductionAmt: number
  ForeignDepreciationNotDedAmt: number
  USDepreciationNotDedAmt: number
  ForeignDepletionAmt: number
  USDepletionAmt: number
  ForeignTaxesAmt: number
  USTaxesAmt: number
  ForeignTotalDeductionsAmt: number
  USTotalDeductionsAmt: number
  FrgnTotalIncomeMinusTotDedAmt: number
  USTotalIncomeMinusTotDedAmt: number
  FrgnUnusualInfrqntOccurItemAmt: number
  USUnusualInfrqntOccurItemAmt: number
  FrgnCurrentIncomeTaxExpenseAmt: number
  USCurrentIncomeTaxExpenseAmt: number
  FrgnDefrdIncomeTaxExpenseAmt: number
  USDefrdIncomeTaxExpenseAmt: number
  ForeignCYNetIncomePerBooksAmt: number
  USCYNetIncomePerBooksAmt: number
  ForeignCurrencyTrnslAdjAmt: number
  USCurrencyTrnslAdjAmt: number
  FrgnOthComprehensiveIncomeAmt: number
  USOthComprehensiveIncomeAmt: number
  FrgnIncmTxExpnsOtherIncomeAmt: number
  USIncmTxExpnsOtherIncomeAmt: number
  FrgnOtherCmprhnsvIncmLossAmt: number
  USOtherCmprhnsvIncmLossAmt: number
}
// Content model for Form 5471 Schedule F
type IRS5471ScheduleFType: {
  BegngAcctPrdCashAmt: number
  EndAcctPrdCashAmt: number
  BegngAcctPrdTradeNotesAmt: number
  EndAcctPrdTradeNotesAmt: number
  BegngAcctPrdBadDebtAllwncAmt: number
  EndAcctPrdBadDebtAllwncAmt: number
  BegngAcctPrdDerivativesAstAmt: number
  EndAcctPrdDerivativesAstAmt: number
  BegngAcctPrdInventoriesAmt: number
  EndAcctPrdInventoriesAmt: number
  BegngAcctPrdLoansToShrAmt: number
  EndAcctPrdLoansToShrAmt: number
  BegngAcctPrdBldgAndOtherAstAmt: number
  EndAcctPrdBldgAndOtherAstAmt: number
  BegngAcctPrdNetAccumDeprecAmt: number
  EndAcctPrdNetAccumDeprecAmt: number
  BegngAcctPrdDepletableAstAmt: number
  EndAcctPrdDepletableAstAmt: number
  BegngAcctPrdNetAccumDpltnAmt: number
  EndAcctPrdNetAccumDpltnAmt: number
  BegngAcctPrdLandAmt: number
  EndAcctPrdLandAmt: number
  BegngAcctPrdGoodwillAmt: number
  EndAcctPrdGoodwillAmt: number
  BegngAcctPrdOrgCostAmt: number
  EndAcctPrdOrgCostAmt: number
  BegngAcctPrdPatentsOthAstAmt: number
  EndAcctPrdPatentsOthAstAmt: number
  BegngAcctPrdNetAccumAmortzAmt: number
  EndAcctPrdNetAccumAmortzAmt: number
  BegngAcctPrdTotalAssetsAmt: number
  EndAcctPrdTotalAssetsAmt: number
  BegngAcctPrdAccountsPayableAmt: number
  EndAcctPrdAccountsPayableAmt: number
  BegngAcctPrdDerivativesLiabAmt: number
  EndAcctPrdDerivativesLiabAmt: number
  BegngAcctPrdLoansFromShrAmt: number
  EndAcctPrdLoansFromShrAmt: number
  BegngAcctPrdPreferredStockAmt: number
  EndAcctPrdPreferredStockAmt: number
  BegngAcctPrdCommonStockAmt: number
  EndAcctPrdCommonStockAmt: number
  BegngAcctPrdRtnEarningsAmt: number
  EndAcctPrdRtnEarningsAmt: number
  BegngAcctPrdNetCostOfTrStkAmt: number
  EndAcctPrdNetCostOfTrStkAmt: number
  BegngAcctPrdTotLiabShrEqtyAmt: number
  EndAcctPrdTotLiabShrEqtyAmt: number
}
// Content model for Form 1120 Schedule G
type IRS5471ScheduleGType: {
  FrgnCorpOwnsInterestInTrustInd: boolean
  BaseErosionPaymentBenefitInd: boolean
  BaseErosionPaymentAmt: number
  BaseErosionTaxBenefitAmt: number
  NondedIntRoyaltyUndSect267AInd: boolean
  NondedIntRoyaltyUndSect267AAmt: number
  FDIIBenefitsClaimInd: boolean
  NotLicensePropertyGrossIncmAmt: number
  LicensePropertyGrossIncomeAmt: number
  ForeignServiceGrossIncomeAmt: number
  FrgnCorpPartcpCostShrInd: boolean
  FrgnCorpBecamePartcpCostShrInd: boolean
  PartcpCostShrPriorSpcfdDateInd: boolean
  PlatformContributionInd: boolean
  PlatformContributionAmt: number
  ComparableUncontrolledTransInd: string
  MarketCapitalizationMethodInd: string
  IncomeMethodInd: string
  ResidualProfitSplitMethodInd: string
  AquisitionPriceMethodInd: string
  UnspecifiedMethodsInd: string
  PurchaseStockOrSecuritiesInd: boolean
  IntangiblePropertyReceivedInd: boolean
  EarningsProfitReductionAmt: number
  FrgnTaxDisqualifiedSec901mInd: boolean
  ForeignTaxSection909Ind: boolean
}
// Content model for Form 1120 Schedule I
type IRS5471ScheduleIType: {
  SubpartFLowTierCFCRcvdAmt: number
  SubpartFHybridDivRcvdAmt: number
  OtherSubpartFNotIncludedAmt: number
  EarningsInvestedInUSPropAmt: number
  WithdrawnExportTradeIncomeAmt: number
  FactoringIncomeAmt: number
  DividendsReceivedAmt: number
  ExchangeGainOrLossOnDistriAmt: number
}
// Content model for Shareholder Information for Form 1120 Schedule I
type ShareholderInformationType: {
}
// None
type ForeignCorporationStocksType: {
  StockClassDesc: string
  AnnualAcctPeriodBeginShareCnt: number
  AnnualAcctPeriodEndShareCnt: number
}
// Content model for Form 5471 Schedule J
type IRS5471ScheduleJType: {
  SeparateCategoryCd: string
  SanctionedCountryCd: string
  USShareholderInfoNotAvlblInd: string
  BeginningYearBalanceAmt: number
  FutureRecaptureAmt: number
  CurrentYearRecaptureAmt: number
  EndYearBalanceAmt: number
}
// None
type Form5471ScheduleJGrp1Type: {
  BeginningYearBalanceAmt: number
  BeginningBalanceAdjustmentAmt: number
  AdjustedBeginningBalanceAmt: number
  ReductionTxsUnsuspendedRuleAmt: number
  CurrentYearEPDeficitAmt: number
  EPCyovNonrecognitionTransAmt: number
  ReclsEPNonrecognitionTransAmt: number
  TotalOtherAdjustmentsAmt: number
  TotalCurrentAccumulatedEPAmt: number
  ReclassifiedSect959c2EPAmt: number
  ActualDistributionAmt: number
  EarnInvstUSPropReclassifiedAmt: number
  OtherAdjustmentsTotalAmt: number
  DeficitOffstPostTransEPAmt: number
  BalanceBeginningNextYearAmt: number
}
// None
type Form5471ScheduleJGrp2Type: {
  BeginningYearBalanceAmt: number
  BeginningBalanceAdjustmentAmt: number
  AdjustedBeginningBalanceAmt: number
  ReductionTxsUnsuspendedRuleAmt: number
  EPCyovNonrecognitionTransAmt: number
  ReclsEPNonrecognitionTransAmt: number
  TotalOtherAdjustmentsAmt: number
  TotalCurrentAccumulatedEPAmt: number
  ReclassifiedSect959c2EPAmt: number
  ActualDistributionAmt: number
  EarnInvstUSPropReclassifiedAmt: number
  OtherAdjustmentsTotalAmt: number
  BalanceBeginningNextYearAmt: number
}
// None
type Form5471ScheduleJGrp3Type: {
  BeginningYearBalanceAmt: number
  BeginningBalanceAdjustmentAmt: number
  AdjustedBeginningBalanceAmt: number
  ReductionTxsUnsuspendedRuleAmt: number
  DsallwDedTxsSuspendedRuleAmt: number
  EPCyovNonrecognitionTransAmt: number
  ReclsEPNonrecognitionTransAmt: number
  TotalOtherAdjustmentsAmt: number
  TotalCurrentAccumulatedEPAmt: number
  OtherAdjustmentsTotalAmt: number
  DeficitOffstPostTransEPAmt: number
  BalanceBeginningNextYearAmt: number
}
// None
type Form5471ScheduleJGrp4Type: {
  BeginningYearBalanceAmt: number
  BeginningBalanceAdjustmentAmt: number
  AdjustedBeginningBalanceAmt: number
  ReductionTxsUnsuspendedRuleAmt: number
  AttrblDistriPrevTaxedEPAmt: number
  EPCyovNonrecognitionTransAmt: number
  TotalOtherAdjustmentsAmt: number
  TotalCurrentAccumulatedEPAmt: number
  ActualDistributionAmt: number
  ReclassifiedSect959c1EPAmt: number
  EarnInvstUSPropReclassifiedAmt: number
  OtherAdjustmentsTotalAmt: number
  BalanceBeginningNextYearAmt: number
}
// None
type Form5471ScheduleJGrp5Type: {
  BeginningYearBalanceAmt: number
  BeginningBalanceAdjustmentAmt: number
  AdjustedBeginningBalanceAmt: number
  ReductionTxsUnsuspendedRuleAmt: number
  AttrblDistriPrevTaxedEPAmt: number
  EPCyovNonrecognitionTransAmt: number
  TotalOtherAdjustmentsAmt: number
  TotalCurrentAccumulatedEPAmt: number
  ActualDistributionAmt: number
  ReclassifiedSect959c1EPAmt: number
  OtherAdjustmentsTotalAmt: number
  BalanceBeginningNextYearAmt: number
}
// None
type Form5471ScheduleJGrp7Type: {
  BeginningYearBalanceAmt: number
  BeginningBalanceAdjustmentAmt: number
  AdjustedBeginningBalanceAmt: number
  ReductionTxsUnsuspendedRuleAmt: number
  AttrblDistriPrevTaxedEPAmt: number
  EPCyovNonrecognitionTransAmt: number
  TotalOtherAdjustmentsAmt: number
  TotalCurrentAccumulatedEPAmt: number
  ActualDistributionAmt: number
  OtherAdjustmentsTotalAmt: number
  BalanceBeginningNextYearAmt: number
}
// None
type Form5471ScheduleJGrp8Type: {
  BeginningYearBalanceAmt: number
  BeginningBalanceAdjustmentAmt: number
  AdjustedBeginningBalanceAmt: number
  ReductionTxsUnsuspendedRuleAmt: number
  AttrblDistriPrevTaxedEPAmt: number
  EPCyovNonrecognitionTransAmt: number
  TotalOtherAdjustmentsAmt: number
  TotalCurrentAccumulatedEPAmt: number
  ReclassifiedSect959c2EPAmt: number
  ActualDistributionAmt: number
  ReclassifiedSect959c1EPAmt: number
  OtherAdjustmentsTotalAmt: number
  BalanceBeginningNextYearAmt: number
}
// None
type Form5471ScheduleJGrp9Type: {
  BeginningYearBalanceAmt: number
  BeginningBalanceAdjustmentAmt: number
  AdjustedBeginningBalanceAmt: number
  AttrblDistriPrevTaxedEPAmt: number
  BalanceBeginningNextYearAmt: number
}
// Content model for Form 5471 Schedule M
type IRS5471ScheduleMType: {
  FunctionalCurrencyDesc: string
  ExchangeRt: number
}
// None
type TransactionForeignCorporationType: {
  InventorySalesAmt: number
  TangiblePropertySalesAmt: number
  PropertyRightsSalesAmt: number
  PlatformContributionRcvdAmt: number
  CostSharingReceivedAmt: number
  CompensationRcvdForCrtnSrvcAmt: number
  CommissionsReceivedAmt: number
  RentsRoyaltiesLcnsFeesRcvdAmt: number
  HybridDividendsReceivedAmt: number
  DividendsReceivedAmt: number
  InterestReceivedAmt: number
  InsReinsPremRcvdAmt: number
  TotalTransactionsReceivedAmt: number
  InventoryPurchaseAmt: number
  TangiblePropertyPurchaseAmt: number
  PropertyRightsPrchsAmt: number
  PlatformContributionPaidAmt: number
  CostSharingPaidAmt: number
  CompensationPaidForCrtnSrvcAmt: number
  CommissionsPaidAmt: number
  RentsRoyaltiesLicenseFeesPdAmt: number
  HybridDividendsPaidAmt: number
  DividendsPaidAmt: number
  InterestPaidAmt: number
  InsReinsPremPdAmt: number
  TotalTransactionsPdAmt: number
  AccountsPayableAmt: number
  BorrowedAmt: number
  AccountsReceivableAmt: number
  LoanAmt: number
}
// Content model for Form 5471 Schedule O
type IRS5471ScheduleOType: {
  ReorganizationDt: string
}
// None
type ShrInfoUSOfficerDirInfoGrpType: {
  Original10PercentAcquisitionDt: string
  Addnl10PercentAcquisitionDt: string
}
// None
type GeneralShareholderInfoGrpType: {
  ReturnTypeCd: string
  ReturnFiledDt: string
  ServiceCenterWhereRetFiledCd: string
  LastFiledReturnUnderSect6046Dt: string
}
// None
type USPrsnOfcrDirectorFrgnCorpGrpType: {
  OfficerOrDirectorPersonNm: string
  OfficerOrDirector2PersonNm: string
  SSN: string
  OfficerInd: string
  DirectorInd: string
}
// None
type ShareholderStockAcquisInfoGrpType: {
  StockClassDesc: string
  AcquisitionDt: string
  AcquisitionMethodDesc: string
  SharesAcquiredDirectlyCnt: number
  SharesAcquiredIndirectlyCnt: number
  SharesAcqConstructivelyCnt: number
  PaidOrValueGivenAmt: number
}
// None
type ShareholderStockDisposInfoGrpType: {
  StockClassDesc: string
  DispositionDt: string
  DispositionMethodDesc: string
  SharesDisposedDirectlyCnt: number
  SharesDisposedIndirectlyCnt: number
  SharesDisposConstructivelyCnt: number
  ReceivedAmt: number
}
// None
type OrgReorganizationFrgnCorpGrpType: {
  TransferDt: string
  AssetDesc: string
  FairMarketValueAmt: number
  AdjustedBasisAmt: number
  AssetsTransferredNotesSecDesc: string
}
// Content model for Form 5695
type IRS5695Type: {
  NameLine1Txt: string
  SSN: string
}
// Content model for Form 5713
type IRS5713Type: {
  TaxYearBeginDt: string
  TaxYearEndDt: string
  ServiceCenterWhereRetFiledCd: string
  AdjustedGrossIncomeAmt: number
  AdditionalSpaceRequiredInd: string
  PrincipalBusinessActivityDesc: string
  PrincipalProductCodeDesc: string
  PrincipalProductDesc: string
  PartnershipsTotalAssetAmt: number
  PartnershipsOrdinaryIncomeAmt: number
  FormFiledTypeCd: string
  CommonTaxYearBeginDt: string
  CommonTaxYearEndDt: string
  TotalAssetsAmt: number
  TaxableIncomeLossBfrNOLDedAmt: number
  TotalEstateOrTrustIncomeAmt: number
  ForeignTaxCreditAmt: number
  DeferralEarnCtrlFrgnCorpAmt: number
  DeferralICDISCIncomeAmt: number
  FSCExemptForeignTradeIncomeAmt: number
  ExtraterritorialExclIncomeAmt: number
  ShrFrgnCorpReportableOprInd: boolean
  FrgnCorpControlledFrgnCorpInd: boolean
  OwnICDISCStockInd: boolean
  ClaimForeignTaxCreditInd: boolean
  ControlCorpReportableOprInd: boolean
  CorporationParticipateByctInd: boolean
  ControlledPrsnReportableOprInd: boolean
  PersonParticipateBoycottInd: boolean
  OwnerTrustReportableOprInd: boolean
  PartnershipReportableOprInd: boolean
  ForeignSalesCorporationInd: boolean
  ExtraterritorialExclGroIncmInd: boolean
  OperationsCountryByctIsraelInd: boolean
  AddnlInfoCountryByctIsraelInd: string
  OprNonlistedCtryByctIsraelInd: boolean
  AddnlInfoNonlistByctIsraelInd: string
  OperationsNonIsraelByctCtryInd: boolean
  AddnlInfoOprNonIsrlByctCtryInd: string
  ReqRefrainDoingBusByctCtryInd: boolean
  AgrRefrainDoingBusByctCtryInd: boolean
  ReqRefrainDoingBusUSPrsnInd: boolean
  AgreeRefrainDoingBusUSPrsnInd: boolean
  RequestRefrainDoingBusCoRNOInd: boolean
  AgreeRefrainDoingBusCoRNOInd: boolean
  RequestRefrainEmplgIndivRNOInd: boolean
  AgreeRefrainEmplgIndivRNOInd: boolean
  RequestRefrainShippingProdInd: boolean
  AgreeRefrainShippingProdInd: boolean
  AddnlByctReqAndAgrmtIncldInd: string
}
// None
type PartnershipAndCorporationGrpType: {
}
// None
type BoycottDetailsType: {
  CountryCd: string
  PrincipalBusinessActivityDesc: string
  PrincipalProductCodeDesc: string
}
// Content model for Form 5713 Schedule A
type IRS5713ScheduleAType: {
  TotalBoycottPurchasesAmt: number
  TotalBoycottSalesAmt: number
  TotalBoycottPayrollAmt: number
  NumeratorBoycottFactorAmt: number
  TotalPurchasesOtherThanUSAmt: number
  TotalSalesOtherThanUSAmt: number
  TotalPayrollPaidOtherThanUSAmt: number
  TotalDenominatorBoycottFctrAmt: number
  InternationalBoycottFactorRt: number
}
// None
type BoycottInfoForEachCountryType: {
  CountryCd: string
  BoycottPurchasesAmt: number
  BoycottSalesAmt: number
  BoycottPayrollAmt: number
}
// Content model for Form 5713 Schedule B
type IRS5713ScheduleBType: {
  TotBoycottOperationsFrgnTxsAmt: number
  TotalIntntlByctIncmPrortShrAmt: number
  TotalICDISCTxblIncmByctOprAmt: number
  TotalFSCTaxableIncmByctOprAmt: number
}
// None
type OperationTaxesAndIncomeType: {
  CountryCd: string
  PrincipalBusinessActivityDesc: string
  BoycottOperationsFrgnTxsAmt: number
  IntntlByctIncmPrortShrAmt: number
  ICDISCTxblIncmByctOprAmt: number
  FSCTaxableIncmByctOprAmt: number
}
// Content model for Form 5713 Schedule C
type IRS5713ScheduleCType: {
  Form8873Amt: number
  RedFrgnTrdIntntlByctFactorRt: number
  ReductionQlfyFrgnTrdIncmAmt: number
}
// Content model for Form 5884
type IRS5884Type: {
  WagesBetween120And399HrsAmt: number
  TotWagesBetween120And399HrsAmt: number
  Wages400OrMoreHoursAmt: number
  Wages400OrMoreHoursCreditAmt: number
  SecondYearWagesAmt: number
  TotalSecondYearWagesAmt: number
  PassThruWorkOpportunityCrAmt: number
  TotalCreditsAmt: number
  CreditAllocationAmt: number
  EstatesTrustsAndCoopsCreditAmt: number
}
// Content model for IRS Form 6198
type IRS6198Type: {
  ActivityDescriptionTxt: string
  OrdinaryIncomeLossAmt: number
  ScheduleOrFormNum: string
  ScheduleK1IncomeOrGainAmt: number
  OtherDeductionsAmt: number
  CurrentYearProfitOrLossAmt: number
  AdjustedBasisAmt: number
  CurrentYearIncreaseRiskAmt: number
  SumAdjBasisAndIncreaseRiskAmt: number
  CurrentYearDecreaseRiskAmt: number
  SumAdjBasisIncrLessDecrRiskAmt: number
  SimplifiedComputationRiskAmt: number
  ActivityInvestmentAmt: number
  EffectiveDateIncreaseAmt: number
  SumActyInvestmentAndDtIncrAmt: number
  EffectiveDateDecreaseAmt: number
  DetailedComputationRisk1Amt: number
  IncreasesAmt: number
  SumAmountAtRiskAndIncreaseAmt: number
  DecreasesAmt: number
  NetAtRiskAmt: number
  DetailedComputationRiskAmt: number
  AmountAtRiskAmt: number
  DeductibleLossAmt: number
}
// Content model for Form 6251
type IRS6251Type: {
  AGIOrAGILessDeductionAmt: number
  ScheduleATaxesAmt: number
  InvestmentInterestAmt: number
  DepletionAmt: number
  NetOperatingLossDeductionAmt: number
  AltTaxNetOperatingLossDedAmt: number
  ExemptPrivateActivityBondsAmt: number
  Section1202ExclusionAmt: number
  IncentiveStockOptionsAmt: number
  EstatesAndTrustsAmt: number
  PropertyDispositionAmt: number
  DepreciationAmt: number
  PassiveActivityAmt: number
  LossLimitationAmt: number
  CirculationCostAmt: number
  LongTermContractAmt: number
  MiningCostsAmt: number
  ResearchExperimentalCostAmt: number
  InstallmentSaleIncomeAmt: number
  IntangibleDrillingCostAmt: number
  RelatedAdjustmentAmt: number
  AlternativeMinimumTaxExemptAmt: number
  TaxOnAltMinTaxableIncAmt: number
  AMTForeignTaxCreditAmt: number
  TentativeAlternativeMinTaxAmt: number
  AdjustedRegularTaxAmt: number
  AlternativeMinimumTaxAmt: number
  ReportedAltMinTaxableIncAmt: number
  CapitalGainsWorksheetAmt: number
  UnrecapturedSection1250GainAmt: number
  SumPlusUnrecapturedSect1250Amt: number
  SmallerOfAltMinTxblIncOrSumAmt: number
  AdjAltMinTaxableIncLessGainAmt: number
  NetAdjAltMinTxblIncTimesPctAmt: number
  FilingStatusLimitAmt: number
  IncomeAboveThresholdWorkshtAmt: number
  FSAmtLessIncAboveThresholdAmt: number
  SmllrOfAdjustedAltMinOrSchDAmt: number
  SmllrAbvThrshldOrAltMinGainAmt: number
  SmllrNetAdjAltMinOrNetGainAmt: number
  FilingThresholdAmt: number
  ApplcblCapGainsOrSchDWrkshtAmt: number
  SumThresholdApplcblWrkshtAmt: number
  FlngThrshldLessThesholdSumAmt: number
  SmllrAdjNetGainOrTxblIncAmt: number
  NetAltMinTaxableIncTimesPctAmt: number
  SumOfSmllrAmt: number
  ExcessOfSumAmt: number
  ExcessOfSumTimesPctAmt: number
  TotalNetAmt: number
  NetSmallerSchDOrAdjNetGainAmt: number
  NetSchDOrAdjNetGainTimesPctAmt: number
  SumOfAltMinTaxPercentagesAmt: number
  NetAltMinTxblIncTimesFSPctAmt: number
  TaxOnAlternativeMinimumGainAmt: number
}
// Content model for Form 6252
type IRS6252Type: {
  PropertyDesc: string
  AcquiredDt: string
  SoldDt: string
  PropertySoldToRelatedPartyInd: boolean
  PropSoldRltdPartyMrktblSecInd: boolean
  MortgageIndebtednessAmt: number
  SellingPriceLessMortgIndbtAmt: number
  CostOrOtherBasisPropSoldAmt: number
  DepreciationAllowedAmt: number
  AdjustedBasisAmt: number
  CommissionsOtherExpnsOfSaleAmt: number
  TotalSectionPropertyAmt: number
  SumOfAdjBssCommIncmRcptrAmt: number
  SumLessAdjBssCommIncmRcptrAmt: number
  ExcludedGainAmt: number
  GrossProfitAmt: number
  NetAdjBasisCommIncmRcptrAmt: number
  ContractPriceAmt: number
  GrossProfitRatioPct: number
  YearOfSaleAmt: number
  PaymentsReceivedCurrentYearAmt: number
  SumYearOfSaleAndPymtsRcvdAmt: number
  PaymentsReceivedPriorYearAmt: number
  InstallmentSaleIncomeAmt: number
  OrdinaryIncomePartAmt: number
  InstalSaleLessOrdnryIncmAmt: number
  SecondDispositionInd: boolean
  SndDisposMore2YrsAftrFirstInd: string
  DispositionDt: string
  FirstDisposSaleExchangeStkInd: string
  SecondDisposInvlntryCnvrtInd: string
  SecondDisposAfterDeathSellrInd: string
  RealizedAmt: number
  FirstYearContractPriceAmt: number
  SmllrRealizedOrContractPrcAmt: number
  TotalPaymentsReceivedAmt: number
  TotalPaymentsRcvdLessPrcAmt: number
  TotPymtPrcTimesGroPrftPctAmt: number
  OrdinaryIncmUndRecaptureRlsAmt: number
  PaymentPriceLessOrdnryIncmAmt: number
}
// Content model for Form 6478
type IRS6478Type: {
  Qlfy2ndBiofuelProdFuelGalsQty: number
  Qlfy2ndBiofuelProdFuelCrAmt: number
  FuelsCreditRegistrationNum: string
  OtherIncomeAmt: number
  BiofuelProducerCreditAmt: number
  EthanolAlcoholOtherCreditAmt: number
  AllocatedToBeneficiariesAmt: number
  EstatesTrustsCooperativesAmt: number
}
// Content model for Form 6765
type IRS6765Type: {
  RegularEnergyConsortiaAmt: number
  RegularBasicResearchPaymentAmt: number
  RegularBasePeriodAmt: number
  RegularPaymentMinusBaseAmt: number
  RegularQlfyServicesWagesAmt: number
  RegularSupplyCostAmt: number
  RegularComputerCostAmt: number
  RegularContractResearchPctAmt: number
  RegularTotQlfyResearchExpnsAmt: number
  FixedBasedPct: number
  RegularAverageGrossReceiptsAmt: number
  FixedBasePctTimesGrossRcptsAmt: number
  AdjTotQualifedRsrchExpnssAmt: number
  HalfAdjTotQlfyRsrchExpnssAmt: number
  SmallerQlfyResearchExpnssAmt: number
  RsrchExpensesPlusRsrchPymtsAmt: number
  RegularRedSect280CCrElectInd: boolean
  AltEnergyConsortiaAmt: number
  AltBasicResearchPaymentAmt: number
  AltBasePeriodAmt: number
  AltPaymentMinusBaseAmt: number
  TotalSumEnergyAndNetBaseAmt: number
  TotalSumTimesTwentyPctAmt: number
  AltQlfyServicesWagesAmt: number
  AltSupplyCostAmt: number
  AltComputerCostAmt: number
  AltContractResearchPctAmt: number
  AltTotQlfyResearchExpnsAmt: number
  TotQlfyResearchExpns3PYAmt: number
  TotQlfyResearchExpns3PYPctAmt: number
  NetQlfyResearchExpns3PYPctAmt: number
  NetQlfyResearchExpnsPctAmt: number
  TotalAltPctAmt: number
  AltRedSect280CCrElectInd: boolean
  EmployerDiffWagePymtCrAmt: number
  NetEmployerDiffWagePymtCrAmt: number
  ResearchActivitiesIncrCrAmt: number
  CYResearchCreditAmt: number
  EstateOrTrustAllocatedBenefAmt: number
  NetEstateOrTrustAllocBenefAmt: number
  PayrollTaxCreditElectionInd: string
  PayrollTaxLimitationAmt: number
  CYGeneralBusCrCarryfowardAmt: number
}
// Content model for Form 6781
type IRS6781Type: {
  MixedStraddleElectionInd: string
  StraddleByStraddleInd: string
  NetSection1256ElectionInd: string
  TotalSection1256CntrctsLossAmt: number
  TotalSection1256CntrctsGainAmt: number
  NetGainAmt: number
  NetGainAnd1099BAdjustmentsAmt: number
  Section1256CarriedBackAmt: number
  NetGainAndAdjPlusCarrybackAmt: number
  ShortTermCapitalGainAmt: number
  LongTermCapitalGainAmt: number
}
// None
type Section1256CntrctsAcctInfoGrpType: {
  AccountIdentificationDesc: string
  LossAmt: number
  GainAmt: number
}
// None
type LossesFromStraddlesInfoGrpType: {
  AcquiredDt: string
  ClosedOrSoldDt: string
  GrossSalesPriceAmt: number
  CostOrOtherBasisExpenseSaleAmt: number
  LossAmt: number
  UnrcgnzdGainOffsettingPosAmt: number
  RecognizedLossAmt: number
}
// None
type GainsFromStraddlesInfoGrpType: {
  AcquiredDt: string
  ClosedOrSoldDt: string
  GrossSalesPriceAmt: number
  CostOrOtherBasisExpenseSaleAmt: number
  GainAmt: number
}
// None
type UnrcgnzdGainsLastDayPosOfTYGrpType: {
  PropertyDesc: string
  AcquisitionDt: string
  FairMarketVlLastBusDayOfTYAmt: number
  CostOrAdjustedBasisAmt: number
  UnrecognizedGainAmt: number
}
// Content model for IRS Form 8082
type IRS8082Type: {
  NoticeOfInconsistentTrtmntInd: string
  AdministrativeAdjustmentReqInd: string
  AARAdjImputedUnderpaymentInd: boolean
  Section6227b2ElectonInd: boolean
  ServiceCenterWhereRetFiledCd: string
  TaxYearOfPassThruEntityFromDt: string
  TaxYearOfPassThruEntityToDt: string
  YourTaxYearFromDt: string
  YourTaxYearToDt: string
}
// None
type InconOrAdminAdjItemType: {
  ReferenceLineNum: string
  LineNumberDescOfInconItemTxt: string
  AmountOfItemInd: string
  TreatmentOfItemInd: string
  AdjustmentRequestAmt: number
  ReportingAmt: number
  AdjustmentAndReportedDiffAmt: number
  ExplanationTxt: string
}
// Content model for Form 8275
type IRS8275Type: {
  PassThroughEntityTaxYearFromDt: string
  PassThroughEntityTaxYearToDt: string
}
// Content model for IRS Form 8275R
type IRS8275RType: {
  PassThroughEntityTaxYearFromDt: string
  PassThroughEntityTaxYearToDt: string
}
// Content model for Form 8283
type IRS8283Type: {
  ArtWorthAtLeast20000DollarsInd: string
  QualifiedConservationContriInd: string
  EquipmentInd: string
  ArtWorthLssThan20000DollarsInd: string
  OtherRealEstateInd: string
  SecuritiesInd: string
  CollectiblesInd: string
  IntellectualPropertyInd: string
  VehicleInd: string
  OtherInd: string
  AppraiserTitleTxt: string
  AppraiserSignedDt: string
  AppraiserIdentifyingNum: string
  ReceivedDt: string
  UsePropertyForUnrelatedUseInd: boolean
  DoneeEIN: string
}
// None
type DonatedPropertyType: {
  PropertyId: string
  DonatedPropertyVehicleInd: string
  VIN: string
  DonatedPropertyDesc: string
  FairMarketValueMethodDesc: string
  TotalDeductionClaimedThisTYAmt: number
  TotalDeductionClaimedPrTYAmt: number
  TangiblePropertyLocationTxt: string
}
// None
type PropertyInformationType: {
  PropertyId: string
  DonatedPropertyDesc: string
  DonatedPropertyPhysicalCondTxt: string
  AppraisedFairMarketValueAmt: number
  BargainSalesReceivedAmt: number
  DeductionClaimedAmt: number
  ContributionDt: string
}
// None
type PropertyIdLetterAndDescGrpType: {
  PropertyId: string
  DonatedPropertyDesc: string
}
// None
type DonorLineDetailType: {
  ContributionDt: string
  DonorAcquisitionDesc: string
}
// Content model for Form 8379
type IRS8379Type: {
  InjuredSpouseClaimTaxYr: string
  JointReturnInd: boolean
  JointPayPastDueDebtsInd: boolean
  ObligatedToPayPastDueDebtsInd: boolean
  CommunityPropertyStateInd: boolean
  CommunityPropertyStateCd: string
  MarriageRcgnzComPropStInd: boolean
  PaymentsMadeAndReportedInd: boolean
  EarnedIncomeInd: boolean
  EICOrAdditionalChildTaxCrInd: boolean
  RefundableTaxCreditClaimInd: boolean
  JointRefundInd: string
  AlternateAddressInd: boolean
}
// Content model for IRS8396
type IRS8396Type: {
  MortgSbsdyCertIssuerAgencyNm: string
  MortgageCreditCertificateNum: string
  MortgCrCertificateIssueDt: string
  CertifiedMortgageIntCrPdAmt: number
  MortgageInterestReductionAmt: number
  MortgIntPrevious3YrCfwdCrAmt: number
  MortgIntPrevious2YrCfwdCrAmt: number
  MortgIntPYCarryforwardCrAmt: number
  MortgIntTotPreviousCfwdCrAmt: number
  TaxLiabLmtFromCrLmtWrkshtAmt: number
  MortgageInterestCreditAmt: number
  MortgIntRedPlusOldestCfwdCrAmt: number
  LargerOfMortgIntCrOrCfwdAmt: number
  MortgIntTentTwoYearCfwdCrAmt: number
  MortgIntNextYears2YrCfwdCrAmt: number
  MortgIntTent3YearCfwdCrAmt: number
  MortgIntNextYears3YrCfwdCrAmt: number
  MortgIntNextYearsPYCfwdCrAmt: number
}
// Content model for IRS8582
type IRS8582Type: {
  RentalRealtyIncomeAmt: number
  RentalRealtyLossAmt: number
  PYUnallowedRentalLossAmt: number
  NetRentalRealtyAmt: number
  RevitalizationDeductionAmt: number
  PriorYearRevitalizationAmt: number
  NetRevitalizationAmt: number
  OtherActivityIncomeAmt: number
  OtherActivityLossAmt: number
  PriorYearUnallowedOtherLossAmt: number
  NetOtherActivityAmt: number
  TotalPassiveActivityAmt: number
  RentalRealtyLossLimitAmt: number
  MaximumAllowedIncomeAmt: number
  ModifiedAGIAmt: number
  ModifiedAGIDifferenceAmt: number
  PercentNetSpecialAllowanceAmt: number
  AllowedRentalRealtyLossAmt: number
  StandardAllowanceAmt: number
  RentalAllowanceAmt: number
  SpecialRevitalizationAmt: number
  FinalRevitalizationAmt: number
  TotalIncomeAmt: number
  TotalLossesAllowedAmt: number
}
// Content model for IRS Form 8582-CR
type IRS8582CRType: {
  TotalCreditAmt: number
  NetPassiveIncomeTaxAmt: number
  TotalCreditMinusTaxAmt: number
  AllowedCreditsAmt: number
  ElectToIncreaseBasisInd: string
  DisposedPassiveActivityNm: string
  PropertyDesc: string
  UnallowedCreditReductionAmt: number
}
// Content model for Form 8586
type IRS8586Type: {
  Forms8609AAttachedBfr2008Cnt: number
  DecrInQlfyBssOfBldgsBF2008Ind: boolean
  LowIncomeHousingCrBF2008Amt: number
  LowIncmHsnCrPlusCurYrCrBF08Amt: number
  AllocatedtoBeneficiariesAmt: number
  PassiveActyOrTotCurrYrCrAmt: number
  Forms8609AAttachedAftr2007Cnt: number
  DecrQlfyBssOfBldgsAF2007Ind: boolean
  LowIncomeHousingCrAF2007Amt: number
  LowIncmHsnCrPlusCurYrCrAF07Amt: number
  AllocToBeneficiariesAmt: number
  EstatesAndTrustsResultAmt: number
}
// None
type BldgIdOfBldgWithDecreasedBasisType: {
  BIN: string
}
// None
type DecrInQlfyBasisOfBldgsAF2007Type: {
  BIN: string
}
// Content model for IRS Form 8594
type IRS8594Type: {
  SaleDt: string
  TotalSalePriceAmt: number
  Class1FairMarketValueAmt: number
  Class1SalesPriceAllocationAmt: number
  Class2FairMarketValueAmt: number
  Class2SalesPriceAllocationAmt: number
  Class3FairMarketValueAmt: number
  Class3SalesPriceAllocationAmt: number
  Class4FairMarketValueAmt: number
  Class4SalesPriceAllocationAmt: number
  Class5FairMarketValueAmt: number
  Class5SalesPriceAllocationAmt: number
  Class6And7FairMarketValueAmt: number
  Class6And7SalesPriceAllocnAmt: number
  TotalFairMarketValueAmt: number
  TotalSalesPriceAllocationAmt: number
  BuyerOrSellerProvAllocnPrcInd: boolean
  AggregateValuesListedInd: boolean
  OrignalFormFiledTaxYear: string
  TaxReturnFormNumberDsc: string
  Class1PrevPriceAllocationAmt: number
  AggregateValuesListedIndAmt: number
  Class1RedeterminedAllocnAmt: number
  Class2PrevPriceAllocationAmt: number
  Class2IncreaseDecreaseAmt: number
  Class2RedeterminedAllocnAmt: number
  Class3PrevPriceAllocationAmt: number
  Class3IncreaseDecreaseAmt: number
  Class3RedeterminedAllocnAmt: number
  Class4PrevPriceAllocationAmt: number
  Class4IncreaseDecreaseAmt: number
  Class4RedeterminedAllocnAmt: number
  Class5PrevPriceAllocationAmt: number
  Class5IncreaseDecreaseAmt: number
  Class5RedeterminedAllocnAmt: number
  Class6And7PrevPriceAllocnAmt: number
  Class6And7IncreaseDecreaseAmt: number
  Class6And7RedetermAllocnAmt: number
  TotalOfPreviousPriceAllocnAmt: number
  TotalRedeterminedAllocationAmt: number
}
// Content model for Form 8606
type IRS8606Type: {
  Form8606IRANamelineTxt: string
  NondedIRATxpyrWithIRASSN: string
  NondedIRACurrTYNondedContriAmt: number
  NondedIRABasisForPYAmt: number
  NondedIRATotalIRAValueAmt: number
  NondedIRAPostTaxYrContriAmt: number
  NondedIRATaxYearNetBasisAmt: number
  NondedIRACurrTYIRAPlusRllvrAmt: number
  NondedIRATYCombinedIRAValueAmt: number
  NondedIRATotRllvrWthdrwVlAmt: number
  NondedIRATaxYearBasisRt: number
  NondedIRANontxCnvrtAmt: number
  NondedIRANontxWthdrwUncnvrtAmt: number
  NondedIRANontxOfWthdrwAmt: number
  NondedIRATotalIRABasisAmt: number
  NondedIRANotCnvrtLessRllvrAmt: number
  NondedIRAQlfyDisasterDistriAmt: number
  NondedIRATaxableAmt: number
  TotalIRAConvertedToRothAmt: number
  TraditionalIRABasisAmt: number
  TaxableIRAConversionAmt: number
  TotNonQlfyDistriFromRothIRAAmt: number
  QlfyFirstTimeHmByrExpensesAmt: number
  NetQlfyFirstTimeHmByrExpnssAmt: number
  NetBasisInRothIRAContriAmt: number
  DistriRothIRALessBasisCnvrtAmt: number
  RothIRAQlfyDisasterDistriAmt: number
  TaxableIRADistributionAmt: number
}
// Content model for Form 8609 A
type IRS8609AType: {
  BIN: string
  Orig8609HousingCrAgencyRecInd: boolean
  QlfyLowIncmHsngProjSect42Ind: boolean
  DecreaseQualifiedBasisBldgInd: boolean
  BuildingEligibleBasisAmt: number
  LowIncomePortionRt: number
  QualifiedBasisOfLowIncmBldgAmt: number
  PartYearAdjustmentDuringTYAmt: number
  MaximumApplicableCrPct: number
  CreditForLowIncomeBuildingAmt: number
  QualifiedBasisAdditionAmt: number
  PartYearAdjustment2DuringTYAmt: number
  OneThirdMaximumApplicableCrPct: number
  IntBasedLowIncomeBuildingAmt: number
  Section42f3BModificationAmt: number
  AdjCrForLowIncomeBuildingAmt: number
  CreditForBldgBfrReductionAmt: number
  DsallwCrDueToFederalGrantAmt: number
  CreditAllowedForBldgForTYAmt: number
  TaxpayerShareOfCreditForYrAmt: number
  AdjForDeferredFirstYrCreditAmt: number
  LowIncomeHousingCrAmt: number
}
// Content model for IRS Form 8611
type IRS8611Type: {
  BIN: string
  PlacedInServiceDt: string
  IssueDt: string
  IssueNm: string
  PYTotalCreditsOnForm8586Amt: number
  CreditsIncludedAmt: number
  CreditsSubjectToRecaptureAmt: number
  CreditRecapturePercentRt: number
  AcceleratedPortionOfCreditAmt: number
  DecreaseInQualifiedBasisPctRt: number
  AcceleratedPrtnRecapturedAmt: number
  FlowThruEntityRecaptureAmt: number
  AcceleratedPrtnOfUnsdCreditAmt: number
  NetRecaptureAmt: number
  TotalSubjectToRecaptureAmt: number
  UnusedCreditRedByAccelPrtnAmt: number
  RecaptureTaxAmt: number
  CarryforwardCreditAmt: number
  RecaptureAmt: number
  TotalRecaptureAmt: number
}
// Content model for IRS 8615
type IRS8615Type: {
  ParentNm: string
  ParentNameControlTxt: string
  SSN: string
  ChildInvestmentIncomeAmt: number
  KiddieDeductionAmt: number
  ChildUnearnedIncomeAdjustedAmt: number
  ChildTaxableIncomeAmt: number
  ChildNetInvestmentIncomeAmt: number
  ChildNetIncomeAmt: number
  ChildUnearnedIncomeInd: string
  ChildNetIncomeTaxAmt: number
}
// Content model for Form 8621
type IRS8621Type: {
  ShareholderTaxYr: string
  ShareholderTaxYearBeginDt: string
  ShareholderTaxYearEndDt: string
  ForeignFinancialAssetInd: string
  QualifiedInsuranceCorpElectInd: string
  TaxYr: string
  TaxYearBeginDt: string
  TaxYearEndDt: string
  ClassOfShareTxt: string
  JointlyOwnedWithSpouseInd: string
  SharesAcquiredDt: string
  ElectionToTreatThePFICAsQEFInd: string
  ElectToExtndTmForPymtOfTxInd: string
  ElectionToMarkToMrktPFICStkInd: string
  DeemedSaleElectionInd: string
  ElectToRcgnzGainOnPFICSaleInd: string
  ProRataShareOfQEFOrdnryEarnAmt: number
  IncomePortionOfOrdinaryEarnAmt: number
  OrdinaryIncomeFromQEFAmt: number
  ProRataShareOfTotNetCapGainAmt: number
  IncomePortionOfNetCapGainAmt: number
  NetLongTermCapitalGainAmt: number
  DividendIncomeAndNetLTCGAmt: number
  PortionOfProRateOrdnryEarnAmt: number
  TotalCashAndPrtnOfProRataAmt: number
  ProRataLessCashAndPortionAmt: number
  TotalTaxForTaxYearAmt: number
  TotTxWithoutProRataLessCashAmt: number
  DeferredTaxAmt: number
  FairMarketValueOfPFICStkAmt: number
  AdjustedBasisInStockEndOfTYAmt: number
  ExcessAmt: number
  UnreversedInclusionsAmt: number
  ExcessOrUnreservedInclsnAmt: number
  FMVStkOnDtSaleOrDisposAmt: number
  AdjBasisStkOnDtSaleOrDisposAmt: number
  OrdinaryIncomeFromPFICStkAmt: number
  StkSaleUnreversedInclusionsAmt: number
  LossLimitedByOrdinaryIncomeAmt: number
  LossExcessOfUnrvrsdInclsnAmt: number
}
// None
type DistriAndDisposOfStockType: {
  TotalPFICDistriDurCurrTYAmt: number
  DistributionsIn3PrecedingTYAmt: number
  AverageDistribution3PrecTYAmt: number
  AverageDistri3PrevTY125PctAmt: number
  TotalExcessDistributionAmt: number
  GainLossFromDisposOfStkAmt: number
  TotalAllcblCurrAndPrePFICTYAmt: number
  AggregateIncreaseInTxEachTYAmt: number
  ForeignTaxCreditAmt: number
  AggregateIncrLessFrgnTxCrAmt: number
  InterestOnEachNetIncrInTaxAmt: number
}
// None
type ElectionStatusType: {
  OutstandingElectionTaxYr: string
  UndistributedEarningsAmt: number
  DeferredTaxAmt: number
  InterestAccruedOnDefrdTaxAmt: number
  EventTerminatingElectionTxt: string
  EarningsDistributedDurTheTYAmt: number
  DeferredTaxDueWithThisRetAmt: number
  AccruedInterestDueThisRetAmt: number
  DeferredTaxAfterPartialTermAmt: number
  InterestAccrAftrPartlTermAmt: number
}
// Content model for Form 8689
type IRS8689Type: {
  WagesSalariesAndTipsAmt: number
  TaxableInterestAmt: number
  OrdinaryDividendsAmt: number
  USVITaxRefCreditsOffsetAmt: number
  AlimonyReceivedAmt: number
  BusinessIncomeLossAmt: number
  CapitalGainLossAmt: number
  OtherGainLossAmt: number
  IRADistributionsAmt: number
  TxblPensionAndAnnuitiesAmt: number
  RntlRyltsPrtshpSCorpTREtcAmt: number
  FarmIncomeOrLossAmt: number
  UnemploymentCompAmt: number
  TaxableSocSecAmt: number
  TotalUSVIIncomeAmt: number
  EducatorExpensesAmt: number
  BusExpnsReservistsAndOthersAmt: number
  HealthSavingsAccountDedAmt: number
  MovingExpenseAmt: number
  OneHalfSelfEmploymentTaxAmt: number
  SelfEmpldSepSimpleQlfyPlansAmt: number
  SelfEmpldHealthInsDedAmt: number
  PnltyOnErlyWthdrwOfSavingsAmt: number
  IRADeductionAmt: number
  StudentLoanInterestDedAmt: number
  TuitionAndFeesDedAmt: number
  VirginIslandsAGIAmt: number
  Form1040TotalTaxAmt: number
  VirginIslandsTaxAdjustmentAmt: number
  AdjustedTaxAmt: number
  Form1040AdjustedGrossIncomeAmt: number
  USVIAGIDividedBy1040AGIPct: number
  VirginIslandsTaxAllocatedAmt: number
  USVIWithholdingTaxAmt: number
  EstTaxAndCreditElectPymtAmt: number
  PymtMadeWithExtensionAmt: number
  TotalPaymentsAmt: number
  SmallerAllocTaxOrTotPaymentAmt: number
  OverpaidToUSVIAmt: number
  RefundAmt: number
  AppliedToEsTaxAmt: number
  AmountOwedToUSVIAmt: number
  USVIPaymentAmt: number
}
// Content model for IRS Form 8697
type IRS8697Type: {
  EntityNameControlTxt: string
}
// None
type RegularMethodFilingYrGrpType: {
  YearEndedDt: string
  TaxableIncomeOrLossAmt: number
  AdjTaxableIncomeLookBackAmt: number
  TaxLiabilityAmt: number
}
// None
type RegularMethodRedetermYrGrpType: {
  YearEndedDt: string
  TaxableIncomeOrLossAmt: number
  AdjTaxableIncomeLookBackAmt: number
  TaxLiabilityAmt: number
  FederalIncomeTaxLiabilityAmt: number
  IncreaseOrDecreaseInTxForPYAmt: number
  InterestDueOnIncreaseAmt: number
  InterestToBeRefundedOnDecrAmt: number
}
// None
type TotLookBackRegularMethodGrpType: {
  TotalAdjustmentToIncomeAmt: number
  TotalInterestDueOnIncreaseAmt: number
  TotalInterestToBeRefundedAmt: number
  NetAmtOfInterestOwedAmt: number
}
// None
type SimplifiedMethodType: {
  YearEndedDt: string
  PriorYearRegTaxIncrOrDecrAmt: number
  PriorYearAMTIncrOrDecrAmt: number
  AdjustmentToTaxableIncomeAmt: number
  OverpaymentCeilingAmt: number
  IncreaseOrDecreaseInTxForPYAmt: number
  InterestDueOnIncreaseAmt: number
  InterestToBeRefundedOnDecrAmt: number
}
// None
type TotLookBackSmplfdMethodGrpType: {
  TotalInterestDueOnIncreaseAmt: number
  TotalInterestToBeRefundedAmt: number
  NetAmtOfInterestOwedAmt: number
}
// Content model for IRS Form 8801
type IRS8801Type: {
  NetMinTaxTaxableIncomeLossAmt: number
  NetMinTaxExclusionItemsAmt: number
  MinTaxCreditNetOprLossDedAmt: number
  SumMinTaxCreditLossAndDedAmt: number
  MinTaxCreditExemptionAmt: number
  MinTaxCreditPhaseOutAmt: number
  NetMinTaxCrMinusPhaseOutAmt: number
  NetMinTaxCrTimesDecimalAmt: number
  NetMinTaxMinusExemptionAmt: number
  NetMinTaxLessLossAndDedAmt: number
  NetMinTaxTimesTaxRateAmt: number
  MinTaxForeignTaxCrExclItemsAmt: number
  TentativeMinTaxOnExclItemsAmt: number
  PYMinTaxApplicableRtnTaxAmt: number
  NetMinTaxOnExclusionItemsAmt: number
  PYAlternativeMinimumTaxAmt: number
  NetAlternativeMinimumTaxAmt: number
  AMTPriorYearCarryforwardAmt: number
  QlfyElecVehPYUnallowedCrAmt: number
  AMTCarryforwardPlusNegativeAmt: number
  CYRegTaxLiabiMinusAllwblCrAmt: number
  CYTentativeMinimumTaxAmt: number
  TentMinTaxMinusRegTaxLiabAmt: number
  MinAMTCrAmt: number
  AMTCrCarryforwardToNextYearAmt: number
  NetMinTaxLessDeductionsAmt: number
  PYMinTaxApplicableCapGainAmt: number
  PYUnrecapturedS1250GainAmt: number
  SmallerPYSchDGainOrWrkshtAmt: number
  SmallerNetAMTOrGainAmt: number
  AMTLessSmallerOfTaxOrGainAmt: number
  NetAdjAMTTxblIncTimesPctAmt: number
  MaxCapGainsApplicableLimitAmt: number
  AMTPriorYearApplicableGainAmt: number
  MaxCapGainMinusApplcblLimitAmt: number
  SmllrNetMinTaxOrApplcblGainAmt: number
  SmallerCalculatedNetOrGainAmt: number
  GainMinusSmallerNetAmt: number
  FilingThresholdAmt: number
  ApplcblCapGainsOrSchDWrkshtAmt: number
  SumThresholdApplcblWrkshtAmt: number
  FlngThrshldLessThesholdSumAmt: number
  SmllrAdjNetGainOrTxblIncAmt: number
  NetAltMinTaxableIncTimesPctAmt: number
  SumOfSmllrAmt: number
  ExcessOfSumAmt: number
  ExcessOfSumTimesPctAmt: number
  TotalNetAmt: number
  NetSmallerSchDOrAdjNetGainAmt: number
  NetSchDOrAdjNetGainTimesPctAmt: number
  SumOfAltMinTaxPercentagesAmt: number
  NetAltMinTxblIncTimesFSPctAmt: number
  TaxOnAlternativeMinimumGainAmt: number
}
// Content model for FORM 8814
type IRS8814Type: {
  ChildNm: string
  ChildNameControlTxt: string
  ChildSSN: string
  MultipleForm8814Ind: string
  ChildTaxExemptInterestAmt: number
  ChildQualifiedDividendAmt: number
  ChildInvestmentIncomeAmt: number
  ChildNetInvestmentIncomeAmt: number
  ChildQualifiedDividendPct: number
  ChildCapitalGainDistriPct: number
  ChildQualifiedDividendAdjAmt: number
  ChildCapitalGainDistriAdjAmt: number
  ChildTaxBasisAdjustmentSumAmt: number
  ChildNetAdjustedIncomeAmt: number
  ChildInterestAndDivTaxBasisAmt: number
  ChildTaxBasisUnderSpcfdAmtInd: boolean
  ChildInterestAndDividendTaxAmt: number
}
// Content model for Form 8815
type IRS8815Type: {
  ExclBondIntTotQlfyEducExpnsAmt: number
  ExclBondIntTotNonTxEducBnftAmt: number
  ExclBondIntTxblEducBenefitAmt: number
  ExclBondTotPYBondProcAmt: number
  ExclBondIntTotPYBondIntAmt: number
  ExclBondIntTxblExpnsBondProcRt: number
  ExclBondIntTentativeBondIntAmt: number
  ExclBondIntModifiedAGIAmt: number
  ExclBondIntFilingStatusLmtAmt: number
  ExclBondIntExcessAGIAmt: number
  ExclBondIntExcessAGIRt: number
  ExclBondIntOffsetAmt: number
  ExcludableSavingsBondIntAmt: number
}
// Content model for IRS Form 8820
type IRS8820Type: {
  QlfyClinicalTestExpnssPdAmt: number
  ReducedSection280CCrElectAmt: number
  EmployerDifferentialWageCrAmt: number
  CYCLessEmployerDiffWageCrAmt: number
  OrphanDrugCreditAmt: number
  AllocatedtoBeneficiariesAmt: number
  EstatesAndTrustsCreditAmt: number
}
// None
type OrphanDrugInfoGrpType: {
  OrphanDrugNm: string
  OrphanDrugDesignationNum: string
  OrphanDrugDesignationDt: string
}
// Content model for Form 8824
type IRS8824Type: {
  LikeKindPropertyGivenUpDsc: string
  LikeKindPropertyReceivedDsc: string
  PropertyGivenUpAcquiredDt: string
  PropertyTransferredDt: string
  WrittenNoticeOfPropertyRcvdDt: string
  PropertyActuallyReceivedDt: string
  ExchangeMadeWithRelatedPrtyInd: boolean
  RelationshipDescriptionTxt: string
  RelatedPartySoldPropRcvdInd: boolean
  YouSoldPropertyReceivedInd: boolean
  DisposWasAftrDthRltdPartysInd: string
  DispositionWasInvlntryCnvrtInd: string
  FMVOfOtherPropertyGivenUpAmt: number
  AdjustedBasisOfOthPropGvnUpAmt: number
  GainLossOnOtherPropGvnUpAmt: number
  CashFMVNetLiabRedByExpnssAmt: number
  FMVOfLikeKindPropertyRcvdAmt: number
  RealizedAmt: number
  AdjBssOfLikeKindPropGvnUpAmt: number
  RealizedGainOrLossAmt: number
  SmallerGainOrLossAmt: number
  OrdinaryIncmUndRecaptureRlsAmt: number
  SmllrGainLossLessOrdnryIncmAmt: number
  RecognizedGainAmt: number
  DeferredGainOrLossAmt: number
  BasisOfLikeKindPropertyRcvdAmt: number
  DeferralOfGainCertOfDvsttrNum: number
  DeferralOfGainDvstdProperty: string
  DeferralOfGainDescOfRplcProp: string
  DeferralOfGainDvstdPropSoldDt: string
  DeferralOfGainDvstdPropSaleAmt: number
  DeferralOfGainDvstdPropBssAmt: number
  DeferralOfGainRealizedGainAmt: number
  DeferralOfGainRplcCostAftrAmt: number
  DeferralOfGainRcgnzGainAmt: number
  GainOrLossAmt: number
  DeferralOfGainRcgnzLessLossAmt: number
  DeferralOfGainAmt: number
  DeferralOfGainBssOfRplcPropAmt: number
}
// Content model for Form 8825
type IRS8825Type: {
  TotalGrossRentsAmt: number
  TotalExpensesAmt: number
  NetGainLossFrom4797Amt: number
  RealEstateNetIncomeLossAmt: number
  NetIncomeLossAmt: number
}
// None
type RentalAddressGrpType: {
  RentalTypeDesc: string
  FairRentalDaysCnt: number
  PersonalUseDaysCnt: number
}
// None
type RentalIncomeExpensesGrpType: {
  GrossRentsAmt: number
  AdvertisingAmt: number
  AutoAndTravelAmt: number
  CleaningAndMaintenanceAmt: number
  CommissionsAmt: number
  InsuranceAmt: number
  LegalAndProfessionalServiceAmt: number
  InterestAmt: number
  RepairsAmt: number
  TaxesAmt: number
  UtilitiesAmt: number
  WagesAndSalariesAmt: number
  TotalExpensesAmt: number
  IncomeOrLossAmt: number
}
// None
type OtherRentalRealEstExpenseGrpType: {
  OtherExpenseTxt: string
  OtherExpenseAmt: number
}
// None
type IdentifyPartnershipEstateTrGrpType: {
}
// Content model for IRS Form 8826
type IRS8826Type: {
  TotalEligibleAccessExpendAmt: number
  EligExpendAndMinDifferenceAmt: number
  SmallerFromDifferenceOrMaxAmt: number
  ShareOfCreditAmt: number
  PrtshpandSCorpDisabledAcsCrAmt: number
  PrtshpandSCorpReportAmt: number
}
// Content model for IRS8828
type IRS8828Type: {
  MortgSbsdyTaxExemptBondInd: string
  MortgSbsdyMortgageCrCertInd: string
  MortgSbsdyCertIssuerStateCd: string
  MortgSbsdyCertIssuerSubdivNm: string
  MortgSbsdyCertIssuerAgencyNm: string
  MortgSbsdyOrigLendingInstnNm: string
  MortgSbsdyOriginalLoanClsDt: string
  MortgSbsdySaleOrDisposClsDt: string
  MortgSbsdyOrigClsElapsYearCnt: string
  MortgSbsdyOrigClsElapsMnthCnt: string
  MortgSbsdyOrigLoanPaymentDt: string
  MortgSbsdySalesPriceIntHomeAmt: number
  MortgSbsdyExpnssFromHmSaleAmt: number
  MortgSbsdySaleOfHmRealizedAmt: number
  MortgSbsdyAdjustedBasisInHmAmt: number
  MortgSbsdyGainLossAdjHmSaleAmt: number
  MortgSbsdyModifiedAGIAmt: number
  MortgSbsdyAdjustedQlfyIncmAmt: number
  MortgSbsdyIncomeBasisAmt: number
  MortgSbsdyIncomePercentageRt: number
  MortgSbsdyFederallySbsdzdAmt: number
  MortgSbsdyHoldingPeriodRt: number
  MortgSbsdyFedSbsdzdAdjAmt: number
  MortgSbsdyRecaptureAmt: number
  MortgSbsdyRecaptureTaxAmt: number
}
// Content model for IRS Form 8829
type IRS8829Type: {
  ProprietorNm: string
  SSN: string
  BusinessUseSquareFeetCnt: number
  TotalAreaOfHomeCnt: number
  BusinessSquareFeetPct: number
  BusinessUseHoursCnt: number
  TotalHoursAvailableCnt: number
  BusinessHoursPct: number
  HomeBusinessGainOrLossAmt: number
  CasualtyLossesDirectAmt: number
  CasualtyLossesIndirectAmt: number
  DeductibleMortgageIntDirectAmt: number
  DeductibleMortgageIntIndrAmt: number
  RealEstateTaxesDirectAmt: number
  RealEstateTaxesIndirectAmt: number
  DirectDeductedExpnssSubtlAmt: number
  IndirectDeductedExpnssSubtlAmt: number
  AllowableIndrDeductedExpnssAmt: number
  DirectAndIndirectExpnsSubtlAmt: number
  HomeBusinessIncomeAmt: number
  ExcessMortgageIntDirectAmt: number
  ExcessMortgageIntIndirectAmt: number
  ExcessRealEstateTxsDirectAmt: number
  ExcessRealEstateTxsIndirectAmt: number
  InsuranceDirectAmt: number
  InsuranceIndirectAmt: number
  RentDirectAmt: number
  RentIndirectAmt: number
  RepairsAndMaintDirectAmt: number
  RepairsAndMaintIndirectAmt: number
  UtilitiesDirectAmt: number
  UtilitiesIndirectAmt: number
  OtherExpensesDirectAmt: number
  OtherExpensesIndirectAmt: number
  DirectNondeductedSubtotalAmt: number
  IndirectNondeductedSubtotalAmt: number
  AllwblIndrNondeductedExpnssAmt: number
  OperatingExpensesCarryoverAmt: number
  NondeductibleNetExpensesAmt: number
  AllowableOperatingExpensesAmt: number
  CsltyLossesAndDeprecLimitAmt: number
  ExcessCasualtyLossesAmt: number
  CyovExCsltyLossesAndDeprecAmt: number
  CasualtyLossesAndDeprecNetAmt: number
  AllwblExCsltyLossesDeprecAmt: number
  TotalAllowableExpensesAmt: number
  CasualtyLossPortionAmt: number
  AllowableHomeBusExpnssSchCAmt: number
  ValueOfLandAmt: number
  BasisOfBuildingAmt: number
  BusinessBasisOfBuildingAmt: number
  DepreciationPct: number
  OperatingExpensesAmt: number
  ExcessCsltyLossesAndDeprecAmt: number
}
// Content model for IRS Form 8833
type IRS8833Type: {
  TreatybasedPositionSec6114Ind: string
  TreatybasedPositionSec7701Ind: string
  USCitizenOrOtherInd: string
  TreatyCountryCd: string
  TreatyArticleTxt: string
  IRCProvisionsTxt: string
  ProvisionsOfLimitationTxt: string
  DisclosingTreatySec3016114Ind: boolean
  IRCSubsectionTxt: string
  ExplainTreatybasedPosOnBnftTxt: string
}
// Content model for IRS Form 8834
type IRS8834Type: {
  QlfyElecVehPssvActyCrAllwAmt: number
  QlfyElecVehRegularTxBfrCrAmt: number
  ForeignTaxCreditAmt: number
  CertainAllowableCreditsAmt: number
  TotTaxCrBfrQlfyElecVehCrAmt: number
  QlfyElecVehNetRegularTaxAmt: number
  QlfyElecVehTentativeMinTaxAmt: number
  QlfyElecVehAdjRegularTaxAmt: number
  QlfyElecMotorVehCrAmt: number
}
// Content model for Form 8835
type IRS8835Type: {
}
// Content model for Form 8838
type IRS8838Type: {
  SpouseSSN: string
  TaxYearEndDt: string
  ExpirationDt: string
  TransferredDt: string
  PropertyDesc: string
}
// Content model for Form 8838P
type IRS8838PType: {
  ContributionDt: string
  PropertyDesc: string
}
// None
type BusinessConsentGrpType: {
}
// None
type GainDeferralContributionGrpType: {
}
// None
type FederalIncmTxDueType: {
  TaxYearEndDt: string
  ExpirationDt: string
}
// Content model for Form 8839
type IRS8839Type: {
  AdoptionCreditModifiedAGIAmt: number
  AdoptionCreditModifAGILimitAmt: number
  AdoptionCrModifAGIGrtrAmtInd: boolean
  AdoptionCreditAdjModifAGIPct: number
  NetAdoptionCreditExclCfwdAmt: number
  AdoptionCreditCfwdAmt: number
  NetAdoptionCreditCfwdAmt: number
  CreditLimitWorksheetAmt: number
  AdoptionCreditAmt: number
  EmployerAdoptionBenefitsAmt: number
  AdoptionBenefitsModifiedAGIAmt: number
  AdoptionBnftModifAGIGrtrAmtInd: boolean
  AdoptionBnftModifAGILessLmtAmt: number
  AdoptionBenefitAdjModifAGIPct: number
  TotalExcludedBenefitsAmt: number
  ExcldMoreThanEmplrAdptnBnftInd: boolean
  TaxableBenefitsAmt: number
}
// Content model for IRS Form 8844
type IRS8844Type: {
  TotalQualifiedEmpwrZoneWgsAmt: number
  CurrentYearCreditAmt: number
  FlowthroughEntityCreditAmt: number
  TotalCurrentYearEZRCECreditAmt: number
  AllocatedToBeneficiariesAmt: number
  EstatesTrustsAndCoopsCreditAmt: number
}
// Content model for IRS Form 8845
type IRS8845Type: {
  TotQlfyWagesEmplHlthInsAmt: number
  CY93TotQlfyWagesEmplHlthInsAmt: number
  IncrementalIncreaseAmt: number
  IndianEmploymentCreditAmt: number
  CYIndianEmploymentCreditAmt: number
  EstatesTrustsAndCoopsCreditAmt: number
}
// Content model for IRS Form 8846
type IRS8846Type: {
  TotalTipsReceivedAmt: number
  TipsNotSubjectToCreditAmt: number
  CreditableTipsAmt: number
  CurrentYearCreditAmt: number
  CrForEmplrSSAndMedcrTxsAmt: number
  TotalCrTipsAndEmplrSSMedcrAmt: number
}
// Content model for IRS 8853
type IRS8853Type: {
}
// Content model for Form 8854
type IRS8854Type: {
  ForeignTaxResidenceCountryCd: string
  PhysicallyPresUSPYDayCnt: number
}
// None
type IRS8854ScheduleAType: {
  InstallmentObligLiabilityAmt: number
  MortgageLiabilityAmt: number
  TotalLiabilityAmt: number
  NetWorthAmt: number
}
// None
type TotalPartnershipInterestGrpType: {
  FairMarketValueAmt: number
  USAdjustedBasisAmt: number
  GainOrLossAmt: number
  FMVBegngDtUSResAmt: number
}
// None
type TotAssetsHeldByTrSect671679GrpType: {
  FairMarketValueAmt: number
  USAdjustedBasisAmt: number
  GainOrLossAmt: number
  FMVBegngDtUSResAmt: number
}
// None
type TotNongrantorTrBnfclIntGrpType: {
  FairMarketValueAmt: number
}
// None
type TotalOtherAssetsNotIncludedGrpType: {
  FairMarketValueAmt: number
  USAdjustedBasisAmt: number
  GainOrLossAmt: number
  FMVBegngDtUSResAmt: number
}
// Content model for Form 8858
type IRS8858Type: {
  FDEUSPersonInd: string
  FBUSPersonInd: string
  FDECFCInd: string
  FBCFCInd: string
  FDECFPInd: string
  FBCFPInd: string
  InitialForm8858Ind: string
  FinalForm8858Ind: string
  FDEEffectiveDt: string
  TreatyAndArticleNumberTxt: string
  PrincipalBusinessActyCountryCd: string
  PrincipalBusinessActivityDesc: string
  FunctionalCurrencyDesc: string
  TxOwnerCntryLawsOrganizedCd: {http://www.irs.gov/efile}AllCountriesType
  TaxOwnerFunctionalCurrencyDesc: string
}
// Content model for Form 8858 Schedule C
type IRS8858ScheduleCType: {
  Section989bAvgExchangeRateInd: string
}
// Content model for Form 8858 Schedule C-1
type IRS8858ScheduleC1Type: {
  RemittanceAmt: number
  Section987GainOrLossAmt: number
  Section987GainOrLossRcpntAmt: number
  Sect987GainOrLossDefrdAmt: number
  Sect987GainOrLossDefrdRcpntAmt: number
  RmtTreatedAsDirectOwnerInd: boolean
}
// Content model for Form 8858 Schedule F
type IRS8858ScheduleFType: {
}
// Content model for Form 8858 Schedule G
type IRS8858ScheduleGType: {
  OwnInterestInTrustInd: boolean
  LossClaimToStockOrDebtInd: boolean
  FrgnTaxDisqualifiedSec901mInd: boolean
  ForeignTaxSection909Ind: boolean
  BaseErosionPaymentBenefitInd: boolean
  BaseErosionPaymentAmt: number
  BaseErosionTaxBenefitAmt: number
  BaseErosionPaymentBenefitPdInd: boolean
  BaseErosionPaymentPdAmt: number
  BaseErosionTaxBenefitPdAmt: number
  QualifiedBusinessUnitInd: boolean
  MfrSellingPurchasingBranchInd: boolean
  DualConsolidatedLossAmt: number
  SepCombSepDualCnsldtLossInd: boolean
  SepCombSepDualCnsldtLossAmt: number
  NetIncomeLossAmt: number
  DualCnsldtLossTaxableIncomeInd: boolean
  PermittedDomDualCnsldtLossInd: boolean
  PrmtDomDualCnsldtLossDcmntnInd: boolean
  CmptDualCnsldtLossTxblIncmInd: boolean
  CumulativeRegisterAmt: number
  TriggeringEventRecaptureInd: boolean
  TriggeringEventRecaptureAmt: number
}
// Content model for Form 8858 Schedule H
type IRS8858ScheduleHType: {
  ForeignCYNetIncomePerBooksAmt: number
  CurrentEarningsAndProfitsAmt: number
  DASTMGainOrLossAmt: number
  EarningAndPrftPlusDASTMGainAmt: number
  CurrEarnAndPrftInUSDollarsAmt: number
  ExchangeRt: number
}
// Content model for Form 8858 Schedule I
type IRS8858ScheduleIType: {
  ForeignBranchAssetTransferInd: boolean
  DomCorpAstTransferForeignBrInd: boolean
  DomesticCorpUSShareholderInd: boolean
  TransferredLossAmt: number
}
// Content model for Form 8858 Schedule J
type IRS8858ScheduleJType: {
}
// Recurring type for annual accounting period or tax year
type IRS8858TaxYearType: {
  BeginDt: string
  EndDt: string
}
// Recurring type for U.S. identifying number
type IRS8858USIdNumberType: {
}
// None
type IRS8858CountryDateType: {
  CntryUnderWhoseLawsOrganizedCd: string
  EntityTypeTxt: string
  OrganizationDt: string
}
// None
type IRS8858CurrencyDollarType: {
  FunctionalCurrencyAmt: number
  USDollarAmt: number
}
// None
type IRS8858BegngAndEndAmtNNType: {
  BeginningAmt: number
  EndingAmt: number
}
// None
type IRS8858BegngAndEndAmountType: {
  BeginningAmt: number
  EndingAmt: number
}
// None
type FrgnIncmTaxesPaidAccruedGrpType: {
  ForeignCountryOrUSPossessionCd: string
  ForeignCurrencyAmt: number
  ConversionRt: number
  USDollarAmt: number
  ForeignBranchIncomeCrAmt: number
  ForeignPassiveIncTaxCreditAmt: number
  ForeignGeneralIncTaxCreditAmt: number
  ForeignIncmSection901jCrAmt: number
}
// None
type TotFrgnIncmTaxesPaidAccruedGrpType: {
  USDollarAmt: number
  ForeignBranchIncomeCrAmt: number
  ForeignPassiveIncTaxCreditAmt: number
  ForeignGeneralIncTaxCreditAmt: number
  ForeignIncmSection901jCrAmt: number
}
// Content model for Schedule M (Form 8858)
type IRS8858ScheduleMType: {
  FunctionalCurrencyDesc: string
  ExchangeRt: number
}
// Transactions of foreign disregarded entity
type TransactionFDEorFBGrpType: {
  InventorySalesAmt: number
  PropertyRightsSalesAmt: number
  CompensationRcvdForCrtnSrvcAmt: number
  CommissionsReceivedAmt: number
  RentsRoyaltiesLcnsFeesRcvdAmt: number
  DividendsReceivedAmt: number
  InterestReceivedAmt: number
  OtherTransactionsReceivedAmt: number
  TotalTransactionsReceivedAmt: number
  InventoryPurchaseAmt: number
  TangiblePropertyPurchaseAmt: number
  PurchasesOfPropertyRightsAmt: number
  CompensationPaidForCrtnSrvcAmt: number
  CommissionsPaidAmt: number
  RentsRoyaltiesLicenseFeesPdAmt: number
  InterestPaidAmt: number
  TotalTransactionsPdAmt: number
  BorrowedAmt: number
  LoanAmt: number
}
// Content model for Form 8859
type IRS8859Type: {
  DCHmByrCreditCarryforwardPYAmt: number
  TaxLiabLmtFromCrLmtWrkshtAmt: number
  DCHmByrCurrentYearCreditAmt: number
  DCHmByrCreditCfwdNextYearAmt: number
}
// Content model for FORM 8862
type IRS8862Type: {
  TaxYr: string
  EICClaimedInd: string
  CTCACTCODCClaimedInd: string
  AOTCClaimedInd: string
  EICEligClmIncmIncorrectRptInd: boolean
  EICEligClmQlfyChldOfOtherInd: boolean
  QualifyingChildInd: boolean
  LiveWithOtherPersonInd: boolean
}
// None
type NoQualifyingChildGrpType: {
  MainHomeUSDayCnt: number
  AgeNum: number
  OtherPersonClaimDependentInd: boolean
}
// Content model for IRS Form 8863
type IRS8863Type: {
}
// None
type EducationalInstitutionGrpType: {
  CurrentYear1098TReceivedInd: boolean
  PriorYear1098TReceivedInd: boolean
  EIN: string
}
// Content model for IRS Form 8864
type IRS8864Type: {
  BiodieselGallonsQty: number
  BiodieselAmt: number
  AgriBiodieselGallonsQty: number
  AgriBiodieselAmt: number
  RenewableDieselGallonsQty: number
  RenewableDieselAmt: number
  BiodieselMixtureGallonsQty: number
  BiodieselMixAmt: number
  AgriBiodieselIncludedGalsQty: number
  AgriBiodieselIncludedAmt: number
  RenewableDieselMixtureGalsQty: number
  RenewableDieselInclMixtureAmt: number
  QualifiedAgriBioDieselProdQty: number
  QualifiedAgriBioDieselProdAmt: number
  BiodieselPlusAgriBioDieselAmt: number
  BiodieselRenewableFuelsAmt: number
  TotalBiodieselAndRnwblFuelsAmt: number
  AllocatedToBeneficiariesAmt: number
  EstatesTrustsAndCoopCreditAmt: number
}
// Content model for Form 8865
type IRS8865Type: {
  TaxYearBeginDt: string
  TaxYearEndDt: string
  CategoryOfFiler1Ind: string
  CategoryOfFiler2Ind: string
  CategoryOfFiler3Ind: string
  CategoryOfFiler4Ind: string
  FilerTaxYearBeginDt: string
  FilerTaxYearEndDt: string
  FilerShareOfLiabNonRecourseAmt: number
  QualifiedNonRcrsFinancingAmt: number
  FilerShareOfLiabilitiesOthAmt: number
  ForeignFinancialAssetInd: string
  CntryUnderWhoseLawsOrganizedCd: {http://www.irs.gov/efile}AllCountriesType
  OrganizationFormedDt: string
  PrincipalPlaceOfBusCountryCd: {http://www.irs.gov/efile}AllCountriesType
  PrincipalBusinessActivityDesc: string
  ExchangeRt: number
  FileForm1042Ind: string
  FileForm8804Ind: string
  FileForm1065Ind: string
  SCWhereForm1065FiledTxt: string
  NondedIntRoyaltyUndSect267AInd: boolean
  NondedIntRoyaltyUndSect267AAmt: number
  Section721cPartnershipInd: boolean
  SpclAllocnMadeByFrgnPrtshpInd: boolean
  FrgnDisregardedEntitiesOwnNum: number
  PrtshpClsfUnderLawOfCountryTxt: string
  TotalRcptsAssetsLessThanLmtInd: boolean
}
// None
type OtherPartnersInformationGrpType: {
  Category1Ind: string
  Category2Ind: string
  ConstructiveOwnerInd: string
}
// Content model for Form 8865 Schedule A
type IRS8865ScheduleAType: {
  OwnsDirectInterestInd: string
  OwnsConstructiveInterestInd: string
}
// None
type ConstructiveOwnershipInfoGrpType: {
  ConstructiveOwnerIsFrgnPrsnInd: string
  ConstructiveOwnerIsDrtPrtnrInd: string
}
// Content model for Form 8865 Schedule A-1
type IRS8865ScheduleA1Type: {
  HaveOtherForeignDirectPrtnrInd: boolean
}
// None
type CertainPartnersInformationGrpType: {
  CertainPartnerIsForeignPrsnInd: string
}
// Content model for Form 8865 Schedule A-2
type IRS8865ScheduleA2Type: {
}
// None
type Sect721cPrtshpFrgnPrtnrInfoGrpType: {
  OrganizationCountryCd: {http://www.irs.gov/efile}AllCountriesType
  RelatedToUSTransferorInd: string
  InterestCapitalPct: number
  InterestProfitsPct: number
}
// Content model for Form 8865 Schedule A-3
type IRS8865ScheduleA3Type: {
}
// None
type AffiliationScheduleGrpType: {
  TotalOrdinaryIncomeOrLossAmt: number
  PartnershipIsForeignPersonInd: string
}
// Content model for Form 8865 Schedule B
type IRS8865ScheduleBType: {
  ReturnsAndAllowancesAmt: number
  NetOfSalesAmt: number
  CostOfGoodsSoldAmt: number
  GrossProfitAmt: number
  TotalIncomeOrLossAmt: number
  SalariesAndWagesAmt: number
  GuaranteedPaymentsToPrtnrAmt: number
  RepairsAndMaintenanceAmt: number
  BadDebtExpenseAmt: number
  TaxesAndLicensesAmt: number
  LessDepreciationAmt: number
  NetChangeToDepreciationAmt: number
  RetirementPlansAmt: number
  EmployeeBenefitProgramAmt: number
  TotalDeductionAmt: number
  OrdinaryIncomeLossAmt: number
  BBAImputeUnderpaymentAmt: number
  OtherTaxAmt: number
  TotalBalanceDueAmt: number
  TotalPaymentsAmt: number
  OwedAmt: number
  OverpaymentAmt: number
}
// Content model for Form 8865 Schedule K
type IRS8865ScheduleKType: {
  OrdnryIncmLossFromTrdOrBusAmt: number
  GrossIncomeFromOthRntlActyAmt: number
  NetIncmLossFromOthRntlActyAmt: number
  GuaranteedPaymentsToPrtnrAmt: number
  InterestIncomeAmt: number
  OrdinaryDividendsAmt: number
  QualifiedDividendsAmt: number
  DividendEquivalentsAmt: number
  RoyaltiesReceivedAmt: number
  InterestExpenseOnInvstDbAmt: number
  NetEarningsLossFromSEAmt: number
  GrossFarmingOrFishingIncomeAmt: number
  GrossNonfarmIncomeAmt: number
  Post1986DepreciationAdjAmt: number
  DepletionOtherThanOilAndGasAmt: number
  OilGasAndGeothermalDedsAmt: number
  TaxExemptInterestIncomeAmt: number
  OtherTaxExemptIncomeAmt: number
  NondeductibleExpensesAmt: number
  InvestmentIncomeInPrtflIncmAmt: number
}
// None
type DistributiveShareItemsFrgnTxsType: {
  ForeignCountryOrUSPossessionCd: string
  GrossIncomeFromAllSourcesAmt: number
  FrgnGroIncmPrtshpLvl951AAmt: number
  FrgnGroIncmPrtshpLvlFrgnBrAmt: number
  PrtshpLvlFrgnGroIncmPssvAmt: number
  PrtshpLvlFrgnGroIncmGenCatAmt: number
  PartnerLevelDedIntExpnsAmt: number
  PartnerLevelDeductionsOtherAmt: number
  DedAllocApprtnPrtshpLvl951AAmt: number
  DedAllocApprtnPrtshpLvlBrAmt: number
  PrtshpLvlFrgnIncmDedPssvAmt: number
  PrtshpFrgnIncmDedGenCatAmt: number
  TotalForeignTaxesAmt: number
}
// Content model for Form 8865 Schedule L
type IRS8865ScheduleLType: {
  CashBOYAmt: number
  CashEOYAmt: number
  TradeNotesAccountsRcvblBOYAmt: number
  TradeNotesAccountsRcvblEOYAmt: number
  BadDebtAllowanceBOYAmt: number
  NetTradeNotesAcctRcvblBOYAmt: number
  BadDebtAllowanceEOYAmt: number
  NetTradeNotesAcctRcvblEOYAmt: number
  InventoriesBOYAmt: number
  InventoriesEOYAmt: number
  USGovernmentObligationsBOYAmt: number
  USGovernmentObligationsEOYAmt: number
  TaxExemptSecuritiesBOYAmt: number
  TaxExemptSecuritiesEOYAmt: number
  PartnerLoanBOYAmt: number
  PartnerLoanEOYAmt: number
  MortgageRealEstateLoansBOYAmt: number
  MortgageRealEstateLoansEOYAmt: number
  BuildingOtherDeprecAstBOYAmt: number
  BuildingOtherDeprecAstEOYAmt: number
  AccumulatedDepreciationBOYAmt: number
  NetDepreciableAssetsBOYAmt: number
  AccumulatedDepreciationEOYAmt: number
  NetDepreciableAssetsEOYAmt: number
  DepletableAssetsBOYAmt: number
  DepletableAssetsEOYAmt: number
  AccumulatedDepletionBOYAmt: number
  NetDepletableAssetsBOYAmt: number
  AccumulatedDepletionEOYAmt: number
  NetDepletableAssetsEOYAmt: number
  LandBOYAmt: number
  LandEOYAmt: number
  IntangibleAssetsBOYAmt: number
  IntangibleAssetsEOYAmt: number
  AccumulatedAmortizationBOYAmt: number
  NetIntangibleAssetsBOYAmt: number
  AccumulatedAmortizationEOYAmt: number
  NetIntangibleAssetsEOYAmt: number
  TotalAssetsBOYAmt: number
  TotalAssetsEOYAmt: number
  AccountsPayableBOYAmt: number
  AccountsPayableEOYAmt: number
  ShortTermPayableBOYAmt: number
  ShortTermPayableEOYAmt: number
  AllNonrecourseLoansBOYAmt: number
  AllNonrecourseLoansEOYAmt: number
  LoansFromPartnersBOYAmt: number
  LoansFromPartnersEOYAmt: number
  LongTermPayableBOYAmt: number
  LongTermPayableEOYAmt: number
  PartnersCapitalAccountsBOYAmt: number
  PartnersCapitalAccountsEOYAmt: number
  TotalLiabilitiesCapitalBOYAmt: number
  TotalLiabilitiesCapitalEOYAmt: number
}
// Content model for Form 8865 Schedule M
type IRS8865ScheduleMType: {
  TotalUSAssetsBOYAmt: number
  TotalUSAssetsEOYAmt: number
  TotalForeignAstsPssvCatBOYAmt: number
  TotalForeignAstsPssvCatEOYAmt: number
  TotalForeignAssetsGenCatBOYAmt: number
  TotalForeignAssetsGenCatEOYAmt: number
}
// Content model for Form 8865 Schedule M-1
type IRS8865ScheduleM1Type: {
  NetIncomeLossPerBooksAmt: number
  GuaranteedPaymentsAmt: number
  DepreciationExpensesAmt: number
  TravelEntertainmentAmt: number
  IncomeExpensesSubtotalAmt: number
  TaxExemptInterestAmt: number
  DepreciationDeductionAmt: number
  IncomeDeductionsSubtotalAmt: number
  IncomeLossAmt: number
}
// Content model for Form 8865 Schedule M-2
type IRS8865ScheduleM2Type: {
  BeginningYearBalanceAmt: number
  CapitalContributedDurYrCashAmt: number
  CapitalContributedDurYrPropAmt: number
  NetIncomeLossPerBooksAmt: number
  BalBOYCapNetIncmOtherTotalAmt: number
  DistributionsCashAmt: number
  DistributionsPropertyAmt: number
  TotDistriAndOthDecreasesAmt: number
  EndYearBalanceAmt: number
}
// Content model for Form 8865 Schedule N
type IRS8865ScheduleNType: {
}
// None
type IRS8865SchNType: {
}
// None
type PartnersOtherRltdEntitiesType: {
  USPersonAmt: number
  DomesticCorporationOrPrtshpAmt: number
  ForeignCorporationOrPrtshpAmt: number
  USPerson10PctOrMoreDrtIntAmt: number
}
// Content model for Form 8865 Schedule K-1
type IRS8865ScheduleK1Type: {
  TaxYearBeginDt: string
  TaxYearEndDt: string
  FinalK1Ind: string
  AmendedK1Ind: string
  PartnersInterestInProfitsBOYRt: number
  PartnersInterestInProfitsEOYRt: number
  PartnersLossesBOYRt: number
  PartnersLossesEOYRt: number
  PartnersCapitalBOYRt: number
  PartnersCapitalEOYRt: number
  PartnersDeductionsBOYRt: number
  PartnersDeductionsEOYRt: number
  CapitalAccountBOYAmt: number
  CapitalContributedDuringYrAmt: number
  CurrentYrIncreaseDecreaseAmt: number
  WithdrawalsAndDstrbtnsAmt: number
  CapitalAccountEOYAmt: number
  TaxBasisInd: string
  GAAPInd: string
  Section704bBookInd: string
  DividendEquivalentsAmt: number
}
// Content model for Form 8865 Schedule O
type IRS8865ScheduleOType: {
  Section721cPartnershipInd: boolean
  GainDeferralMethodAppliedInd: boolean
  IntngblPropTrnsfrContriInd: boolean
  CashTransferDt: string
  FairMarketValueCashAmt: number
  TotalFairMarketValueAmt: number
  TotalCostOrOtherBasisAmt: number
  TotGainRecognizedOnTransferAmt: number
  TransferorsBeforeTransferIntRt: number
  TransferorsAfterTransferIntRt: number
  SupplementalInformationTxt: string
}
// None
type TransfersReportableType: {
  TransferDt: string
  PropertyDesc: string
  FairMarketValueOnDtOfTrnsfrAmt: number
  CostOrOtherBasisAmt: number
  RecoveryPrd: number
  SectionAllocationMethodTxt: string
  GainRecognizedOnTransferAmt: number
}
// None
type DispositionsReportableGrpType: {
  DispositionDt: string
  MannerOfDispositionTxt: string
  PartnershipGainAmt: number
  DeprecRcptrRcgnzByPrtshpAmt: number
  GainAllocatedToPartnerAmt: number
}
// Content model for Form 8865 Schedule P
type IRS8865SchedulePType: {
}
// None
type AcquisitionInfoType: {
  AcquisitionDt: string
  FMVOfInterestAcquiredAmt: number
  BasisInInterestAcquiredAmt: number
  InterestBeforeAcquisitionPct: number
  InterestAfterAcquisitionPct: number
}
// None
type DispositionInfoType: {
  DispositionDt: string
  FMVOfInterestDisposedAmt: number
  BasisInInterestDisposedAmt: number
  InterestBeforeDispositionPct: number
  InterestAfterDispositionPct: number
}
// None
type ChgInProportionalIntInfoType: {
  ChangeDesc: string
  ChangeDt: string
  FMVOfInterestAmt: number
  BasisInInterestAmt: number
  InterestBeforeChangePct: number
  InterestAfterChangePct: number
}
// None
type SupplementalInfo8865SchedulePType: {
  PartNumAndColumnTxt: string
  Desc: string
}
// Content model for IRS Form8866
type IRS8866Type: {
  TaxYearBeginDt: string
  TaxYearEndDt: string
  TotalAdjustmentToIncomeAmt: number
  TotalInterestDueOnIncreaseAmt: number
  TotalInterestToBeRefundedAmt: number
  NetAmtOfInterestOwedAmt: number
}
// None
type IncomeForcastMethodRcmptYrType: {
  YearEndedDt: string
  TaxableIncomeOrLossAmt: number
  AdjTaxableIncomeLookBackAmt: number
  TaxLiabilityAmt: number
}
// None
type IncomeForcastMethodPriorYrGrpType: {
  YearEndedDt: string
  TaxableIncomeOrLossAmt: number
  AdjTaxableIncomeLookBackAmt: number
  TaxLiabilityAmt: number
  FederalIncomeTaxLiabilityAmt: number
  IncreaseOrDecreaseInTxForPYAmt: number
}
// Content model for IRS Form 8867
type IRS8867Type: {
  PreparerPersonNm: string
  PTIN: string
  EICClaimedInd: string
  CTCACTCODCClaimedInd: string
  AOTCClaimedInd: string
  HOHFilingStatusInd: string
  TxpyrProvidedOrObtainedInfoInd: boolean
  CompleteApplicableWorksheetCd: string
  SatisfyKnowledgeRequirementInd: boolean
  IncorIncmplInconInfoInd: boolean
  MakeInquiryInd: boolean
  DocumentInquiryInd: boolean
  SatisfyRecordRetentionRqrInd: boolean
  WorkPaperDocumentNm: string
  SubstantiateCrEligibilityInd: boolean
  PrevDisallowedOrReducedCrCd: string
  CompleteRequiredRecertFormCd: string
  QstnToCompleteCorrectSchCCd: string
  EICEligibleClaimQlfyChildInd: boolean
  ExplainLiveWithChldRqrClaimInd: boolean
  ExplainTiebreakerRulesCd: string
  USCitizenOrNationalInd: boolean
  ExplainLiveWithChldRqrClaimCd: string
  ExplainRuleClmCrDivPrnts8332Cd: string
  SubstProvQlfyTuitionExpnssInd: boolean
  EligibleClaimHOHInd: boolean
  CrEligibilityCertificationInd: boolean
}
// Content model for IRS Form 8873
type IRS8873Type: {
  FrgnEconProcessExcReqrmntsInd: boolean
  PrincipalBusinessActivityDesc: string
  FrgnTrdSaleOrExchIncmAmt: number
  SaleAttrblFrgnSaleLsngIncm1Amt: number
  FrgnTrdLeaseOrRntalIncmAmt: number
  ForeignSalesAndLeasingIncmAmt: number
  ServicesRltdFrgnTrdIncm1Amt: number
  SaleAttrblFrgnSaleLsngIncm2Amt: number
  ServicesRelatedFrgnTrdIncm2Amt: number
  SrvcRltdFrgnSaleLsngIncmAmt: number
  ConstructionSrvcFrgnTrdIncmAmt: number
  ManagerialSrvcFrgnTrdIncmAmt: number
  SumOfFrgnEconomicProcAmt: number
  ForeignTradingGrossRcpts1Amt: number
  SumOfForeignSaleLsngIncmAmt: number
  InventoryBOYForeignTrdIncmAmt: number
  InvntryBOYFrgnSaleLsngIncmAmt: number
  PurchasesForeignTradeIncmAmt: number
  FrgnPurchasesSaleLsngIncmAmt: number
  CostOfLaborForeignTradeIncmAmt: number
  CostOfLbrFrgnSaleLsngIncmAmt: number
  TotalOfCostForeignTradeIncmAmt: number
  TotOfCostFrgnSaleLsngIncmAmt: number
  InventoryEOYFrgnTradeIncmAmt: number
  InvntryEOYFrgnSaleLsngIncmAmt: number
  NetGoodsCostForeignTrdIncmAmt: number
  NetGdsCostFrgnSaleLsngIncmAmt: number
  SubtractForeignTradeIncomeAmt: number
  SubtractFrgnSaleLeasingIncmAmt: number
  ForeignTradeIncome1Amt: number
  FrgnSaleAndLsngIncm1Amt: number
  ForeignTradingGrossRcpts2Amt: number
  CostsAndExpnssDrtMtrlCostsAmt: number
  CostsAndExpensesDrtLbrCostsAmt: number
  SumOfCostsAndExpensesAmt: number
  FrgnGroRcptsMnsCostExpnssAmt: number
  WorldwideGrossRcptsFromSlsAmt: number
  CostsAndExpensesForPropSoldAmt: number
  OtherExpnssDedAttrblGroIncmAmt: number
  TotalCostsAndExpensesAmt: number
  WorldWideRcptsMnsCostExpnssAmt: number
  OverallProfitPercentageRt: number
  OverallProfitPercentageLmtAmt: number
  FrgnTrdeIncmByMrgnalCostingAmt: number
  FrgnTrdIncmMrgnalCostingPctAmt: number
  ForeignTrdIncmByFullCostingAmt: number
  ForeignTradeIncomeSmallerAmt: number
  FrgnTrdGroRcptsBy1Pnt2PctAmt: number
  ForeignTradeIncomeBy30PctAmt: number
  SmlestOfFrgnTrdIncmGroRcptAmt: number
  ForeignTradeIncome2Amt: number
  ForeignTradeIncomeBy15PctAmt: number
  ForeignTradingGrossRcpts3Amt: number
  ForeignTradeRcptsBy1Pnt2PctAmt: number
  ForeignTradeIncomeBy2PctAmt: number
  SmallerOfForeignTrdGroRcptsAmt: number
  FrgnSaleAndLsngIncm2Amt: number
  FrgnSaleAndLsngBy30PctAmt: number
  GreatestOfQlfyFrgnTrdIncmAmt: number
  QlfyTrdMthdsDivByFrgnTrdIncmRt: number
  OthFrgnTrdExpnsAndDednsAmt: number
  MultiplyExpensesDedByRtAmt: number
  SumOfQualifiedFrgnTrdIncmAmt: number
  ReductionForIntntByctAmt: number
  QualifyingForeignTradeIncmAmt: number
  DifBtwnExpnDedNdFrgnTrdIncmAmt: number
}
// Content model for IRS Form 8874
type IRS8874Type: {
  CDETotalCreditAmt: number
  NewMarketsCreditAmt: number
  TotalCreditAmt: number
}
// Content model for Form 8880
type IRS8880Type: {
  PrimaryRothIRAForCurrentYrAmt: number
  SpouseRothIRAForCurrentYrAmt: number
  PrimaryContributionsAmt: number
  SpouseContributionsAmt: number
  AddPrimRothIRAToCYContriAmt: number
  AddSpRothIRAToCYContriAmt: number
  PrimTaxableDistributionsAmt: number
  SpsTaxableDistributionsAmt: number
  CalculatePrimDistribFromTotAmt: number
  CalculateSpsDistribFromTotAmt: number
  PrimSmallerOfCalculationAmt: number
  SpsSmallerOfCalculationAmt: number
  TotalCalculatedAmt: number
  TaxReturnAGIAmt: number
  QlfyRetirementSavDecimalAmt: number
  CalculatedAmtByDecimalAmt: number
  CalculatedCreditsFromTaxAmt: number
  CrQualifiedRetirementSavAmt: number
}
// Content model for IRS Form8881
type IRS8881Type: {
  QualifiedStartupCostsIncurdAmt: number
  PensionPlanStartupCostsCrAmt: number
  SumCostsAndCrFromPPStartupAmt: number
  CurrentYearCreditAmt: number
}
// Content model for IRS Form 8882
type IRS8882Type: {
  QlfyChldCareFcltyExpendAmt: number
  QualifiedChildCareRscExpendAmt: number
  EmplrChldCareFcltsAndSrvcCrAmt: number
  SumOfPassThruEntCostsAndCrAmt: number
  SmllrOfEntitiesSumOr150000Amt: number
  AllocatedtoBeneficiariesAmt: number
  EstatesAndTrustsCreditAmt: number
}
// Content model for IRS Form 8883
type IRS8883Type: {
  ValidAndTimelyForm8023FiledInd: boolean
  FiledDt: string
  AcquisitionDt: string
  StockPurchaseDuring12MonthPct: number
  StockPurchaseOnAcquisDtPct: number
  StockPriceAmt: number
  AcquisitionCostsOrSellCostsAmt: number
  TargetLiabilitiesAmt: number
  AGUBOrADSPAmt: number
  FlrMemAffltGrpBfrAcquisDtInd: boolean
  TrgtMemAffltGrpBfrAcquisDtInd: boolean
  FrgnCorpControlledFrgnCorpInd: boolean
  CFCAnyTimeDuringPrev5YrsInd: string
  FrgnCorpWithIncmGainOrLossInd: boolean
  QualifyingForeignTargetInd: boolean
  Sect1504dOrSect953dElectionInd: boolean
  DISCInd: boolean
  PassiveForeignInvestmestCoInd: boolean
  PFICPedigreedQualifiedFundInd: boolean
  Class1FairMarketValueAmt: number
  Class1AllocnOfAGUBOrADSPAmt: number
  Class2FairMarketValueAmt: number
  Class2AllocnOfAGUBOrADSPAmt: number
  Class3FairMarketValueAmt: number
  Class3AllocnOfAGUBOrADSPAmt: number
  Class4FairMarketValueAmt: number
  Class4AllocnOfAGUBOrADSPAmt: number
  Class5FairMarketValueAmt: number
  Class5AllocnOfAGUBOrADSPAmt: number
  Class6And7FairMarketValueAmt: number
  Cl6And7AllocnOfAGUBOrADSPAmt: number
  TotalFairMarketValueAmt: number
  TotalAllocationOfAGUBOrADSPAmt: number
  Class1PrevPriceAllocationAmt: number
  Class1IncreaseDecreaseAmt: number
  Cl1RedetermAllocnAGUBOrADSPAmt: number
  Class2PrevPriceAllocationAmt: number
  Class2IncreaseDecreaseAmt: number
  Cl2RedetermAllocnAGUBOrADSPAmt: number
  Class3PrevPriceAllocationAmt: number
  Class3IncreaseDecreaseAmt: number
  Cl3RedetermAllocnAGUBOrADSPAmt: number
  Class4PrevPriceAllocationAmt: number
  Class4IncreaseDecreaseAmt: number
  Cl4RedetermAllocnAGUBOrADSPAmt: number
  Class5PrevPriceAllocationAmt: number
  Class5IncreaseDecreaseAmt: number
  Cl5RedetermAllocnAGUBOrADSPAmt: number
  Class6And7PrevPriceAllocnAmt: number
  Class6And7IncreaseDecreaseAmt: number
  Cl6And7RedtrmAllocnAGUBADSPAmt: number
  TotalOfPreviousPriceAllocnAmt: number
  TotRedetermAllocnAGUBOrADSPAmt: number
  IncreaseOrDecreaseReasonsDsc: string
}
// Content model for Form 8885
type IRS8885Type: {
  PersonNm: string
  RecipientSSN: string
  HealthCvrTaxCrJanuaryInd: string
  HealthCvrTaxCrFebruaryInd: string
  HealthCvrTaxCrMarchInd: string
  HealthCvrTaxCrAprilInd: string
  HealthCvrTaxCrMayInd: string
  HealthCvrTaxCrJuneInd: string
  HealthCvrTaxCrJulyInd: string
  HealthCvrTaxCrAugustInd: string
  HealthCvrTaxCrSeptemberInd: string
  HealthCvrTaxCrOctoberInd: string
  HealthCvrTaxCrNovemberInd: string
  HealthCvrTaxCrDecemberInd: string
  HealthPlanPaidAmt: number
  HealthPlanPaidWithMSAOrHSAAmt: number
  HealthPlanPaidLessMSAAndNEGAmt: number
  HealthCoverageTaxCreditAmt: number
}
// Content model for IRS Form 8886
type IRS8886Type: {
  StatementCnt: number
  TotalStatementCnt: number
  TaxReturnFormNumberDsc: string
  TaxYearDt: string
  AttachedToAmendedReturnInd: boolean
  InitialYearFilerInd: string
  ProtectiveDisclosureInd: string
  ListedInd: string
  ConfidentialInd: string
  ContractualProtectionInd: string
  LossInd: string
  TransactionOfInterestInd: string
  PublishedGuidanceNumberTxt: string
  SameOrSimilarTransactionCnt: number
  DeductionsInd: string
  CapitalLossInd: string
  OrdinaryLossInd: string
  ExclusionsFromGrossIncomeInd: string
  NonrecognitionOfGainInd: string
  AdjustmentsToBasisInd: string
  AbsenceOfAdjustmentsToBasisInd: string
  DeferralInd: string
  TaxCreditsInd: string
}
// Content model for IRS Form 8888
type IRS8888Type: {
  RefundUsedForBondPurchasesAmt: number
  RefundByCheckAmt: number
  TotalAllocationOfRefundAmt: number
}
// Content model for IRS Form 8889
type IRS8889Type: {
  PersonNm: string
  RecipientSSN: string
  HSAContributionAmt: number
  HSALimitedAnnualDeductibleAmt: number
  TotalArcherMSAContributionAmt: number
  HSALimitedDeductibleAllwdAmt: number
  HSAFamilyDeductibleAmt: number
  HSAAddnlContributionAmt: number
  HSALimitedGrossContributionAmt: number
  HSAEmployerContributionAmt: number
  HSAQualifiedFundingDistriAmt: number
  TotalHSAContributionAmt: number
  HSALimitedContributionAmt: number
  TotalHSADeductionAmt: number
  TotalHSADistributionAmt: number
  HSADistributionRolloverAmt: number
  HSANetDistributionAmt: number
  UnreimbQualMedAndDentalExpAmt: number
  TaxableHSADistributionAmt: number
  HSADistriAddnlPercentTaxExcInd: string
  HSADistriAddnlPercentTaxAmt: number
  HDHPCoverageFailPartialYrAmt: number
  HDHPCoverageFailFundDistriAmt: number
  HDHPCoverageIncomeAmt: number
  HDHPCoverageAddnlTaxAmt: number
}
// Content model for IRS Form 8896
type IRS8896Type: {
  LowSulphurDieselFuelPrdcdQty: number
  AdjustedDieselFuelProducedAmt: number
  QualifiedCostLimitAmt: number
  TotalFuelProdCrAllPrTxYrsAmt: number
  TotalProdCrLessQlfyCapCostsAmt: number
  SmallerAdjDieselOrTotProdCrAmt: number
  CreditFromPassThruEntitiesAmt: number
  SumSmllrAdjCrAndPassThruEntAmt: number
  TotalAllocatedToPatronsAmt: number
  AllocPatronsLessSmllrAdjCrAmt: number
}
// Content model for IRS Form 8900
type IRS8900Type: {
  QlfyRlrdTrackMaintExpendAmt: number
  FiftyPctRlrdTrackMaintExpndAmt: number
  MilesOfRlrdTrackOwnorLsdQty: number
  TotalRlrdTrackMilesQty: number
  AdjustedTotalRailroadTrackAmt: number
  QualifiedRlrdTrackMaintCrAmt: number
  CurrentYearCreditAmt: number
}
// Content model for IRS Form 8903
type IRS8903Type: {
  IncomeLimitationAmt: number
  QualifiedIncomeOrIncomeLmtAmt: number
  PercentOfIncomeAmt: number
  QlfyIncOrOilRelOrIncLimitsAmt: number
  QlfyIncOrOilRelOrIncPercentAmt: number
  DomesticProdActivityRedAmt: number
  W2WagesAmt: number
  PassThroughW2WagesAmt: number
  TotalW2WagesAmt: number
  EstateOrTrustAllocatedBenefAmt: number
  EstatesAndTrustsAmt: number
  W2WageLimitationAmt: number
  IncomePctOrW2WageLimitationAmt: number
  CoopeartivesDomesticProdDedAmt: number
  DomesticProductionActDedAmt: number
}
// Type for table rows Line 1(a) - 10(a)
type AllProductionGrpType: {
  DomesticProductionGroRcptsAmt: number
  AllocatedCostOfGoodsSoldAmt: number
  DirectDedExpensesLossesAmt: number
  IndirectDedExpnssLossesAmt: number
  TotCostGdsSoldDedExpnssLossAmt: number
  NetDomesticProdGrossRcptsAmt: number
  QlfyProductionActivitiesAmt: number
  ProductionActivitiesIncomeAmt: number
  EstateOrTrustAllocatedBenefAmt: number
  OilRelQlfyProdActivitiesIncAmt: number
}
// Type for table rows Line 1(b) - 10(b)
type AllActivitiesGrpType: {
  DomesticProductionGroRcptsAmt: number
  AllocatedCostOfGoodsSoldAmt: number
  DirectDedExpensesLossesAmt: number
  IndirectDedExpnssLossesAmt: number
  TotCostGdsSoldDedExpnssLossAmt: number
  NetDomesticProdGrossRcptsAmt: number
  QlfyProductionActivitiesAmt: number
  ProductionActivitiesIncomeAmt: number
  EstateOrTrustAllocatedBenefAmt: number
  QlfyProductionActyIncomeAmt: number
}
// Content model for IRS Form 8906
type IRS8906Type: {
  DistldSpiritsCasesTotalQty: number
  TotCaseQtyMultByCostPerCaseAmt: number
  DistilledSpiritsCreditAmt: number
  SumOfTotTxFnCstNdDistSprtCrAmt: number
}
// Content model for IRS Form8908
type IRS8908Type: {
  TotalHomesMeetingStandardQty: number
  TotalHomesStandardAmt: number
  TotalMfrHmMeetingStdQty: number
  TotalManufactureHomesAmt: number
  EnergyEfficientHomeCreditAmt: number
  TotalCreditAmt: number
}
// Content model for Form 8910
type IRS8910Type: {
  TotalBusinessInvestmentUseAmt: number
  AlternativeMotorVehicleCrAmt: number
  BusinessInvstUsePartOfCrAmt: number
  TentativeCreditForPrsnlUseAmt: number
  TotalTentativeCrForPrsnlUseAmt: number
  TotalTaxBeforeCrAndOthTaxesAmt: number
  AltMotorVehCreditFromFormsAmt: number
  AltMotorVehAdjustedCreditAmt: number
  PersonalUsePartOfCreditAmt: number
}
// Content model for Form 8910 Part I
type IRS8910TentativeCreditGrpType: {
  VIN: string
  VehiclePlacedInServiceDt: string
  AltMotorVehTentativeCreditAmt: number
}
// None
type BusinessInvestmentUseGrpType: {
  BusinessInvestmentUsePct: number
  BusinessInvestmentUseAmt: number
}
// Content model for Form 8911
type IRS8911Type: {
  TotalQlfdPropertyCostCreditAmt: number
  BusInvestmtUsePartAmt: number
  Section179ExpenseDeductionAmt: number
  NetBusinessUsePartAmt: number
  AdjustedBusinessUsePartAmt: number
  MaximumBusinessUsePartAmt: number
  AdjBusUsePrtOrMxBusUsePrtAmt: number
  AltFuelVehRefuelPropCreditAmt: number
  BusinessInvstUsePartOfCrAmt: number
  PersonalUsePartOfCreditAmt: number
  AdjustedPersonalUsePartAmt: number
  MaximumPersonalUsePartAmt: number
  SmllrAdjOrMxPersnlUsePrtAmt: number
  RegularTaxBeforeCreditsAmt: number
  ForeignTaxCreditAmt: number
  CertainAllowableCreditsAmt: number
  TotalTaxCreditsAmt: number
  NetRegularTaxAmt: number
  TentativeMinimumTaxAmt: number
  AdjustedRegularTaxAmt: number
  TotalPersonalUsePartOfCrAmt: number
}
// Content model for Form 8912
type IRS8912Type: {
  CarryforwardPYBondCreditAmt: number
  TotalCreditAmt: number
  EstateOrTrustAllocatedBenefAmt: number
  EstTrCYBondCrAmt: number
  RegularTaxBeforeCreditAmt: number
  AlternativeMinimumTaxAmt: number
  SumRegularTaxAndAltMinTxAmt: number
  ForeignTaxCreditAmt: number
  CertainAllowableCreditsAmt: number
  GeneralBusinessCreditAmt: number
  CreditPriorYearMinimumTaxAmt: number
  TotalCreditsAmt: number
  NetIncomeTaxAmt: number
  CurrentYearAllowableCreditAmt: number
  TotalAllForm1097BTCAmt: number
  TotalOtherNotRptF1097BTCAmt: number
  NewCleanEnergyBondAmt: number
}
// Content model for Form 8917
type IRS8917Type: {
  TotalQualifiedExpensesAmt: number
  TotalIncomeAmt: number
  TuitionAndFeesDedOthCreditAmt: number
  TuitionAndFeesDedIncmLessCrAmt: number
  TuitionAndFeesDedMoreLimitInd: boolean
  TuitionAndFeesDedAmt: number
}
// Content model for IRS Form 8919
type IRS8919Type: {
  PersonNm: string
  SSN: string
  TotalWagesWithNoWithholdingAmt: number
  TotalWagesAndUnreportedTipsAmt: number
  NetWagesSubjectToSocSecTaxAmt: number
  WagesSubjectToSSTAmt: number
  UncollectedSocSecTaxAmt: number
  UncollectedMedicareTaxAmt: number
  UncollectedSocSecMedTaxAmt: number
}
// Content model for IRS Form8923
type IRS8923Type: {
  TotalTrainingCostsAmt: number
  AllowableTrainingCostsAmt: number
  MineRescueTrainingCreditsAmt: number
  TotalCreditsandCostsAmt: number
}
// Content model for Form 8925
type IRS8925Type: {
  FilerShownOnReturnNm: string
  PolicyHolderNm: string
  TradeOrBusinessDesc: string
  EndOfYearEmployeesQty: number
  EndOfYearEmployeesInsuredQty: number
  TotalEOYInsuranceAmt: number
  ValidConsentForEachEmployeeInd: boolean
  EmployeesWithoutValidCnsntQty: number
}
// Content model for IRS Form 8932
type IRS8932Type: {
  DifferentialWagePaymentEligAmt: number
  DifferentialWagePaymentAdjAmt: number
  DifferentialWagePaymentCrAmt: number
  DifferentialWagePaymentNetAmt: number
  DifferentialWagePymtAllocnAmt: number
  DifferentialWgPymtCoopEstsAmt: number
}
// Content model for Form 8933
type IRS8933Type: {
  Section45Qb3ElectionInd: string
  Section45Qb6ElectionInd: string
  CreditAmt: number
  TotalAmt: number
}
// None
type CapturedMetricTonCreditGrpType: {
  MetricTonsCapturedQty: number
  MetricTonsCapturedCreditAmt: number
}
// Content model for IRS Form 8936
type IRS8936Type: {
  TotalBusinessInvestmentUseAmt: number
  QlfyElecVehCrPrtshpSCorpAmt: number
  BusinessInvstUsePartOfCrAmt: number
  TotalTentativeCrForPrsnlUseAmt: number
  TotalTaxBeforeCrAndOthTaxesAmt: number
  QlfyElecVehOtherFormCreditsAmt: number
  QlfyElecVehAdjPrsnlCreditAmt: number
  PersonalUsePartOfCreditAmt: number
}
// None
type QlfyPlugInElecDriveMtrVehCrGrpType: {
  VIN: string
  VehiclePlacedInServiceDt: string
  VehicleCostAmt: number
  PhaseoutPct: number
  VehicleTentativeCreditAmt: number
  BusinessInvestmentUsePct: number
  BusinessInvestmentUseAmt: number
  Section179ExpenseDeductionAmt: number
  NetBusinessInvestmentUseAmt: number
  BusinessInvestmentUseRatioAmt: number
  SmallerMaxCreditOrBusRatioAmt: number
  TentativeCreditForPrsnlUseAmt: number
  TentativeCrPersonalUseRatioAmt: number
  MaxCreditPerVehiclePersonalAmt: number
  SmallerMaxCrOrPrsnlRatioAmt: number
}
// Content model for Form 8938
type IRS8938Type: {
  CalendarYr: string
  TaxYearBeginDt: string
  TaxYearEndDt: string
  ForeignDepositAcctCnt: number
  MaxAllFrgnDepositAcctValueAmt: number
  ForeignCustodialAcctCnt: number
  MaxAllFrgnCstdAcctValueAmt: number
  AnyDepOrCstdAcctClosedDurTYInd: boolean
  ForeignAssetCnt: number
  MaxAllFrgnAssetValueAmt: number
  AnyFrgnAssetAcqOrSoldDurTYInd: boolean
  Form3520Cnt: number
  Form3520ACnt: number
  Form5471Cnt: number
  Form8621Cnt: number
  Form8865Cnt: number
}
// None
type AssetCategorySumGrpType: {
}
// None
type TaxItemSumGrpType: {
  ReportedOnFormOrScheduleAmt: number
  WhereReportedFormAndLineTxt: string
  WhereReportedSchAndLineTxt: string
}
// None
type ForeignFinclAccountGrpType: {
  AccountOpenedDuringTaxYearInd: string
  AccountClosedDuringTaxYearInd: string
  JointlyOwnedWithSpouseInd: string
  NoTaxItemReportedInd: string
  MaxAccountValueDurTYAmt: number
  ExchangeRateUsedInd: boolean
  ForeignCurrencyDesc: string
  ExchangeRt: number
  SourceOfExchangeRateUsedTxt: string
  GIIN: string
}
// None
type OtherForeignAssetGrpType: {
  AssetDesc: string
  JointlyOwnedWithSpouseInd: string
  NoTaxItemReportedInd: string
  ExchangeRateUsedInd: boolean
  ForeignCurrencyDesc: string
  ExchangeRt: number
  SourceOfExchangeRateUsedTxt: string
  GIIN: string
}
// None
type AssetNotStockOfForeignEntGrpType: {
}
// None
type SpecifiedIndivOrPersonInfoType: {
}
// Content model for Form 8941
type IRS8941Type: {
  SHOPInd: boolean
  SHOPIdentificationNum: string
  EmplmnTaxesReportEmployerEIN: string
  PriorYearSHOPInd: boolean
  SmllEmplrHIPIndivEmpldForCrCnt: number
  SmllEmplrHIPFTEEmplForTaxYrCnt: number
  AvgAnnualWagesPdForTxYrAmt: number
  HIPPaidForEmplEmployedForCrAmt: number
  SmllEmplrHIPPotentiallyPaidAmt: number
  SmllEmplrEligibleHIPPaidAmt: number
  SmllEmplrEligHIPTimesPctAmt: number
  SmllEmplrHIPFTECreditAmt: number
  AnnualWgPdLessThanSpecifiedAmt: number
  TotStPremSbsdyPdOrCrForHIPAmt: number
  HIPPdLessTotStPremOrCrAmt: number
  SmallerAnnualWgPdOrHIPPdAmt: number
  PaidHIPForEmplForPrpsOfCrCnt: number
  FTEEmplPdHIPForPrpsOfCrCnt: number
  SmllEmplrCreditForHIPAmt: number
  SumSmllrAmtAndCreditForHIPAmt: number
  SmllEmplrHIPSumLessAllocAmt: number
  SmllEmplrHIPPayrollTxsPdCrAmt: number
  SmllEmplrHIPTaxExemptCreditAmt: number
}
// Content model for IRS Form 8949
type IRS8949Type: {
}
// None
type CapitalGainAndLossAssetGrpType: {
  AdjustmentsToGainOrLossCd: string
  AdjustmentsToGainOrLossAmt: number
  GainOrLossAmt: number
}
// Content model for IRS Form 8958
type IRS8958Type: {
  SpouseOrPartnerFirstNm: string
  SpouseOrPartnerLastNm: string
  SpouseOrPartnerSSN: string
}
// None
type AllocationInfoDetailType: {
  Desc: string
  TotalAllocationAmt: number
  PrimaryTaxpayerAllocationAmt: number
  SpouseOrPartnerAllocationAmt: number
}
// Content model for Form 8959
type IRS8959Type: {
  TotalW2MedicareTaxWithheldAmt: number
  TotalMedicareTaxAmt: number
  AddnlMedicareTaxWithholdingAmt: number
  TotalW2AddlRRTTaxAmt: number
  AddlMedcrRRTTaxWithholdingAmt: number
}
// Content model for Form 8960
type IRS8960Type: {
  Section6013gInd: string
  Section6013hInd: string
  RegSection1141110gInd: string
  TaxableInterestAmt: number
  OrdinaryDividendsAmt: number
  AnnuitesFromNonQlfPlansAmt: number
  NetRentalIncomeOrLossAmt: number
  AdjNetIncmOrLossNonSect1411Amt: number
  RentalREAndAdjNetIncmOrLossAmt: number
  PropertyDisposGainOrLossAmt: number
  NonNIITPropDisposGainOrLossAmt: number
  GainOrLossFromDisposAmt: number
  CFCAndPFICInvstIncmChangesAmt: number
  OtherInvestmentIncomeOrLossAmt: number
  TotalIncomeAmt: number
  InvestmentInterestAmt: number
  StateLocalForeignIncomeTaxAmt: number
  MiscInvestmentExpenseAmt: number
  InvestmentExpenseAmt: number
  AdditionalModificationAmt: number
  TotalDeductionModificationAmt: number
  NetInvestmentIncomeAmt: number
  ModifiedAGIAmt: number
  FilingThresholdAmt: number
  MAGILessThresholdAmt: number
  SmllrIncmOrMAGILessThrshldAmt: number
  IndivNetInvstIncomeTaxAmt: number
  IncomeDistributionDeductionAmt: number
  UndistributedNetIncomeAmt: number
  AdjustedGrossIncomeAmt: number
  TrustEstHighestTaxBracketAmt: number
  AGILessTrustEstHighestTaxAmt: number
  SmllrUndistrIncmAGILessTaxAmt: number
  EstTrustNetInvstIncomeTaxAmt: number
}
// Content model for Form 8962
type IRS8962Type: {
  QSEHRAInd: boolean
  MarriedFilingSeparatelyExcInd: string
  TotalExemptionsCnt: number
  ModifiedAGIAmt: number
  TotalDependentsModifiedAGIAmt: number
  HouseholdIncomeAmt: number
  PovertyLevelAmt: number
  FederalPovertyTableLocCd: string
  FederalPovertyLevelPct: number
  FederalPovertyLevelPct401Ind: boolean
  ApplicableFigureRt: number
  AnnualContributionAmt: number
  MonthlyContriHealthCareCvrAmt: number
  SharePolicyMarriedAltCalcInd: boolean
  FullYrCoverage1095AInd: boolean
  TotalPremiumTaxCreditAmt: number
  TotalAdvancedPTCAmt: number
  ReconciledPremiumTaxCreditAmt: number
  ExcessAdvncPaymentAmt: number
  AdditionalTaxLimitationAmt: number
  PremiumTaxCreditTaxLiabAmt: number
  SharedPolicyAllocationInfoInd: boolean
}
// None
type AltCalcForMarriageGrpType: {
  FamilySizeCnt: number
  MonthlyContributionAmt: number
  StartMonthNumberCd: string
  EndMonthNumberCd: string
}
// Content model for Form 8965
type IRS8965Type: {
  IncmBelowFlngThresholdInd: string
}
// Content model for Form 9465
type IRS9465Type: {
  F9465TaxReturnTypeCd: string
  IATaxYrDt: string
  BusIATaxYrDt: string
  PrimaryNameControlTxt: string
  PrimarySSN: string
  SpouseNameControlTxt: string
  SpouseSSN: string
  NewAddressInd: string
  TaxDueAmt: number
  AdditionalBalanceDueAmt: number
  TotalBalanceDueAmt: number
  PaymentAmt: number
  TotalTaxDueAmt: number
  CalculatedMonthlyPymtAmt: number
  PaymentDueAmt: number
  RevisedMonthlyPaymentAmt: number
  CanNotIncreasePaymentInd: string
  PaymentDueDayNum: number
  RoutingTransitNum: string
  BankAccountNum: string
  NoElectronicPaymentInd: string
  PayrollDeductionAgreementInd: string
  PrimaryResidenceCountyNm: string
  ShareHouseholdExpnsWithSpsInd: boolean
  DependentsClaimedCnt: number
  Age65OrOlderHouseholdCnt: number
  PrimaryNetIncomePerPayPrdAmt: number
  SpouseNetIncomePerPayPrdAmt: number
  VehicleCnt: number
  CarPaymentCnt: number
  HealthInsuranceInd: boolean
  HealthInsurancePremiumDedInd: boolean
  MthlyHealthInsurancePremiumAmt: number
  CourtOrderedPaymentInd: boolean
  CourtOrderedPaymentDedInd: boolean
  MthlyCourtOrderedPaymentAmt: number
  ChildOrDependentCareExpenseAmt: number
}
// Content model for Form T (Timber)
type IRSFormTType: {
}
// Content model for Form T (Timber) Part I - Acquisitions
type ForestActyAcquisitionsGrpType: {
  NameOfBlockAndTitleOfAcctTxt: string
  PropertyLocationTxt: string
  AcquiredDt: string
  PaidCashAmt: number
  PaidInterestBearingNotesAmt: number
  PaidNonInterestBearingNotesAmt: number
  OtherConsiderationAmt: number
  OtherConsiderationNatureTxt: string
  LegalExpensesAmt: number
  OtherAcquisitionExpensesAmt: number
  TotalCostOrOtherBasisPropAmt: number
}
// Content model for Form T (Timber) Part II - Timber Depletion
type ForestActyTimberDepletionGrpType: {
  NameOfBlockAndTitleOfAcctTxt: string
  LogRuleUsedTxt: string
  TimberEndOfPrecedingTYEstQty: number
  CostRetThruDpltnEndPrecTYAmt: number
  IncreaseOrDecreaseTimberQty: number
  TrnsfrPrmrchTmbrAcctQty: number
  TrnsfrPrmrchTmbrAcctCostAmt: number
  TransfersFromDefrdRforAcctQty: number
  TrnsfrFromDefrdRforAcctCostAmt: number
  TimberAcquiredDuringYearQty: number
  TimberAcquiredDuringYrCostAmt: number
  AdditionToCapitalDurYrCostAmt: number
  TotalEOYBeforeDepletionQty: number
  TotalEOYBeforeDepletionCostAmt: number
  ReturnableOrSlsLossesBssUnitRt: number
  TimberCutDuringYearQty: number
  DepletionForCurrentTaxYearAmt: number
  StandingTimberSoldDuringYrQty: number
  AllowableBasisSaleAmt: number
  LostByFireOrOtherCauseDurYrQty: number
  AllowableBasisOfLossAmt: number
  TotalReductionsDuringYearQty: number
  TotalReductionsDuringYrCostAmt: number
  NetEndOfYearQty: number
  NetValueAtEndOfYearAmt: number
  TimberSoldAsLogsQty: number
  Section631aElectionInd: boolean
  Section631aRevocationInd: boolean
  EffectiveDt: string
}
// Content model for Form T (Timber) Part III - Profit or Loss From Land and Timber Sales
type ForestActyPrftLossTmbrSalesGrpType: {
  NameOfBlockAndTitleOfAcctTxt: string
  PropertyLocationTxt: string
  SaleDt: string
  CashReceivedAmt: number
  InterestBearingNotesRcvdAmt: number
  NonInterestBearingNotesRcvdAmt: number
  OtherConsiderationAmt: number
  OtherConsiderationNatureTxt: string
  TotalReceivedForPropertyAmt: number
  LogRuleUsedTxt: string
  TotalCostOrOtherBasisPropAmt: number
  DirectSaleExpensesAmt: number
  ProfitOrLossAmt: number
}
// Content model for Form T (Timber) Part IV - Reforestation and Timber Stand Activities
type ForestActyReforestationTmbrGrpType: {
  TotalAcresTreatedQty: number
  TotalOfTotalExpendituresAmt: number
  RforExpnssAcreTreatdQty: number
  RforExpnssTotExpendAmt: number
  RforExpnssDedUndSection194bAmt: number
  RforExpnssAmortzUndIRC194aAmt: number
}
// Content model for Form T (Timber) Part V - Land Ownership
type ForestActyLandOwnershipGrpType: {
  NameOfBlockAndTitleOfAcctTxt: string
  AdditionalInformationTxt: string
}
// None
type AllocationOfTotalCostOrOtherBasis1Type: {
}
// None
type AllocationOfTotalCostOrOtherBasis2Type: {
}
// None
type AllocationOfTotalCostOrOtherBasis3Type: {
}
// None
type LandOwnershipInfoType: {
  AcresQty: number
  TotalCostOrOtherBasisAmt: number
  AverageRatePerAcreAmt: number
}
// Content model for Form RRB-1042S
type IRSRRB1042SType: {
  FormId: string
  IncomeTypeCd: string
  PersonNm: string
  ChapterTypeCd: string
  Chapter3StatusCd: string
  Chapter4StatusCd: string
  ClaimNum: string
  PayeeCd: string
  SSN: string
  RecipientChapter3StatusCd: string
  BirthDt: string
  GrossSocSecBnftTier1PaidAmt: number
  SocSecBnftTier1RepaidRRBAmt: number
  NetSocSecBnftTier1PaidAmt: number
  FederalIncomeTaxWithheldAmt: number
  SocSecBnftTier1PaidPrYr1Amt: number
  SocSecBnftTier1PaidPrYr2Amt: number
  SocSecBnftTier1PaidBfrPrYr2Amt: number
  CountryCd: string
  TaxRt: number
  ExemptionCd: string
  TotalMedicarePremiumAmt: number
  WorkersCompensationOffsetAmt: number
}
// Content model for Form SSA-1042S
type IRSSSA1042SType: {
  PersonNm: string
  SSN: string
  SocSecBnftAmt: number
  SocSecBnftDesc: string
  SocSecBnftRepaidSSAAmt: number
  SocSecBnftRepaidSSADesc: string
  NetSocSecBnftAmt: number
  TaxRt: number
  FederalIncomeTaxWithheldAmt: number
  RefundAmt: number
  NetTaxWithheldAmt: number
  ClaimNum: string
}
// Content model for Form W-2
type IRSW2Type: {
  CorrectedW2Ind: string
  EmployeeSSN: string
  EmployerEIN: string
  EmployerNameControlTxt: string
  ControlNum: string
  EmployeeNm: string
  WagesAmt: number
  WithholdingAmt: number
  SocialSecurityWagesAmt: number
  SocialSecurityTaxAmt: number
  MedicareWagesAndTipsAmt: number
  MedicareTaxWithheldAmt: number
  SocialSecurityTipsAmt: number
  AllocatedTipsAmt: number
  W2VerificationCd: string
  DependentCareBenefitsAmt: number
  NonqualifiedPlansAmt: number
  StatutoryEmployeeInd: string
  RetirementPlanInd: string
  ThirdPartySickPayInd: string
  StandardOrNonStandardCd: string
}
// None
type W2StateLocalTaxGrpType: {
}
// Content model for Form W-2G
type IRSW2GType: {
  CorrectedW2GInd: string
  PayerNameControlTxt: string
  PayerTelephoneNum: string
  GamblingReportableWinningAmt: number
  GamblingWinningDt: string
  GamblingWinWagerTypeCd: string
  FederalIncomeTaxWithheldAmt: number
  GamblingWinningTransactionDesc: string
  GamblingWinningEventDesc: string
  GamblingWinFromIdntclWagersAmt: number
  GamblingWinCashierId: string
  RecipientNm: string
  GamblingWinWindowNum: string
  RecipientFirstAdditionalIdNum: string
  RecipientSecondAdditionalIdNum: string
  StandardOrNonStandardCd: string
}
// None
type W2GStateLocalTaxGrpType: {
  StateAbbreviationCd: string
  PayerStateIdNum: string
  GamblingWinningAmt: number
  StateTaxWithheldAmt: number
}
// Content model for 50 year ADS deduction statement
type ADS50YearDeductionStatementType: {
}
// Content model for 50 year ADS deduction info
type ADS50YearDeductionInfoType: {
  MonthAndYearPlacedInServiceDt: string
  BasisForDepreciationAmt: number
  RecoveryPrd: number
  DepreciationConventionCd: string
  DepreciationMethodCd: string
  DepreciationDeductionAmt: number
}
// Content model for 50 year GDS deduction statement
type GDS50YearDeductionStatementType: {
}
// Content model for 50 year GDS deduction info
type GDS50YearDeductionInfoType: {
  MonthAndYearPlacedInServiceDt: string
  BasisForDepreciationAmt: number
  RecoveryPrd: number
  DepreciationConventionCd: string
  DepreciationMethodCd: string
  DepreciationDeductionAmt: number
}
// Content model for adjusted gain or loss schedule
type AdjustedGainLossScheduleType: {
  ExplanationTxt: string
}
// Content model for Allowable SE Expense Explanation Statement
type AllowableSEExpenseExplanationStatementType: {
  ExplanationTxt: string
}
// Content model for amortization election statement
type AmortizationElectionStatementType: {
  ExplanationTxt: string
}
// Content model for charitable contribution schedule
type CharitableContriScheduleType: {
}
// None
type CharitableContributionType: {
  Desc: string
  Amt: number
  Cd: string
}
// Content model for Deductions For ScheduleC or C-EZ Expense Worksheet
type ClergySchCBusinessDedWrkshtType: {
  MinisterSSN: string
  MinisterialTaxFreeIncmPct: number
  BusinessMilesCnt: number
  FgrSchCDedTotalMileageAmt: number
  MealsAndEntertainmentAmt: number
  FgrSchCTotMealsAndEntrmtAmt: number
  FgrSchCDedTotOthExpnsAmt: number
  FgrSchCDedTotalExpensesAmt: number
  FgrSchCDedNondedExpenseAmt: number
  TotalOtherExpensesAmt: number
}
// Content model for Employee Business Expenses Worksheet
type ClergyEmplBusExpenseWrkshtType: {
  MinisterSSN: string
  MinisterialTaxFreeIncmPct: number
  BusinessMilesCnt: number
  DeductibleClergyMileageAmt: number
  FgrFrm2106DedMealsAndEntrmtAmt: number
  FgrFrm2106DedTotOthExpnsAmt: number
  ClergyOtherReimbNotOnW2Amt: number
  ClergyMealsAndEntrmtNotOnW2Amt: number
  TotClergyOtherUnreimExpnsAmt: number
  TotClergyMealsUnreimExpnsAmt: number
  TotalClergyMealsTimesPctAmt: number
  SumTotalClergyExpensesAmt: number
  FgrFrm2106DedNondedExpnsAmt: number
  UnreimEmployeeBusExpnsAmt: number
}
// Content model for Clergy Self Employment Income Worksheet
type ClergySelfEmplmnIncomeWrkshtType: {
  MinisterSSN: string
  WagesAmt: number
  NetProfitOrLossAmt: number
  MinisterSEIncmPrsngAllwncAmt: number
  MinisterSEIncmUtilityAllwncAmt: number
  MinisterSEIncmTotAllwncAmt: number
  MinisterSEIncmTotIncmAllwncAmt: number
  FgrSchCDedNondedExpenseAmt: number
  FgrFrm2106DedTotUnreimExpnsAmt: number
  MinisterSEIncmTotBusNotDedAmt: number
  NetNonFarmProfitLossAmt: number
}
// Content model for Clergy Tax Free Income Worksheet
type ClergyTaxFreeIncomeWorksheetType: {
  MinisterSSN: string
  WagesAmt: number
  GrossReceiptsOrSalesAmt: number
  TotalTaxableMinisterialIncmAmt: number
  TotalTxFreeMinisterialIncmAmt: number
  TotalMinisterialIncomeAmt: number
  MinisterialTaxFreeIncmPct: number
}
// Content model for controlled foreign partnership reporting statement
type ControlledFrgnPrtshpStmtType: {
}
// None
type ControlledForeignPrtshpType: {
  Cat1FilerStatementTxt: string
  FilingRequirementSatisfiedTxt: string
  FilerPersonNm: string
  IRSCenWhereFrm8865MustBeFldTxt: string
}
// Content model for controlled group members statement
type ControlledGroupMembersStmtType: {
  ShortExplanationTxt: string
}
// Controlled Group Member Statement Type
type ControlledGroupMemberStmtType: {
}
// Content model for credits related to other rental activities statement
type CrRltdToOthRentalActyStmtType: {
}
// None
type CrRelatedToOtherRentalActyType: {
  Desc: string
  Amt: number
}
// Content model for credits related to rental real estate activities statement
type CrRltdToRentalREActyStmtType: {
}
// None
type CreditsRltdToRentalREActyType: {
  Desc: string
  Amt: number
}
// Content model for deductions Other Categories Schedule
type DedOtherCategoriesScheduleTyp: {
}
// None
type DeductionsOtherCategoriesType: {
  Desc: string
  Amt: number
}
// Content model for Disposition of Property with Section 179 Deductions Statement
type DisposOfPropWithSect179DedStmtType: {
}
// None
type DisposOfPropWithSect179DedGrpType: {
  Desc: string
  GrossSalesPriceAmt: number
  CostOfSaleAmt: number
  DepreciationAllowedAmt: number
  AcquiredDt: string
  SaleOrExchangeDt: string
  Section179DeductionAmt: number
  YearsTxt: string
  DispositionMethodDesc: string
  InstalReceivedFutureTaxYrsAmt: number
  InstalReceivedPriorTaxYearsAmt: number
  InstalReceivedCurrentTaxYrAmt: number
  SecondDispositionInd: boolean
  SndDisposMore2YrsAftrFirstInd: string
  DispositionDt: string
  FirstDisposSaleExchangeStkInd: string
  SecondDisposInvlntryCnvrtInd: string
  SecondDisposAfterDeathSellrInd: string
  RealizedAmt: number
  FirstYearContractPriceAmt: number
  SmllrRealizedOrContractPrcAmt: number
  TotalPaymentsReceivedAmt: number
  TotalPaymentsRcvdLessPrcAmt: number
  TotPymtPrcTimesGroPrftPctAmt: number
  OrdinaryIncmUndRecaptureRlsAmt: number
  PaymentPriceLessOrdnryIncmAmt: number
  RelatedPartyInstalInfoDesc: string
}
// Content model for distributions of money statement
type DistributionsOfMoneyStatementType: {
}
// None
type DistributionOfMoneyType: {
  AdjBssImmediatelyBfrDistriAmt: number
  DistriDateFairMarketValueAmt: number
}
// Content model for distributions of property other than money statement
type DistriOfPropOtherThanMoneyStmtType: {
  ExplanationTxt: string
}
// Content model for Election of Regulations Section 1.1411-10(g) Flow-Through Entities Statement
type Elect1141110gFlowThruEntStmtType: {
}
// Content model for expenses from other rental activities schedule
type ExpensesOtherRentalActySchType: {
}
// None
type ExpensesOtherRentalActyType: {
  Desc: string
  Amt: number
}
// Content model for FEC Record
type FECRecordType: {
  EmployeeTIN: string
  EmployeeNameControlTxt: string
  EmployeeNm: string
  EmployeeInCareOfNm: string
  WorkPerformedResidingInUSInd: string
  EmployerInCareOfNm: string
  ForeignEIN: string
  ForeignEmployerCompensationAmt: number
  ForeignPensionReceivedAmt: number
  ForeignPensionTaxableAmt: number
}
// Content model for Claim Foreign Conditions Prevented to Earn Waiver
type FrgnErndIncWaiverofTimeReqStmtType: {
  ShortExplanationTxt: string
}
// Content model for foreign gross income at corporate level other categories schedule
type FrgnGroIncmCorpOtherCatSchTyp: {
}
// None
type FrgnGrossIncmCorpOtherCatType: {
  Desc: string
  Amt: number
}
// Content model for foreign gross income at partnership level - other categories schedule
type FrgnGrossAtPrtshpLvlOthCatSchType: {
}
// None
type FrgnGrossAtPrtshpLvlOthCatType: {
  Desc: string
  Amt: number
}
// Content model for Foreign Tax Schedule
type ForeignTaxScheduleType: {
}
// Content model for Foreign Transaction Statement
type ForeignTransactionStatementType: {
}
// None
type ForeignTransactionInfoType: {
  ForeignTransactionDesc: string
  Amt: number
  CreditDesc: string
}
// Content model for Form 1098 difference statement
type Form1098DifferenceStatementType: {
  Desc: string
}
// Content model for Form 1098 Recipient Name And Address Statement
type Form1098RecpntNMAddrStatementType: {
}
// None
type Form1098RecipientNmAddrStmtType: {
  PersonNm: string
}
// Content model for Form 1098 Recipient Name, TIN And Address Statement
type F1098RecpntNmTINAddrStatementType: {
}
// None
type Form1098RecipientNmTINAddrStmt: {
  PersonNm: string
}
// Content model for General Dependency Medium
type GeneralDependencyMediumType: {
  FormLineOrInstructionRefTxt: string
  RegulationReferenceTxt: string
  Desc: string
  AttachmentInformationMedDesc: string
}
// Content model for General Dependency Small
type GeneralDependencySmallType: {
  FormLineOrInstructionRefTxt: string
  RegulationReferenceTxt: string
  Desc: string
  AttachmentInformationSmllDesc: string
}
// Content model for gross income sourced at shareholder level schedule
type GroIncmSourcedAtShrLvlSchType: {
}
// None
type GrossIncmSourcedAtShrLevelType: {
  Desc: string
  Amt: number
  GainAmt: number
  LossAmt: number
}
// Content model for gross receipts installment sales schedule
type GrossReceiptsInstalSalesSchType: {
}
// Content model for gross receipts installment sales info
type GrossReceiptsInstalSalesInfoType: {
}
// None
type InstalSalesType: {
  GrossSalesAmt: number
  CostOfGoodsSoldAmt: number
  GrossProfitAmt: number
  GrossProfitsToGrossSalesPct: number
  CollectedAmt: number
  GrossProfitOnCollectedAmt: number
}
// Content model for income and expenses from other passive rental activities statement
type IncmExpnssPssvRntlActyStmtTyp: {
}
// None
type IncmExpnssOtherPssvRntlActyTyp: {
  Desc: string
  Amt: number
}
// Income Tax Returns Statement
type IncomeTaxReturnsStatementType: {
}
// None
type IncomeTaxReturnsStatementGrpType: {
  FilingRequirementSatisfiedTxt: string
  ServiceCenterWhereRetFiledCd: string
}
// Content model for Installment Method Schedule
type InstallmentMethodScheduleType: {
}
// Reporting Year Amounts
type YearAmtsType: {
  GrossSalesAmt: number
  CostOfGoodsSoldAmt: number
  GrossProfitAmt: number
  GrossProfitsToGrossSalesPct: number
  CollectedAmt: number
  GrossProfitOnCollectedAmt: number
}
// Content model for IRA Distribution Statement
type IRADistributionStatementType: {
  ExplanationTxt: string
}
// Content model for IRS Estimated Payment
type IRSESPaymentType: {
  RoutingTransitNum: string
  BankAccountNum: string
  BankAccountTypeCd: string
  PaymentAmt: number
  EstimatedPaymentDueDt: string
  TaxpayerDaytimePhoneNum: string
}
// Content model for IRS Payment
type IRSPaymentType: {
  RoutingTransitNum: string
  BankAccountNum: string
  BankAccountTypeCd: string
  PaymentAmt: number
  RequestedPaymentDt: string
  TaxpayerDaytimePhoneNum: string
}
// Content model for Itemized Deductions Not Charged Against Books Schedule
type ItemizedDedNotChargedBooksSch2Type: {
}
// Content model for itemized deductions related to portfolio income (loss) statement
type ItemizedDedPrtflIncomeLossStmtType: {
}
// None
type DedRltdToPortfolioIncmLossType: {
  Desc: string
  Amt: number
  PortfolioIncomeCategoryCd: string
}
// Content model for Itemized Expenses Recorded on Books Schedule
type ItemizedExpensesRecOnBooksSch2Type: {
}
// Content model for Itemized Income Not Recorded on Books Schedule
type ItemizedIncomeNotRecOnBooksSch2Type: {
}
// Content model for Itemized Income Recorded on Books Schedule
type ItemizedIncomeRecOnBooksSch2Type: {
}
// Content model for other  assets
type ItemizedOtherAssetsType: {
}
// Content model for other  asset
type ItemizedOtherAssetType: {
}
// Content model for the line item of the Other Asset
type OtherAssetLineItemGrpType: {
  Desc: string
  BeginningAmt: number
  EndingAmt: number
}
// Content model for itemized other credits schedule
type ItemizedOtherCreditsScheduleType: {
}
// None
type ItemizedOtherCreditGrpType: {
  Desc: string
  Amt: number
  OtherCreditCategoryCd: string
}
// Content model for other current assets
type ItemizedOtherCurrentAssetsType: {
}
// Content model for other current asset
type ItemizedOtherCurrentAssetType: {
}
// Content model for the line item of the Other Current Asset
type OtherCurrentAssetLineItemGrpType: {
  Desc: string
  BeginningAmt: number
  EndingAmt: number
}
// Content model for other current Liabilities
type ItemizedOthCurrLiabilitiesType: {
}
// Content model for other current liability
type ItemizedOtherCurrLiabilityType: {
}
// Content model for the line item of the Other Current Liability
type OtherCurrLiabilityLineItemGrpType: {
  Desc: string
  BeginningAmt: number
  EndingAmt: number
}
// Content model for other deductions schedule
type ItemizedOtherDedSch2Type: {
}
// Content model for other deduction
type ItemizedOtherDeduction2GrpType: {
  Desc: string
  ForeignAmt: number
  Amt: number
}
// Content model for other deductions schedule
type ItemizedOtherDedSch3Type: {
}
// Content model for other deduction
type ItemizedOtherDeduction3GrpType: {
  Desc: string
  ForeignAmt: number
  Amt: number
  Cd: string
}
// Content model for itemized other income(loss) schedule
type ItemizedOtherIncomeLossSchType: {
}
// None
type ItemizedOtherIncomeLossGrpType: {
  Desc: string
  Amt: number
}
// Content model for other investments
type ItemizedOtherInvestmentsSchType: {
}
// Content model for other investment
type ItemizedOtherInvestmentType: {
}
// Content model for the line item of the Other Investments
type OtherInvestmentsLineItemGrpType: {
  Desc: string
  BeginningAmt: number
  EndingAmt: number
}
// Content model for other liabilities
type ItemizedOtherLiabilitiesType: {
}
// Content model for other liability
type ItemizedOtherLiabilityType: {
}
// Content model for the line item of the Other Liability
type OtherLiabilityLineItemGrpType: {
  Desc: string
  BeginningAmt: number
  EndingAmt: number
}
// Content model for Itemized Total Foreign Taxes Schedule
type ItemizedTotalForeignTaxesSchType: {
}
// None
type ItemizedTotalForeignTaxesGrpType: {
  Desc: string
  ForeignAmt: number
  Amt: number
  Dt: string
  ExchangeRt: number
}
// Content model for low income housing credit statement
type LowIncomeHousingCreditStmtType: {
}
// None
type LowIncomeHousingCreditGrpType: {
  LowIncomeHousingCreditLineDesc: string
  CreditTypeTxt: string
  Amt: number
}
// Content model for mixed straddle account election statement
type MixedStraddleAccountElectionStatementType: {
  ExplanationTxt: string
}
// Content model for Name Change Statement
type NameChangeStatementType: {
}
// None
type NameChangeStmtType: {
  FormerNm: string
  SSN: string
  Desc: string
}
// Content model for net income loss at-risk real estate activities schedule
type NetIncomeAtRiskREActySchType: {
}
// None
type NetIncomeLossAtRiskREActyType: {
  Desc: string
  Amt: number
}
// Content model for Nominee Distribution Statement
type NomineeDistributionStatementType: {
}
// None
type NomineeDistributionStmtType: {
  ReceivedFullAmt: number
  NomineeReceivedAmt: number
}
// Content model for nonconventional source fuel credit schedule
type NonconventionalSourceFuelCrSchType: {
  ComputationDesc: string
}
// Content model for Nonemployee Compensation in Excess of 1099 MISC Statement
type NonemplCompInExOf1099MISCStmtType: {
  Desc: string
}
// Content model for Organization Chart Statement
type OrganizationChartStatementType: {
}
// Content model for Organization Chart Statement
type OrganizationChartType: {
  PlacementOrPositionTxt: string
  OwnershipPct: number
  TaxClassificationTxt: string
  OrganizationCountryCd: {http://www.irs.gov/efile}AllCountriesType
}
// Content model for other adjustments and tax preference items schedule
type OtherAdjAndTaxPrefItemsSchType: {
  ExplanationTxt: string
}
// Content model for Other Income Type Statement
type OtherIncomeTypeStatementType: {
}
// None
type OtherIncomeTypeStmtType: {
  OtherIncomeAmt: number
}
// Content model for other items and amounts schedule
type OtherItemsAndAmountsScheduleType: {
}
// None
type OtherItemsAndAmountsType: {
  LineNum: string
  Desc: string
  Amt: number
  Cd: string
}
// Content model for other portfolio income/loss statement
type OtherPortfolioIncmLossStmtType: {
}
// None
type OtherPortfolioIncomeLossGrpType: {
  Desc: string
  Amt: number
}
// Content model for Other Recapture Credits Schedule
type OtherRecaptureCreditsScheduleType: {
}
// None
type OtherRecaptureCreditsInfoType: {
  CreditTypeTxt: string
  Amt: number
  CreditDesc: string
}
// Content model for Other Withholding Statment
type OtherWithholdingStatementType: {
}
// None
type OtherWithholdingStmtType: {
  WithholdingCd: string
  WithholdingAmt: number
}
// Content model for Overseas Extension Statement
type OverseasExtensionStatementType: {
  ExplanationTxt: string
}
// Content model fo rOverpayment Apply to Spouse Estimated Tax Statement
type OvpmtAppToSpouseEstTxStmtType: {
  OvpmtAppToEstTxExplanationTxt: string
  OvpmtAppToEstTxOfSpouseSSN: string
}
// Content model for owned 10% interest in foreign partnership statement
type Owned10PctIntFrgnPrtshpStmtTyp: {
}
// None
type Owned10PctForeignPrtshpType: {
  FormsFiledTxt: string
  TaxYearBeginDt: string
  TaxYearEndDt: string
}
// Content model for Estimated Tax Payment Statement
type PaidJointTYEstTaxExplnStmtType: {
  ExplanationTxt: string
}
// Content model for passive activity other income(loss) schedule
type PssvActyOtherIncmLossSchType: {
}
// None
type PssvActyOtherIncomeLossType: {
  Desc: string
  Amt: number
}
// Content model for passive activity section 1231 gain/loss statement
type PssvActySect1231GainStmtType: {
}
// None
type PssvActySect1231GainLossType: {
  Desc: string
  Amt: number
}
// Content model for Penalties Statement
type PenaltiesStatementType: {
  ExplanationTxt: string
}
// Content model for qualified rehabilitation expenditures statement
type QualifiedRehbltExpendStmtType: {
}
// None
type QualifiedRehbltExpenditureType: {
  Desc: string
  Amt: number
}
// Content model for Recapture Statement
type RecaptureStatementType: {
}
// None
type RecaptureStmtType: {
  RecaptureLiteralCd: string
  RecaptureAmt: number
}
// Content model for reduction in taxes schedule
type ReductionInTaxesScheduleType: {
}
// None
type ReductionInTaxesType: {
  Desc: string
  Amt: number
}
// Content model for REMIC statement
type REMICStatementType: {
}
// None
type REMICStmtGrpType: {
  TaxableIncomeAmt: number
  ExcessInclusionAmt: number
  Section212ExpensesAmt: number
}
// Content model for Section 1202 Exclusion Statement
type Section1202ExclusionStatementType: {
}
// None
type Section1202ExclusionGrpType: {
  Desc: string
  Amt: number
  BoughtDt: string
  SoldDt: string
}
// Section 168(f)(1) property explanation statement
type Section168f1PropertyStatementType: {
}
// Section 168(f)(1) property explanation info
type Section168f1PropertyInfoType: {
  PropertyDesc: string
  BasisForDepreciationAmt: number
  MethodDesc: string
}
// Content model for section 179 zone enterprise property statement
type Sect179ZoneEntrprPropStmtType: {
}
// None
type Sect179ZoneEntrprPropertyType: {
  Desc: string
  Amt: number
}
// Content model for Section 42(j)(5) Schedule
type Section42j5ScheduleType: {
}
// None
type Section42j5InfoType: {
  CreditTypeTxt: string
  IncomeAmt: number
}
// None
type Section481aAdjustmentStatementType: {
  ShortExplanationTxt: string
}
// Content model for Section 59(e)(2) Expenditure Statement
type Section59e2ExpenditureStmtType: {
}
// None
type Section59e2ExpenditureType: {
  PropertyInformationTxt: string
  ExpenditureTyp: string
  ExpenditureMonthDt: string
  Amt: number
}
// Content model for Small Ethanol Producer Credit Statement
type SmallEthanolProducerCreditStmtType: {
}
// None
type SmallEthanolProducerCrInfoGrpType: {
  Amt: number
  AllocatedToPartnerGalsQty: number
  PartnersProRataShareGalsQty: number
}
// Content model for Special Depreciation Allowance Election Out Statement 
type SpclDeprecAllwncElectOutStmtType: {
  ElectionExplanationTxt: string
}
// Content model for Spouse Signature Statement
type SpouseSignatureStatementType: {
  ExplanationTxt: string
}
// Content model for Supplemental Information Statement
type SupplementalInfoStatementType: {
}
// None
type SupplementalInformationGrpType: {
  TitleTxt: string
  SupplementalInfoTyp: string
  Amt: number
  Desc: string
  ExplanationTxt: string
  Cd: string
  RatioRt: number
}
// Content model for Unrealized Appreciation Of Collectibles Statement
type UnrlzdApprcnCollectiblesStmtType: {
  MediumExplanationTxt: string
}
// Content model for unrecaptured sectiion 1250 gain schedule
type UnrecapturedSection1250GainSchType: {
}
// Content model for US Earned Income Computation Statement
type USEarnedIncomeComputationStmtType: {
  ExplanationTxt: string
}
// Content model for Wages Not Shown Schedule
type WagesNotShownScheduleType: {
}
// None
type WagesNotShownSchType: {
  WagesLiteralCd: string
  WagesNotShownAmt: number
}
// Content model for Basic Adjustment Under Section 367(a)(5) Statement
type BscAdjUnderSect367a5StmtType: {
}
// Content model for basic adjustment under section 367(a)(5) info
type BasicAdjUnderSect367a5InfoGrpType: {
  AssetTransferredInExchangeDesc: string
  CondSect367a5RegsBeenStsfdInd: boolean
  AdjustmentMadeSect367a5Desc: string
}
// Content model for exchange gain recognized under Sec 987 transfer statement
type ExchGainRcgnzSect987TrnsfrStmtType: {
}
// None
type ExchGainRcgnzSect987TrnsfrInfoType: {
  PropertyTransferredDesc: string
  ExchangeGainRecognizedAmt: number
}
// Content model for gain recognized under sec 904(f)(3) on transfer statement
type GainRcgnzSect904f3TrnsfrStmtType: {
}
// None
type GainRcgnzSect904f3TrnsfrInfoType: {
  PropertyTransferredDesc: string
  GainRecognizedOnTransferAmt: number
}
// Content model for gain recognized under sec 904(f)(5)(F) on transfer statement
type GainRcgnzSect904f5FTrnsfrStmtType: {
}
// None
type GainRcgnzSect904f5FTrnsfrInfoType: {
  PropertyTransferredDesc: string
  GainRecognizedOnTransferAmt: number
}
// Content model for recapture under Sec 1503(d) on transfer statement
type RecaptureSect1503dTrnsfrStmtType: {
}
// None
type RecaptureSect1503dTrnsfrInfoType: {
  PropertyTransferredDesc: string
  RecaptureAmt: number
}
// Content model for IRS 965 Payment
type IRS965PaymentType: {
  RoutingTransitNum: string
  BankAccountNum: string
  BankAccountTypeCd: string
  PaymentAmt: number
  RequestedPaymentDt: string
  TaxpayerDaytimePhoneNum: string
}
// Content model for Net Adjustment Transfer Statement
type NetAdjustmentTransferStmtType: {
  NetAdjustmentTransferDesc: string
}
// Content model for Multiple Transferee Statement
type MultipleTransfereeStmtType: {
}
// Adjustment Not Included in Income Over 3 Years Explanation
type AdjNotIncldInIncmOver3YrsExplnType: {
  ExplanationTxt: string
}
// Beginning Inventory Not Valued at Cost Explanation
type InventoryNotValuedAtCostExplnType: {
  ExplanationTxt: string
}
// BLS Price Index Representative Statement
type BLSPriceIndexRepMonthType: {
}
// None
type BLSPriceIndexRepMonthStmtInfoType: {
  ShortExplanationTxt: string
}
// Cost System Used Statement
type CostSystemUsedStatementType: {
  ShortExplanationTxt: string
}
// Credit Report Issued Statement
type CreditReportIssuedStatementType: {
}
// None
type RecipientUsedGrpType: {
  IssuanceDt: string
  InventoryMethodTxt: string
}
// Detailed Analysis of All Inventories Statement
type DetailedAnlysOfInventoriesStmtType: {
  MediumExplanationTxt: string
}
// Goods Acquired at Below-Market Prices Statement
type GoodsAcqAtBelowMrktPricesStmtType: {
  ShortExplanationTxt: string
}
// Goods Not Treated as Acquired Explanation
type GoodsNotTreatedAsAcquiredExplnType: {
  ExplanationTxt: string
}
// LIFO Inventory Method Not Used For Goods Statement
type LIFOInvntryMthdNotUsedGoodStmtType: {
  MediumExplanationTxt: string
}
// Content model for Inventory Method Used For Prior Tax Year Statement
type InvntryMthdUsedForPrTYStmtType: {
}
// None
type InvntryMthdUsedGrpType: {
  InventoryMethodTxt: string
  Desc: string
}
// Inventory Not Taken at Actual Cost Explanation
type InvntryNotTakenAtActlCostExplnType: {
  ExplanationTxt: string
}
// LIFO Computation Method for Dollar-Value Pooling Attachment
type LIFOCmptMthdForValuePoolingAttType: {
  ExplanationTxt: string
}
// LIFO Inventory Method Used Before Statement
type LIFOInventoryMethodUsedBfrStmtType: {
  ShortExplanationTxt: string
}
// Method of Defining Items Statement
type MethodOfDefiningItemsStatementType: {
  ExplanationTxt: string
}
// Opening and Closing Goods Comparison Statement
type OpngAndClsGoodsComparisonStmtType: {
}
// None
type TypeCategoryUsedGrpType: {
  CategoryTypeTxt: string
  Desc: string
  UnitOfMeasureDesc: string
}
// Other Dollar Value Method Used Explanation Statement
type OtherDollarValueMthdUsedExplnType: {
  ShortExplanationTxt: string
}
// Other Goods Inventory And LIFO Methods Used Statement
type OthGdsInvntryAndLIFOMthdStmtType: {
  OthGdsInvntryAndLIFOMthdTxt: string
}
// Other Method Used Explanation
type OtherMethodUsedExplanationType: {
  ShortExplanationTxt: string
}
// Other Table PPI Detailed Report Statement
type OtherTablePPIDetailedRptStmtType: {
  ShortExplanationTxt: string
}
// Pooling Method Statement
type PoolingMethodStatementType: {
  ExplanationTxt: string
}
// Statement In Lieu Of Form 970
type StatementInLieuOfForm970Type: {
  ExplanationTxt: string
}
// Describing Transactions Under Section 1081 Statement
type DescribingTransUndSect1081StmtType: {
  ShortExplanationTxt: string
}
// Election to reduce the basis of depreciable property under Internal Revenue Code Section 1017
type RdcBssOfDeprecPropUndIRC1017Type: {
  ShortExplanationTxt: string
}
// Request for variation from the general rule, Section 1082(a)(2) Statement
type ReqVariationFromSect1082a2StmtType: {
  ShortExplanationTxt: string
}
// Content model for Backup Withholding from Schedules K-1 Statement
type BackupWhSchedulesK1StatementType: {
  TotalAmt: number
}
// Content model for Chapter 11 Bankruptcy Statement
type Chapter11BankruptcyStatementType: {
  ExplanationTxt: string
}
// Content model for Net Operating Loss Carryforward Deduction Statement
type NOLCarryforwardDedStatementType: {
  ShortExplanationTxt: string
}
// Content model for Non-W2 Disability Payment Statement
type NonW2DisabilityPaymentStmtType: {
  ExplanationTxt: string
}
// Content model for Other Adjustments Statement
type OtherAdjustmentsStatementType: {
}
// None
type OtherAdjustmentsStmtType: {
  OtherAdjustmentsAmt: number
}
// Content model for Other Tax Statement
type OtherTaxStatementType: {
}
// None
type OtherTaxStmtType: {
  OtherTaxAmt: number
}
// Content model for Section 962 Election Explanation Statement
type Section962ElectionStmtType: {
  ShortExplanationTxt: string
}
// Content model for other deductible tax statement
type OtherDeductibleTaxStmtType: {
}
// Content model for other expenses statement
type OtherExpensesStatementType: {
}
// Content model for miscellaneous deductions statement
type OtherMiscDeductionsStmtType: {
}
// None
type MiscellaneousDeductionDetailType: {
  MiscellaneousDeductionTypeDesc: string
  MiscellaneousDeductionAmt: number
}
// Content model for unreimbursed expenses
type UnreimbursedExpenseStmtType: {
}
// Content model for Beginning Of Year Inventory Difference Statement
type BeginningOfYrInvntryDiffStmtType: {
  Desc: string
}
// Content model for Change In Valuations Statement
type ChangeInValuationsStatementType: {
  Desc: string
}
// Content model for Other Method Used To Value Closing Inventory Statement
type OthMthdUsedToVlClsInvntryStmtType: {
  Desc: string
}
// Content model for Nominee Capital Gains Statement
type NomineeCapitalGainsStmtType: {
  MediumExplanationTxt: string
}
// Content model for Commodity Credit Corporation Loan Detail Accrual Method Statement
type CCCLoanDetailAccrualMethodStmtType: {
}
// None
type CCCLoanDetailAccrualMethodType: {
  LoanDesc: string
  LoanAmt: number
}
// Content model for Commodity Credit Corporation Loan Detail Cash Method Statement
type CCCLoanDetailCashMethodStmtType: {
}
// None
type CCCLoanDetailCashMethodType: {
  LoanDesc: string
  LoanAmt: number
}
// Content model for Explanation of Additional Interest Deduction Statement
type ExplnOfAddnlInterestDedStmtType: {
}
// None
type ExplanationAddnlIntDedGrpType: {
  Desc: string
  Amt: number
}
// Content model for Form 1098 Recipients Statement
type Form1098RecipientsStatementType: {
}
// None
type FormRecipientGrpType: {
}
// Content model for Postponement Of Crop Insurance and Disaster Payments Statement
type PostponementCropInsDsstrStmtType: {
  SectionChoiceStatementTxt: string
  NormalBusPracticeStatementTxt: string
}
// None
type DestructionOrDamageInfoType: {
  DestructionOrDamageDt: string
  DestructionOrDamageCauseTxt: string
  DestroyedOrDamagedCropDsc: string
}
// None
type InsurancePaymentsForCropInfoType: {
  DestroyedOrDamagedCropDsc: string
}
// Content model for Cost Basis Statement
type CostBasisStatementType: {
  ExplanationTxt: string
}
// Content model for At-Risk Activities Statement
type AtRiskActivitiesStatementType: {
}
// None
type AtRiskActivitiesGrpType: {
  ActivityExplanationTxt: string
  ShareNonrecourseActivitiesAmt: number
  QualifiedNonRcrsFinancingAmt: number
  OtherRecourseLiabilitiesAmt: number
}
// Content model for foreign gross income sourced at partnership level schedule
type FrgnGroIncmSrcdPrtshpLvlSchTyp: {
  ExplanationTxt: string
}
// Content model for the Foreign Tax Credit Information Schedule
type ForeignTaxCrInformationSchdTyp: {
}
// None
type ForeignTaxCrInformationType: {
  ForeignCountryOrUSPossessionCd: string
  GrossIncomeFromAllSourcesAmt: number
  PassiveAmt: number
  GeneralLimitationAmt: number
  InvestmentInterestExpenseAmt: number
  OtherAmt: number
  Passive2Amt: number
  GeneralLimitation2Amt: number
  TotalForeignTaxesPaidAmt: number
  TotalForeignTaxPaidAccruedAmt: number
}
// Content model for the Gain Eligible For Section 1045 Rollover Stock Not Replaced Schedule
type Gain1045StkNotRplcdSchdType: {
}
// None
type Gain1045StkNotRplcdGrpType: {
  PartnersSharePrtshpsAdjBssAmt: number
  SalesPriceOfStockAmt: number
  StockPurchaseDt: string
  StockSoldDt: string
  PartnershipShareOfGainAmt: number
}
// Content model for the Gain Eligible For Section 1045 Rollover Stock Replaced Schedule
type Gain1045StkRplcdSchdType: {
}
// None
type Gain1045StkRplcdGrpType: {
  PartnersSharePrtshpsAdjBssAmt: number
  SalesPriceOfStockAmt: number
  StockPurchaseDt: string
  StockSoldDt: string
  PartnerDistriShrOfGainSaleAmt: number
  PartnerDistriShrOfGainDefrdAmt: number
  ReplacementStockDistributedDt: string
  PrtnrShrOfPrtshpFMVRplcStkAmt: number
  PrtnrShrPrtshpAdjBssRplcStkAmt: number
}
// Content model for Oil And Gas Activities Statement
type OilAndGasActivitiesStmtType: {
  ExplanationTxt: string
}
// Content model for Other partnership level deductions statement
type OthPrtshpLvlDedStmType: {
  ExplanationTxt: string
}
// Content model for Other Partnership Level Foreign Gross Income Statement
type OthPrtshpLvlFrgnGroIncStmType: {
  ExplanationTxt: string
}
// Content model for Partnership Tax Year Change Statement
type PartnershipTaxYearChangeStmtType: {
  ExplanationTxt: string
}
// Content model for the Partner's Inversion Gain Statement
type PartnersInversionGainStmtType: {
}
// None
type PartnersInversionGainDetailType: {
  IncomeGainTxt: string
  Amt: number
}
// Content model for Qualified Nonrecourse Financing Statement
type QlfyNonrecourseFinancingStmtType: {
  ExplanationTxt: string
}
// Content model for reduction in taxes available for credit statement
type ReductionInTaxesAvlblCrStmtTyp: {
  ExplanationTxt: string
}
// Content model for Miscellaneous Item Statement
type MiscellaneousItemStatementType: {
}
// None
type MiscellaneousItemGrpType: {
  CodeNum: string
  CodeNmTxt: string
  ActivityExplanationTxt: string
  AdditionalInformationTxt: string
  Amt: number
}
// Content model for the Section 1202 Exclusion Statement
type Section1202ExclusionStmt2Type: {
}
// None
type Section1202Exclusion2GrpType: {
  PartnersSharePrtshpsAdjBssAmt: number
  SalesPriceOfStockAmt: number
  StockPurchaseDt: string
  StockSoldDt: string
}
// Content model for total foreign taxes accrued statement
type TotalForeignTaxesAccrtmtType: {
  ExplanationTxt: string
}
// Content model for Alternative Basis Compensation Source Statement
type AltBasisCompSrcStmtType: {
}
// None
type AltBasisCompSourceStmtType: {
  PersonNm: string
  SSN: string
  SpecificIncmOrFringeBnftDesc: string
  AltAllocationBasisDesc: string
  AltAllocationComputationDesc: string
  AltAllocationGeogCmprsnDesc: string
}
// Content model for Election to use Exchange Rate Statement
type ElectionToUseExchRtStmtType: {
  ExplanationTxt: string
}
// Content model for Financial Services Active Financing Income Statement
type FinancialSrvcActFncIncmStmtType: {
}
// Content model for Foreign Audit Explanation Statement
type ForeignAuditExplnStmtType: {
  ExplanationTxt: string
}
// Content model for Foreign Income Related Expenses Statement
type ForeignIncmRltdExpnssStmtType: {
  ExplanationTxt: string
}
// Content model for Foreign Income Net Adjustment Statement
type ForeignIncomeNetAdjStmtType: {
  ExplanationTxt: string
}
// Content model for Foreign Tax Credit Carryback Computation Statement
type ForeignTaxCrCybkCmptStmtType: {
  ExplanationTxt: string
}
// Content model for Foreign Tax Reduction Statement
type ForeignTaxReductionStmtType: {
  ExplanationTxt: string
}
// Content model for Foreign Tax Withheld On Dividends Statement
type ForeignTaxWithheldOnDivStmtTyp: {
  ExplanationTxt: string
}
// Content model for Foreign Tax Withheld On Interest Statement
type ForeignTaxWithheldOnIntStmtTyp: {
  ExplanationTxt: string
}
// Content model for Foreign Tax Withheld On Rents And Royalties Statement
type ForeignTaxWthldOnRntsRyltsType: {
  ExplanationTxt: string
}
// Content model for Other Currency Tax Paid Statement
type OtherCurrencyTaxPaidStmtType: {
  ExplanationTxt: string
}
// Content model for Other Deductions Not Related Statement
type OtherDeductionsNotRltdStmtType: {
  ExplanationTxt: string
}
// Content model for waiver explanation statement
type WaiverExplanationStatementType: {
  ExplanationTxt: string
}
// Content model for CPYE Explanation Statement
type CPYEExplanationStatementType: {
}
// None
type CPYEInfoType: {
  CPYECreditAmt: number
  CPYECreditLiteralCd: string
  CPYESSN: string
  ExplanationTxt: string
}
// Content model for Deductions Allocable To Excluded Income Statment
type DeductionsAllocToExclIncStmtType: {
}
// None
type DeductionsAllcblToExcldIncmGrpType: {
  ExcludableAmt: number
  ComputationDesc: string
}
// Excluding Income In Prior Year Statement
type ExclIncomeInPriorYearStmtType: {
  ShortExplanationTxt: string
  ExcludedIncomeAmt: number
}
// Content model for Foreign Partnership Income Statement
type ForeignPartnershipIncomeStmtType: {
}
// None
type ForeignPartnershipIncomeGrpType: {
  PartnershipOrSCorporationNm: string
  OtherIncomeDesc: string
}
// Noncash Or Non W2 Income Statement
type NoncashOrNonW2IncomeStmtType: {
  LodgingMarketValueExplnTxt: string
  MealsMarketValueExplnTxt: string
  CarMarketValueExplnTxt: string
}
// Content model for Revoke Choice Of Exclusion Statement
type RevokeChoiceOfExclusionStmtType: {
  ShortExplanationTxt: string
}
// Content model for Visa Limit Description Statement
type VisaLimitDescriptionStmtType: {
  ExplanationTxt: string
}
// None
type AffltGroupFilingCnsldtRetStmtType: {
  ShortExplanationTxt: string
}
// None
type AllocnCapitalizationMthdStmtType: {
  ExplanationTxt: string
}
// None
type AppealsFederalCourtExplnStmtType: {
  ExplanationTxt: string
}
// Content model for Applicant Will Not Receive Audit Protection For The Requested Change Statement
type ApplcntNotRcvAudProtectionStmtType: {
  ExplanationTxt: string
}
// None
type ApplicantEligChgMthdAcctStmtType: {
  ExplanationTxt: string
}
// None
type ApplicantsContractsStatementType: {
  ShortExplanationTxt: string
}
// None
type ApplicantsRsnProposedChgStmtType: {
  ShortExplanationTxt: string
}
// None
type ApplcntRcvdAudProtectionStmtType: {
  ExplanationTxt: string
}
// Content model for Application Withdrawn Not Perfected Or Denied Or Consent Agreement Statement
type AppWithdrwNotPerfDndCnsntStmtType: {
  ExplanationTxt: string
}
// Content model for Business Disqualifies From Qualifying For Automatic Consent Info
type BusDisqualifiesAutoCnsntStmtType: {
  ExplantionTxt: string
}
// None
type ChangeLIFOToNonLIFOMethodStmtType: {
  ShortExplanationTxt: string
}
// None
type ChgInAcctMthdOrPrdPast5YrsStmtType: {
  ExplanationTxt: string
}
// Content model for Change in Overall Method Breakdown Statement
type ChgInOverallMthdBreakdownStmtType: {
}
// Content model for Change in Overall Method of Accounting Statement
type ChangeInOverallMthdOfAcctStmtType: {
  MethodUsedToPrepareBalSheet: string
  ExplanationOfDifferencesTxt: string
}
// Content model for Change to Cash Method Statement
type ChangeToCashMethodStatementType: {
}
// Content model for Change to Cash Method Info
type ChangeToCashMethodInfoType: {
  InvntryItemsAndMtrlSupDesc: string
  ApplcntRqrAccrMthdExplnTxt: string
}
// None
type ChangeToIPICMethodStatementType: {
  ExplanationTxt: string
}
// None
type ChangeInValuingInventoriesStmtType: {
  ExplanationTxt: string
}
// Content model for Code Section Under Which Property Is Depreciated or Amortized Statement
type CodeSectPropDeprecOrAmortzStmtType: {
}
// Content model for Code Section Under Which Property Is Depreciated or Amortized Info
type CodeSectPropDeprecOrAmortzInfoType: {
  CodeSectionTxt: string
  AssetClassTxt: string
  AstClSuprtFactsUndPrpsdMthdTxt: string
  DeprecOrAmortzMthdAndCdSectTxt: string
  UsefulLifeRecoveryAmortzPrdTxt: string
  ApplicableConventionCd: string
  SpclDeprecAllowanceExplnTxt: string
  SingleMultGeneralAssetAcctTxt: string
}
// None
type ComputationOfSect481aAdjStmtType: {
  ComputationDesc: string
}
// Content model for Consolidated Group Information Statement
type ConsolidatedGroupInfoStmtType: {
}
// None
type ConsolidatedGroupInfoDetailType: {
}
// None
type CostComparisonOrMethodUsedStmtType: {
  ShortExplanationTxt: string
}
// None
type DeferralMethodAdvancePaymentsType: {
  ExplanationTxt: string
}
// None
type DescOfInvntryGoodsChangedStmtType: {
  Desc: string
}
// None
type DescOfInvntryGoodsNotChgdStmtType: {
  Desc: string
}
// Content model for Description of Property Being Changed Statement
type DescOfPropertyBeingChangedStmtType: {
}
// Content model for Description of Property Being Changed Statement
type DescOfPropertyBeingChgdInfoGrpType: {
  PropertyDesc: string
  PlacedInServiceYr: string
  PropUseTrdBusOrIncmProdActyTxt: string
}
// None
type ExceptionUnderSection460eStmtType: {
  ShortExplanationTxt: string
}
// None
type ExplnPropUndPresentMethodStmtType: {
  ShortExplanationTxt: string
}
// None
type ChgToDepreciateAmortzPropStmtType: {
  ShortExplanationTxt: string
}
// Content model for Income Received or Reported Before it was Earned Statement
type IncmRcvdOrRptBeforeEarnedStmtType: {
}
// None
type IncomeReceivedOrRptBfrEarnGrpType: {
  Desc: string
  LegalBasisForThePrpsdMthdTxt: string
}
// None
type InvntryValuationMthdStatementType: {
  ExplanationTxt: string
}
// None
type LegalBasisForChangeStatementType: {
  ExplanationTxt: string
}
// Content model for LIFO Inventory Other Than Cost Statement
type LIFOInventoryOtherThanCostStmtType: {
  ShortExplanationTxt: string
}
// None
type OtherDirectAndIndirectCostsAttType: {
  ShortExplanationTxt: string
}
// None
type LongTermContractsStatementType: {
  ShortExplanationTxt: string
}
// None
type LTManufacturingContractsStmtType: {
  ShortExplanationTxt: string
}
// Content model for Manufacturing Proposed Pool Statement
type ManufacturingProposedPoolStmtType: {
  ShortExplanationTxt: string
}
// None
type MfrGoodsSoldOrDistributedStmtType: {
  ShortExplanationTxt: string
}
// None
type MthdAllocnNotSect263Aor460StmtType: {
  ExplanationTxt: string
}
// None
type NonAutomaticChgReqProcStmtType: {
  ExplanationTxt: string
}
// None
type OtherAmountsStatementType: {
  ExplanationTxt: string
}
// None
type OtherCostsNotReqrToBeAllocAttType: {
  ShortExplanationTxt: string
}
// None
type OtherIdAndValuationMethodsStmtType: {
  ShortExplanationTxt: string
}
// Content model for Overall Method of Accounting Attachment
type OverallMethodOfAccountingAttType: {
}
// None
type ItemChangeInfoType: {
  ChangeItemDesc: string
  PresentMethodOfAccountingDesc: string
  ProposedMethodOfAccountingDesc: string
  PresentOverallMethodOfAcctCd: string
}
// Content model for Parent Corporation Information Statement
type ParentCorpInformationStmtType: {
}
// None
type ParentCorpInfoType: {
  TaxYr: string
}
// Content model for Present and Proposed LIFO Methods Statement
type PresentAndProposedLIFOMthdStmtType: {
}
// Content model for Present and Proposed LIFO Methods Info
type PresentAndProposedLIFOMthdInfoType: {
  PresentValuingInvntryMthdDesc: string
  ProposedValuingInvntryMthdDesc: string
  PresentPoolingMethodDesc: string
  ProposedPoolingMethodDesc: string
  PresentPriceDolVlPoolMthdDesc: string
  ProposedPriceDolVlPoolMthdDesc: string
  PresDetermCostEndInvntryDesc: string
  PrpsdDetermCostEndInvntryDesc: string
}
// Content model for Present Method Difference Explanation Statement
type PresentMethodDiffExplnStmtType: {
  ShortExplanationTxt: string
}
// None
type PresentHybridMethodOfAcctAttType: {
  Desc: string
}
// Content model for Private Letter Ruling, Change in Accounting Method or Period, Technical Advice Request Statement
type PrvtLtrRlngAcctMthdChgTechStmtType: {
}
// None
type RequestInfoType: {
  RequestTypeCd: string
  SpecificIssueTxt: string
}
// Content model for Proposed Change in Pooling Inventories Statement
type PrpsdChgPoolingInventoriesStmtType: {
}
// Content model for Proposed Change in Pooling Inventories Info
type PrpsdChgPoolingInventoriesInfoType: {
  PresentUseDollarVlPoolUsedDesc: string
  PresentUseBaseYr: string
  ProposedUseDolVlPoolUsedDesc: string
  ProposedUseBaseYr: string
}
// Content model for Proposed Change Not For LIFO Inventory Statement
type PrpsdChgNotForLIFOInvntryStmtType: {
  ShortExplanationTxt: string
}
// Content model for Proposed Change Not For LIFO Pools Statement
type PrpsdChgNotForLIFOPoolsStmtType: {
  ShortExplanationTxt: string
}
// None
type ProposedHybridMethodOfAcctAttType: {
  Desc: string
}
// Content model for Proposed Natural Business Unit Statement
type ProposedNaturalBusUnitStmtType: {
}
// Content model for Proposed Natural Business Unit Info
type ProposedNaturalBusUnitInfoType: {
  ApplicantProductDesc: string
  ProcessTypeAndRawMaterialTxt: string
  SeparateFacilityReasonsTxt: string
  TaxpayerNaturalBusinessDivDesc: string
  InvntryItemsPrchsHeldResaleTxt: string
  AllItemsValueStatementTxt: string
  ItemsSoldOrTransferredTxt: string
}
// Content model for Reduced User Fee Statement
type ReducedUserFeeStatementType: {
}
// None
type ReducedUserFeeInfoType: {
  Section1507RevProc991Ind: boolean
  UserFeeSubmittedAmt: number
  Section481aAdjustmentAmt: number
  PresentMethodUsedYearCnt: number
}
// Content model for Request to Defer Advance Payment Under Reg. Sect 1.451-5 Statement
type ReqToDeferUndRegSect14515StmtType: {
  ExplanationTxt: string
}
// None
type RequireUseCutOffBasisStatementType: {
  ExplanationTxt: string
}
// None
type TradeOrBusinessStatementType: {
  Desc: string
}
// None
type UnableToFurnishCopyOf970StmtType: {
  ShortExplanationTxt: string
}
// None
type UseOfProposedMethodOfAcctStmtType: {
  ShortExplanationTxt: string
}
// Content model for Wholesaling or Retailing Goods Proposed Number of Pools Statement
type WholesaleRetailPrpsdPoolsStmtType: {
  ShortExplanationTxt: string
}
// Content model for Certified Historic Structures Schedule
type CertifiedHistoricStrctrSchType: {
}
// Certified Historic Structure Type
type CertifiedHistoricStructureType: {
  CertHistoricStructureCrAmt: number
  NPSProjectNum: string
  NPSApprovalDt: string
  RehabilitationPeriodBeginDt: string
  RehabilitationPeriodEndDt: string
  AdjustedBasisOfBuildingAmt: number
  QlfyRehbltExpendIncurredAmt: number
  ExplanationTxt: string
  PriorYearCreditDt: string
}
// Content model for Multiple Lessee Property Statement
type MultiLesseePropStmtType: {
}
// Multiple Lessee Property Type
type MultipleLesseePropertyType: {
  LessorNm: string
  PropertyDesc: string
  TreatedAsAcquiredPropertyAmt: number
}
// Content model for Other Certified Historic Structures Schedule
type OtherCertHistoricStructuresSchType: {
}
// Other Certified Historic Structures Type
type OtherCertHistoricStructuresType: {
  OtherCertifiedHistStrctrCrAmt: number
  NPSProjectNum: string
  NPSApprovalDt: string
  RehabilitationPeriodBeginDt: string
  RehabilitationPeriodEndDt: string
  AdjustedBasisOfBuildingAmt: number
  QlfyRehbltExpendIncurredAmt: number
  ExplanationTxt: string
  PriorYearCreditDt: string
}
// Content model for Pre 1936 Buildings Schedule
type Pre1936BuildingsScheduleType: {
}
// Pre 1936 Building Credits Group Type
type Pre1936BuildingCreditsGrpType: {
  Pre1936BuildingCreditAmt: number
  RehabilitationPeriodBeginDt: string
  RehabilitationPeriodEndDt: string
  AdjustedBasisOfBuildingAmt: number
  QlfyRehbltExpendIncurredAmt: number
}
// Rehabilitation Credit Claimed in Prior Year Explanation
type RehabilitationCrExplanationType: {
  ShortExplanationTxt: string
}
// Section 1.48-12(b)(2)(viii) Adjusted Basis of Building Statement
type Sect14812b2viiiAdjBssBldgStmtType: {
  ShortExplanationTxt: string
}
// Carryforward of Genereal Business or ESOP Credit Computation
type CarryforwardGeneralBusinessCrType: {
  CreditIdentificationTxt: string
  CreditOriginatedTaxYr: string
  CreditAmt: number
  CreditAllowedForYrAmt: number
}
// None
type CarryforwardCarrybackType: {
  CarryYr: string
  CarryAllowedAmt: number
}
// General Business Credit Computation Statement
type GenBusinessCreditComputationType: {
  ShortExplanationTxt: string
}
// Content model for biodiesel reseller statement
type BiodieselResellerStatementType: {
}
// None
type CertForBiodieselResellerType: {
  CertificateIdentificationNum: string
  TotalBiodieselGallonsQty: number
  TotalGallonsClmSch3Frm8849Qty: number
  TotalGallonsClmSchCFrm720Qty: number
}
// Content model for diesel water fuel emulsion blending statement
type DslWaterFuelEmulsionBlndgStmtType: {
  ShortExplanationTxt: string
}
// Content model for evidence of dyed diesel fuel sold explanation statement
type EvidenceOfDyedDieselFuelSoldStatementType: {
  ExplanationTxt: string
}
// Content model for evidence of dyed diesel fuel explanation statement
type EvidenceOfDyedDieselFuelStatementType: {
  ExplanationTxt: string
}
// Content model for evidence of dyed kerosene sold explanation statement
type EvidenceOfDyedKeroseneSoldStatementType: {
  ExplanationTxt: string
}
// Content model for evidence of dyed kerosene explanation statement
type EvidenceOfDyedKeroseneStatementType: {
  ExplanationTxt: string
}
// Content model for Model O and Model S certificate statement
type ModelOModelSCertificateStmtType: {
}
// None
type CertForModelOAndModelSType: {
  CertificateIdentificationNum: string
  TotBiodieselOrRnwblDslGalsQty: number
  TotalGallonsClmSch3Frm8849Qty: number
  TotalGallonsClmSchCFrm720Qty: number
}
// Content model for nontaxable use of fuels/credit card users statement
type NontxUseFuelsCrCardUsersStmtType: {
}
// None
type NontaxableUseUsersStmtType: {
  ShortExplanationTxt: string
  LineNum: string
  CreditRt: number
}
// Content model for to whom diesel fuel sold statement
type ToWhomDieselFuelSoldStatementType: {
}
// Content model for to whom kerosene fuel sold statement
type ToWhomKeroseneFuelSoldStatementType: {
}
// Recapture Tax from Property with Increase in Nonqualified Nonrecourse Financing
type QlfyThrputicDiscvProjectCrStmtType: {
  ShortExplanationTxt: string
}
// Deductible Loss Computation Statement
type DeductibleLossCmptStmtType: {
  ExplanationTxt: string
}
// Original Or Amended Return Statement
type OriginalOrAmendedRtnStmtType: {
  ExplanationTxt: string
}
// Content model for Unexcluded Excess Gain Statement
type UnexcludedExcessGainStmtType: {
}
// None
type UnexcludedExcessGainType: {
  FullInsuranceReimbursementAmt: number
  InsuranceExcessGainExclAmt: number
}
// Content model for Securities or Commodities Held by a Trader – Mark-To-Market Election
type SecOrCommoditiesHeldByTraderType: {
}
// Content model for a security or commodity held and marked to market by the end of the year.
type SecurityOrCommodityHeldType: {
  PropertyDesc: string
  SoldDt: string
  GrossSalesPriceAmt: number
  DepreciationAllowedAmt: number
  CostOrOtherBasisAmt: number
  GainOrLossAmt: number
}
// Content model for Small Business Investment Company Stock Statement
type SmallBusInvstCompanyStockStmtType: {
}
// Content model for a small business investment company stock statement
type SmallBusinessInvstCompanyStockType: {
  BusinessNameLine1Txt: string
  ReasonTheStockIsWorthlessTxt: string
  StockBecameWorthlessDt: string
}
// GUAM CNMI Other Deductions From 1040 Statement
type GUAMCNMIOtherDedFrom1040StmtType: {
}
// GUAM CNMI Other Income Statement
type GUAMCNMIOtherIncomeStatementType: {
}
// Content model for Waiver of Tax on Excess Accumulation in Qualified Retirement Plans Statement
type WaiveTaxOnExcessAccumQRPType: {
  ExplanationTxt: string
}
// Category 3 Filer Statement
type Category3FilerStatementType: {
}
// Category 3 Filer Statement Info
type Category3FilerInfoType: {
  IndebtednessAmt: number
  IndebtednessTypeDesc: string
  SharesCnt: number
}
// CFC Questions Statement
type CFCQuestionsStatementType: {
}
// None
type CFCQuestionsDetailGrpType: {
  CFCLiteralCd: string
  Desc: string
  Amt: number
}
// Earnings and Profits Other Adjustments Statement
type EarnAndProfitsOtherAdjStmtType: {
}
// Expatriated Foreign Subsidiary Statement
type ExpatriatedFrgnSubsidiaryStmtType: {
}
// None
type ExpatriatedFrgnSubsidiaryGrpType: {
  RelationshipDescriptionTxt: string
}
// Other Assets Statement
type ExplnOfBlockedIncomeStmtType: {
  ExplanationTxt: string
}
// Investment in Subsidiaries Statement
type InvstInSubsidiariesStmtType: {
}
// None
type InvstInSubsidiariesItemType: {
  Desc: string
  BeginningAmt: number
  EndingAmt: number
}
// Name Change Explanation
type NameChangeExplanationType: {
  ShortExplanationTxt: string
}
// Other Income Statement
type OtherIncomeForm5471StatementType: {
}
// Owns Foreign Entities Statement
type OwnsForeignEntitiesStatementType: {
}
// Owns Foreign Partnership Statement
type OwnsForeignPartnershipStmtType: {
}
// Paid-in or Capital Surplus Reconciliation Statement
type PdInOrCapSurplusRecnclStmtType: {
}
// None
type PdInOrCapSurplusRecnclItemGrpType: {
  Desc: string
  BeginningAmt: number
  EndingAmt: number
}
// Person Meeting Filing Requirements Statement
type PersonMeetingFilingRqrStmtType: {
}
// Balance at beginning of year explanation statement
type BalanceAtBOYExplanationStmtType: {
  ExplanationTxt: string
}
// EP Other Adjustment Statementt
type EPOtherAdjustmentStatementType: {
}
// None
type EPOtherAdjustmentGrpType: {
  FormLineOrInstructionRefTxt: string
  OtherAdjustmentsDesc: string
  OtherAdjustmentsAmt: number
}
// Content model for statement if return filed for prior three years
type RetFiledForPrior3YearsStmtType: {
}
// None
type RetFiledForPriorYearType: {
  Yr: string
  TaxableIncomeOrNetLossAmt: number
  USIncomeTaxPaidAmt: number
}
// Content model for Statement if return is required because shareholders became U.S. person
type ShBecameUSPersonStmtType: {
}
// None
type ShareholderBecameUSPersonGrpType: {
  ShareholderPersonNm: string
  Dt: string
}
// Boycott Agreements Statement
type BoycottAgreementsStatementType: {
  LongExplanationTxt: string
}
// Boycott Requests Statement
type BoycottRequestsStatementType: {
  LongExplanationTxt: string
}
// Deduction Differentiation Statement Type
type DecutionDiffentiationStmtType: {
  ExplanationTxt: string
}
// Content model for Form 4797 Gains or Losses For At-Risk Limitations Statement
type Form4797GainsOrLossesForAtRiskLmtType: {
}
// Content model for Form 4797 Gains or Losses For At-Risk Limitations Repeating Group
type Form4797AtRiskLimitationsStmtType: {
  Desc: string
  Amt: number
}
// Content model for Other Form or Schedule Gains or Losses For At-Risk Limitations Statement
type OtherFormOrSchGainsOrLossesForAtRiskLmtType: {
}
// Content model for Other Form or Schedule Gains or Losses For At-Risk Limitations Repeating Group
type OtherFormAtRiskLimitationsStmtType: {
  Desc: string
  Amt: number
}
// Content model for Schedule D Gains or Losses For At-Risk Limitations Statement
type SchDGainsOrLossesForAtRiskLmtType: {
}
// Content model for Schedule D Gains or Losses For At-Risk Limitations Repeating Group
type SchDAtRiskLimitationsStmtType: {
  Desc: string
  Amt: number
}
// Content model for Description of Other Refund Statement
type DescriptionOfOtherRefundStmtType: {
}
// None
type OtherRefundGrpType: {
  OtherRefundDesc: string
  OtherRefundAmt: number
}
// Content model for computation of gain schedule
type ComputationOfGainScheduleType: {
  ShortExplanationTxt: string
}
// Content model for explanation of disposition not to avoid tax statement
type ExplnDisposNotAvoidTaxStmtType: {
  ShortExplanationTxt: string
}
// Content model for Small Ethanol Producer Credit Election
type SmallEthanolProducerCrElectionType: {
}
// None
type SmallEthanolProducerCrElectType: {
  EthanolGallonsQty: number
  CooperativeClaimedGallonsQty: number
  QualifiedEthanolFuelProdQty: number
}
// Capitalized Expenses/Deduction Schedule
type CapExpensesDedAmountsSchType: {
}
// Members of Controlled Group Statement
type MembersOfControlledGroupStmtType: {
  ExplanationTxt: string
}
// Content model for explanation of Form 1099-B adjustments schedule
type ExplanationOfForm1099BAdjSchType: {
}
// Content model for Form 1099-B adjustment information
type Form1099BAdjustmentsInfoType: {
  Desc: string
  Amt: number
}
// Content model for list of foreign currency contracts statement
type ListOfForeignCurContractsStmtType: {
}
// None
type ForeignCurrencyContractInfoType: {
  ContractsNm: string
  ElectionTypeTxt: string
  GainOrLossAmt: number
  FormLineOrInstructionRefTxt: string
}
// Content model for short/long term gains schedule
type ShortLongTermGainsScheduleType: {
}
// Content model for short/long term gain info
type ShortLongTermGainInfoType: {
  ContractsNm: string
  Desc: string
  HoldingPeriodDesc: string
  ShortTermGainsAmt: number
  LongTermGainsAmt: number
}
// Content model for short/long term losses schedule
type ShortLongTermLossesScheduleType: {
}
// Content model for short/long term loss info
type ShortLongTermLossInfoType: {
  ContractsNm: string
  Desc: string
  HoldingPeriodDesc: string
  ShortTermLossesAmt: number
  LongTermLossesAmt: number
}
// Content model for straddles and components schedule
type StraddlesAndComponentsScheduleType: {
}
// Content model for straddle and component info
type StraddleAndComponentGrpType: {
  TypeOfStraddleDesc: string
  ComponentDesc: string
  GainOrLossAmt: number
}
// Deductions Taken under Section 170 Statement
type DeductionsTakenUnderSection170StmtType: {
  ShortExplanationTxt: string
}
// Donee's Signature Unavailable Statement
type DoneesSignatureUnavailableStmtType: {
  ShortExplanationTxt: string
}
// Fair Market Value Statement
type FairMarketValueStatementType: {
  ShortExplanationTxt: string
}
// Qualified Conservation Contribution Statement
type QualifiedConservationContributionStmtType: {
  ShortExplanationTxt: string
}
// Reasonable Cause Statement
type ReasonableCauseStatementType: {
  ShortExplanationTxt: string
}
// None
type RestrictedUseStatementType: {
}
// None
type RestrictedUseAgreementDetailType: {
  ExplanationTxt: string
}
// None
type ContemporaneousWrittenAckStmtType: {
  QualifiedVehicleDonationDesc: string
}
// None
type ContriVehicleBoatAirplaneStmtType: {
  CorrectedInd: string
  DoneeEIN: string
  ContributionDt: string
  OdometerMileageQty: number
  VIN: string
  CertifiesVehSoldToUnrltPrtyInd: string
  SaleDt: string
  GrossProceedsFromSaleOfVehAmt: number
  CertifiesVehicleNotTrnsfrInd: string
  CertifiesVehTrnsfrToNeedyInd: string
  CertifiesDetailedImprvDesc: string
  GoodsAndServicesInd: boolean
  ValueOfGoodsAndSrvcForVehAmt: number
  IntangibleReligiousBenefitsInd: string
  GoodsAndServicesDesc: string
  VehClaimDedUnderSpcfdAmtInd: string
}
// Content model for Injured Spouse Other Income Statement
type InjuredSpouseOtherIncmStmtType: {
}
// None
type InjSpouseAllocationOthIncmType: {
  OtherIncomeDesc: string
  TotalOtherIncomeAmt: number
  InjuredSpouseAllocationAmt: number
  OtherSpouseAllocationAmt: number
}
// Mortgage Credit Certificate Interest Calculation Statement
type MCCInterestCalculationStatementType: {
  ShortExplanationTxt: string
}
// None
type MultipleBuildingProjectScheduleType: {
}
// None
type ProjectAndBuildingDetailType: {
  ProjectAndBuildingNameTxt: string
  BIN: string
  ProjectAggregateCreditAmt: number
  BuildingAllocatedCreditAmt: number
}
// None
type PassThroughEntityScheduleType: {
}
// None
type PassThroughEntityGrpType: {
  ShareOfCreditAmt: number
  BIN: string
}
// Content model for Form 8594 Consideration Computation Statement 
type ConsiderationComputationType: {
  ExplanationTxt: string
}
// Content model for Form 8594 Reason(s) for Increase or Decrease Statement
type ReasonsForIncreaseOrDecreaseType: {
  ExplanationTxt: string
}
// Content model for Change By Divorce In IRA Basis Statement
type ChgByDivorceInIRABasisStmtType: {
  SpouseSSN: string
  SpouseNm: string
  ExplanationTxt: string
}
// Content model for Distribution of Excess Contribution
type DistributionOfExContriStmtType: {
  ExplanationTxt: string
}
// Content model for IRA Recharacterization Statement
type IRARecharacterizationStmtType: {
  ExplanationTxt: string
}
// Content model for Return of Excess Traditional IRA Contributions
type RtnOfExTradIRAContriStmt: {
  ExplanationTxt: string
}
// Content model for Return of IRA Contributions Statement
type ReturnOfIRAContriStmtType: {
  ExplanationTxt: string
}
// None
type DeemedDivElectFrmrPFICStmtType: {
  IncludedIncomeForTaxYr: string
  LawForIncludedIncomeTxt: string
  TransactionDesc: string
  LawForShareholdersHoldPrdTxt: string
  TerminationDt: string
  TaxYearBeginDt: string
  TaxYearEndDt: string
}
// Shareholders pro rata share information
type ShareholdersProRataShareInfoType: {
  TaxYr: string
  PostProratedShareHolderTYAmt: number
  PostProratedtoShareHolderAmt: number
  CalculationDesc: string
}
// None
type DeemedDivElectSec1297ePFICStmtType: {
  CFCQualificationDt: string
  CFCQlfyFallsInTxblYearBeginDt: string
  CFCQlfyFallsInTxblYearEndDt: string
  AmountIncludedInIncomeTaxYr: string
  LawUnderWhichAmountWasIncldTxt: string
  TransactionDesc: string
  ShareholdersHoldingPrdLawTxt: string
}
// Shareholders pro rata share schedule
type ShareholdersProRataShareType: {
  StockHeldByTaxpayerTaxYr: string
  Post1986EPProratedShrTaxYrAmt: number
  Post1986EPProratedToShrAmt: number
  CalculationDesc: string
}
// None
type DeemedDividendElectionStatementType: {
  IncludedAsIncomeAmt: number
  IncludedIncomeForTaxYr: string
  LawForIncludedIncomeTxt: string
  TransactionDesc: string
  LawForShareholdersHoldPrdTxt: string
}
// None
type GainOrLossMrktToMrktElectStmtType: {
}
// Gain Or Loss Market To Market Election Group
type GainOrLossMrktToMrktElectGrpType: {
  FMVStkOnDtSaleOrDisposAmt: number
  AdjBasisStkOnDtSaleOrDisposAmt: number
  UnreversedInclusionsAmt: number
}
// None
type QEFDistributionStatementType: {
  IncludedAsIncomeAmt: number
  IncludedIncomeForTaxYr: string
  LawForIncludedIncomeTxt: string
  TransactionDesc: string
  LawForShareholdersHoldPrdTxt: string
}
// None
type ShareholdersStockOwnershipStmtType: {
}
// None
type StockOwnershipInfoType: {
  StockClassDesc: string
  BeginTaxYearSharesCnt: number
  ChangeToNumberOfSharesOwnedTxt: string
  ChangeDt: string
  EndTaxYearSharesCnt: number
}
// None
type TaxationOfExcessDistributionStmtType: {
  ExplanationTxt: string
}
// Content model for Other US Virgin Islands Deductions Adjustment Statement
type OtherUSVIDeductionsAdjStmtType: {
}
// Content model for Other US Virgin Islands Income Statement
type OtherUSVIIncomeStmtType: {
}
// Content model for Schedule of Adjustments to Long-Term Contracts from Schedules  K-1
type AdjLongTermContractsFromK1SchType: {
}
// Content model for Schedule of Adjustments to Long-Term Contracts from Schedules  K-1
type AdjLongTermContractsK1Type: {
}
// Content model for Schedule of Adjustments to Long-Term Contracts from Schedules  K-1
type PYLongTermContractsFromK1Type: {
  Yr: string
}
// Content model for Schedule of Adjustments to Long-Term Contracts from Schedules  K-1
type PYLongTermContractsFromK1YearlyInfoType: {
  PYAdjustmentAmt: number
  PYNetAdjToIncmAmt: number
}
// Content model for Adjustments to Long-Term Contracts Schedule
type AdjustmentLongTermContractsSchType: {
}
// Content model for Adjustments to Long-Term Contracts Schedule
type AdjustmentLongTermContractsGrpType: {
  ContractNum: string
  JobNm: string
  OtherIdentifyingInformationTxt: string
}
// Content model for Adjustments to Long-Term Contracts Schedule
type PYLongTermContractGrpType: {
  Yr: string
}
// Content model for Adjustments to Long-Term Contracts Schedule
type PYScheduleAdjustmentsGrpType: {
  PYIncmPrevRptBsdOnEstCntrctAmt: number
  PYIncmAllocBsdOnActlCntrctAmt: number
  PYOtherAdjustmentsAmt: number
  PYNetAdjToIncmAmt: number
}
// Content model for Schedule of Adjustments to Long-Term Contracts Under Simplified Marginal Impact Method from Schedules  K-1
type AdjLTContractsSimplifiedK1SchType: {
}
// Content model for Schedule of Adjustments to Long-Term Contracts Under Simplified Marginal Impact Method from Schedules  K-1
type AdjLTContractsSimplifiedK1Type: {
}
// Content model for Schedule of Adjustments to Long-Term Contracts Under Simplified Marginal Impact Method from Schedules  K-1
type PYLongTermContractsSimplifiedFromK1SchType: {
  Yr: string
}
// Content model for Schedule of Adjustments to Long-Term Contracts Under Simplified Marginal Impact Method from Schedules  K-1
type YearlyInfoType: {
  PYAdjustmentAmt: number
  PYNetAdjToIncmAmt: number
}
// Content model for adjustments to long-term contracts under simplified marginal impact method schedule
type AdjLTContractsSimplifiedSchType: {
}
// Content model for adjustments to long-term contracts under simplified marginal impact method schedule
type AdjLTCntrctsSmplfdScheduleGrpType: {
  ContractNum: string
  JobNm: string
  OtherIdentifyingInformationTxt: string
}
// Content model for Adjustments to Long-Term Contracts under Simplified Marginal Impact Method Schedule
type PYLongTermContractsSimplifiedType: {
  Yr: string
}
// Content model for Adjustments to Long-Term Contracts under Simplified Marginal Impact Method Schedule
type PYLongTermContractsSimplifiedYearlyInfoType: {
  PYIncmPrevRptBsdOnEstCntrctAmt: number
  PYIncmAllocBsdOnActlCntrctAmt: number
  PYNetAdjToIncmAmt: number
}
// Content model for alternative method of interest computation statement part I, lines 7or 8
type AltMethodInterestCmptStmtType: {
}
// Content model for alternative method of interest computation statement part I, lines 7or 8
type ComputationStmtGrpType: {
  ExplanationTxt: string
  Amt: number
}
// Content model for Alternative Minimum Taxable Income Adjustments Under Simplified Marginal Impact Method Schedule
type AltMinTxblIncmAdjSimplifiedSchType: {
}
// Content model for Alternative Minimum Taxable Income Adjustments Under Simplified Marginal Impact Method Schedule
type AdjSimplifiedScheduleGrpType: {
  ContractNum: string
  JobNm: string
  OtherIdentifyingInformationTxt: string
}
// Content model for Alternative Minimum Taxable Income Adjustments Under Simplified Marginal Impact Method Schedule
type PYLTContractsSimplifiedType: {
  Yr: string
}
// Content model for Alternative Minimum Taxable Income Adjustments Under Simplified Marginal Impact Method Schedule
type PYLTContractsSimplifiedYearlyInfoType: {
  PYIncmPrevRptBsdOnEstCntrctAmt: number
  PYIncmAllocBsdOnActlCntrctAmt: number
  PYNetAdjToIncmAmt: number
}
// Content model for Schedule of Alternative Minimum Taxable Income Adjustments Under Simplified Marginal Impact Method from Schedules K-1
type AltMinTxblIncmAdjSmplfdK1SchType: {
}
// Content model for Schedule of Alternative Minimum Taxable Income Adjustments Under Simplified Marginal Impact Method from Schedules K-1
type AltMinTxblIncmAdjSmplfdK1Type: {
}
// Schedule of Alternative Minimum Taxable Income Adjustments Under Simplified Marginal Impact Method from Schedules K-1
type PYLongTermContractsSimplifiedFromK1Sch2Type: {
  Yr: string
}
// Schedule of Alternative Minimum Taxable Income Adjustments Under Simplified Marginal Impact Method from Schedules K-1
type PYLongTermContractsSimplifiedFromK1Sch2YearlyInfoType: {
  PYAdjustmentAmt: number
  PYNetAdjToIncmAmt: number
}
// Content model for Identification of pass-through entities statement
type IdentificationOfPassThruEntitiesStmtType: {
}
// Content model for Identification of pass-through entities statement
type IdOfPassThruEntitiesGrpType: {
}
// Content model for Child Taxable Interest Statement
type ChildTaxableInterestStmtType: {
}
// Content model for principal purpose of related party exchange statement
type PrincipalPrpsRltdPartyExchStmtType: {
  ShortExplanationTxt: string
}
// Content model for realized and recognized gain in multi-asset exchanges statement
type GainInMultiAssetExchangesStmtType: {
}
// Content model for realized and recognized gain in multi-asset exchange
type GainInMultiAssetExchangeGrpType: {
  ShortExplanationTxt: string
  Amt: number
}
// Mortgage Subsidy Calculation of  Share Of Gain
type MortgSbsdyCalculationShareOfGainType: {
  MediumExplanationTxt: string
  QSMLPaidGovLenderShareDt: string
  PaidGovLenderShareAmt: number
}
// Content model for the Cost or Basis of Additions and Improvments Schedule
type CostOrBasisOfAddAndImprovType: {
  TotalAmt: number
}
// None
type CostOrBasisGrpType: {
  Desc: string
  Amt: number
}
// Content model for depreciation computation schedule
type DepreciationComputationType: {
  ExplanationTxt: string
}
// Content model for special computation for certain daycare facilities statement
type SpecialComputationType: {
  ComputationDesc: string
}
// Content model for allocation to patrons statement
type AllocationToPatronsStatementType: {
  TotalAmt: number
}
// None
type AllocationToPatronsGrpType: {
  Desc: string
  Amt: number
}
// Content model for controlled group or business statement
type ControlledGroupOrBusinessStmtType: {
  ExplanationTxt: string
}
// Content model for Computation For Tipped Employees Whose Wages Including Tips Exceeded Social Security maximum earnings amount Schedule
type ComputationForTippedEmplSchType: {
  ShortExplanationTxt: string
}
// Content model for Multiple Payees Statement
type MultiplePayeesStatementType: {
}
// None
type MultiplePayeesStmtType: {
  LTCInsuranceQualifiedAmt: number
  AcceleratedDeathBenefitRcvdAmt: number
  TotalLTCAndDeathBenefitRcvdAmt: number
  LTCDaysMultiplyByPerDiemAmt: number
  LTCCostIncurredAmt: number
  LargerCalcOrActualLTCCostsAmt: number
  LTCReimbursementAmt: number
  LTCPerDiemLimitationAmt: number
  LTCTaxablePaymentsAmt: number
}
// Content model for Primary Taxpayer HDHP Statement
type PrimaryTaxpayerHDHPStmtType: {
  ArcherMSAEmployerContriAmt: number
  ArcherMSAContributionAmt: number
  ArcherMSAContriLimitationAmt: number
  HDHPEmployerCompensationAmt: number
  ArcherMSADeductionAmt: number
}
// Content model for Spouse Taxpayer HDHP Statement
type SpouseTaxpayerHDHPStmtType: {
  ArcherMSAEmployerContriAmt: number
  ArcherMSAContributionAmt: number
  ArcherMSAContriLimitationAmt: number
  HDHPEmployerCompensationAmt: number
  ArcherMSADeductionAmt: number
}
// Content model for Primary Taxpayer Medicare MSA Statement
type PrimaryTaxpayerMedicareMSAStmtType: {
  TotalMedicareMSADistriAmt: number
  MedicareMSAUnrmbQualMedExpAmt: number
  TaxableMedicareMSADistriAmt: number
  MedicareMSADistriMeetTaxExcInd: string
  MedicareMSAAddnlDistriTaxAmt: number
}
// Content model for Spouse Taxpayer Medicare MSA Statement
type SpouseTaxpayerMedicareMSAStmtType: {
  TotalMedicareMSADistriAmt: number
  MedicareMSAUnrmbQualMedExpAmt: number
  TaxableMedicareMSADistriAmt: number
  MedicareMSADistriMeetTaxExcInd: string
  MedicareMSAAddnlDistriTaxAmt: number
}
// Change Pre Or Post Expatriation Date Statement
type ChangePrePostExptrtDateStmtType: {
  MediumExplanationTxt: string
}
// Deferred Property Tax Election Statement
type DeferredPropertyTaxElectStmtType: {
}
// Eligible Deferred Compensation Item Statement
type EligDeferredCompItemStmtType: {
}
// Form 8854 Computation Statement
type Form8854ComputationStatementType: {
}
// Ineligible Deferred Compensation Item Statement
type InlgblDeferredCompItemStmtType: {
}
// Nongrantor Trusts Beneficial Interest Statement
type NongrantorTrBeneficialIntStmtType: {
}
// Nongrantor Trust Statement
type NongrantorTrustStatementType: {
}
// Other Assets Not Included Statement
type OtherAssetsNotIncludedStmtType: {
}
// Other Liabilities Statement
type OtherLiabilitiesStatementType: {
}
// Owned Trust Value Statement
type OwnedTrustValueStatementType: {
}
// Partnership Interest Statement
type PartnershipInterestStatementType: {
}
// Specified Tax Deferred Accounts Statement
type SpecifiedTaxDeferredAcctStmtType: {
}
// Content model for Accounting Method Change Statement
type AccountingMethodChangeStmtType: {
  PriorAccountingMethodDesc: string
  NewAccountingMethodDesc: string
}
// Content model for Elective Relief Agreement And/Or Annual Certification Statement
type ElectiveReliefOrCertStmtType: {
  MediumExplanationTxt: string
}
// Content model for E&P or taxable income adjustment schedule
type EPTaxableIncomeAdjustmentSchType: {
}
// None
type EPTaxableIncomeAdjustmentGrpType: {
  AdjustmentItemDsc: string
  AdjustmentAmt: number
  TotalNetAdditonsAmt: number
  TotalNetSubtractionsAmt: number
}
// Content model for Multiple Recipient Remittance Statement
type MultRecipientRemittanceStmtType: {
  MediumExplanationTxt: string
}
// Content model for evidence of a previously filed claim for biodiesel sold or used statement
type EvdncofPrevFldClmBiodieselStmtType: {
}
// None
type CertificateforBiodieselType: {
  CertificateIdentificationNum: string
  TotalGallonsofAgriBiodieselQty: number
  TotalGallonsClmSch3Frm8849Qty: number
  TotalGallonsClmSchCFrm720Qty: number
  TotalGallonsClaimedForm4136Qty: number
}
// Content model for bad debt statement
type BadDebtStatementType: {
  ShortExplanationTxt: string
}
// Content model for balance sheets agree statement
type BalanceSheetsAgreeStatementType: {
  ShortExplanationTxt: string
}
// Content model for business satartup and organizational cost statement
type BusStartupOrgnztnlCostStmtType: {
  ShortExplanationTxt: string
}
// Content model for capital gain distributions
type CapitalGainDistributionsType: {
}
// Content model for capital gain distributions
type CapitalGainDistributionGrpType: {
  Desc: string
  Amt: number
}
// Content model for deduction disallowed computation statement
type DedDisallowedComputationStmtType: {
  ShortExplanationTxt: string
}
// Content model for domestic production activities statement
type DomesticProdActyStmtType: {
  TotalAmt: number
}
// None
type DomesticProductionActivitiesType: {
  Desc: string
  Amt: number
}
// Content model for functional currency and exchange rate QBU statement
type FuncCurAndExchangeRateQBUStmtType: {
}
// None
type FuncCurAndExchangeRateQBUType: {
  QBUId: string
  CountryOfOperationCd: string
  FunctionalCurrencyDesc: string
}
// Content model for gross income from oil, gas, and geothermal properties statement
type GrossIncmOilGasGthrmlPropStmtType: {
  ShortExplanationTxt: string
}
// Content model for gross income sourced at partner level schedule
type GrossIncmSourcedAtPrtnrLvlSchType: {
}
// None
type GrossIncmSourcedAtPartnerLevelType: {
  Desc: string
  Amt: number
  GainAmt: number
  LossAmt: number
}
// Content model for itemized schedule of other categories statement
type ItemizedOtherCatStatementType: {
}
// Content model for other category
type ItemizedOtherCategoryGrpType: {
  Desc: string
  Amt: number
}
// Content model for itemized ordinary income (loss) statement
type ItemizedOrdinaryIncomeLossStmtType: {
}
// None
type OrdinaryIncomeLossGrpType: {
  Amt: number
}
// Content model for Itemized Other Decreases Schedule
type ItemizedOtherDecreasesSch2Type: {
}
// Content model for Itemized Other Increases Schedule
type ItemizedOtherIncreasesSch2Type: {
}
// Content model for multiple category 1 filers statement
type MultipleCategory1FilersStmtType: {
}
// None
type Cat1FilerNotFilingSingle8865Type: {
  Category1FilerTaxYearBeginDt: string
  Category1FilerTaxYearEndDt: string
  FilerShareOfLiabNonRecourseAmt: number
  QualifiedNonRcrsFinancingAmt: number
  FilerShareOfLiabilitiesOthAmt: number
  ParentCategory1FilerEIN: string
}
// Content model for other rental credits statement
type OtherRentalCreditsStatementType: {
}
// Content model for other rental credit
type OtherRentalCreditGrpType: {
  Desc: string
  Amt: number
}
// Content model for other rental real estate credits statement
type OtherRentalRealEstateCrStmtType: {
}
// Content model for other rental real estate credit
type OtherRentalRealEstateCrGrpType: {
  CreditTypeTxt: string
  Amt: number
}
// Content model for reconciliation statement
type ReconciliationStatementType: {
  ExplanationTxt: string
}
// Content model for sale or exchange of collectibles statement
type SaleOrExchangeCollectiblesStmtType: {
  ShortExplanationTxt: string
}
// Content model for separate units schedule
type SeparateUnitsScheduleType: {
}
// None
type SeparateUnitGrpType: {
  ShortDesc: string
  CountryCd: string
}
// Content model for tax reduction explanation
type TaxReductionExplanationType: {
}
// Content model for tax reduction explanation
type TaxReductionType: {
  ShortExplanationTxt: string
}
// Content model for advanced coal project property statement
type AdvancedCoalProjectPropStmtTyp: {
  GasificationBasisAmt: number
  CoalGasificationBasisAmt: number
}
// Content model for agri-biodiesel producer credit statement
type AgriBiodieselProducerCrStmtType: {
  AgriBiodieselProducerCreditAmt: number
  AgriBiodieselGallonsPrdcdQty: number
  AgriBiodieselProductionCapQty: number
}
// Content model for Basis of Energy Property Statement
type BasisOfEnergyPropertyStmtType: {
  SolarGthrmlEgyPropBasis2005Amt: number
  SolarGthrmlEgyPropBasis2006Amt: number
  QlfyFuelCellPropBasis2006Amt: number
  CapacityQlfyFuelCellPropQty: number
  QlfyMicroturbinePropBss2006Amt: number
  CapQlfyMicroturbinePropQty: number
}
// Content model for the Deferred  Section 1045 Rollover Statement
type DefrdSect1045RllvrStmtType: {
}
// None
type DefrdSect1045RolloverInfoGrpType: {
  PartnersSharePrtshpsAdjBssAmt: number
  SalesPriceOfStockAmt: number
  StockPurchaseDt: string
  StockSoldDt: string
}
// Content model for Domestic Production Activity Statement
type DomesticProductionActivityStmtType: {
}
// Content model for the Extraterritorial Income Exclusion Statement
type ExtraterritorialIncomeExclStmtType: {
  ExplanationTxt: string
}
// Content model for form 8865 K1 collectibles gain or loss explanation
type F8865K1CollGainLossExplnType: {
}
// Content model for form 8865 K1 collectibles gain or loss explanation
type F8865K1CollectiblesGainLossGrpType: {
  ShortExplanationTxt: string
}
// Content model for form 8865 K1 interest income explanation
type F8865K1IntIncmExplanationType: {
}
// Content model for form 8865 K1 interest income explanation
type Form8865K1InterestIncmExplnGrpType: {
  ShortExplanationTxt: string
}
// Content model for form 8865 K1 net long term capital gain loss explanation
type F8865K1NetLTCapGainLossExplnType: {
}
// Content model for form 8865 K1 net long term capital gain loss explanation
type F8865K1NetLTCapGainLossGrpType: {
  ShortExplanationTxt: string
}
// Content model for form 8865 K1 partner payment explanation
type F8865K1PrtnrPymtExplanationType: {
}
// Content model for form 8865 K1 partner payment explanation
type Form8865K1PartnerPymtExplnGrpType: {
  ShortExplanationTxt: string
}
// Content model for form 8865 K1 portfolio income loss royalty explanation
type F8865K1PrtflIncmLossRyltyExplnType: {
}
// Content model for form 8865 K1 portfolio income loss royalty explanation
type F8865K1PrtflIncmLossRyltyGrpType: {
  ShortExplanationTxt: string
}
// Content model for form 8865 K1 portfolio income loss total ordinary dividend explanation
type F8865K1PrtflIncmLsTotOrdnryDivType: {
}
// Content model for form 8865 K1 portfolio income loss total ordinary dividend explanation
type F8865K1PrtflIncmLsOrdnryDivGrpType: {
  ShortExplanationTxt: string
}
// Content model for form 8865 K1 qualifying dividend explanation
type F8865K1QlfyDivExplanationType: {
}
// Content model for form 8865 K1 qualifying dividend explanation
type F8865K1QualifyingDividendGrpType: {
  ShortExplanationTxt: string
}
// Content model for form 8865 K1 short term capital gain or loss explanation
type F8865K1NetSTCapGainLossExplnType: {
}
// Content model for form 8865 K1 short term capital gain or loss explanation
type F8865K1NetSTCapGainLossGrpType: {
  ShortExplanationTxt: string
}
// Content model for the Gain Eligible Section 1045 Rollover Statement
type GainEligibleSect1045RllvrStmtType: {
}
// None
type GainEligSect1045RllvrInfoGrpType: {
  PartnersSharePrtshpsAdjBssAmt: number
  SalesPriceOfStockAmt: number
  StockPurchaseDt: string
  StockSoldDt: string
}
// Content model for Oil, Gas, And Geothermal Properties Statement
type OilGasAndGthrmlPropertiesStmtType: {
  MediumExplanationTxt: string
}
// Content model for Partner’s Film and Television Production Statement
type PartnersFilmAndTVProductionStmtType: {
}
// None
type PartnersFilmAndTVProductionGrpType: {
  FilmTelevisionProductionDesc: string
  DistributiveShareOfProdAmt: number
}
// Content model for Qualified Conservation Contributions Statement
type QlfyCnsrvContributionsStmtType: {
  ExplanationTxt: string
}
// Content model for Recapture Of Investment Credit Statement
type RecaptureInvestmentCreditStmtType: {
  ExplanationTxt: string
}
// Content model for the Renewable Electricity And Refined Coal Production Credit Statement
type RnwblElecRefinedCoalProdCrStmtType: {
}
// None
type RnwblElecRefinedCoalProdCrInfoType: {
  SectionAAmt: number
  SectionBAmt: number
}
// Amount of Recapture Calculation Statement
type AmtOfRecaptureCalcStmtType: {
  ShortExplanationTxt: string
}
// Contributed Property Statement
type ContributedPropertyStmtType: {
  ShortExplanationTxt: string
}
// Dates of Transfer Statement
type DatesOfTransferStatementType: {
  Desc: string
  TransferDt: string
}
// None
type TransferStatementType: {
}
// None
type TransferStatementItemGrpType: {
  Desc: string
  Amt: number
}
// Content model for Adjustment to Taxable Income From Multiple Schedules K-1 Statement
type AdjToTaxableIncomeFromSchK1Type: {
}
// None
type AdjustmentToTaxableIncomeType: {
  RecomputationYr: string
  NetChangeToDepreciationAmt: number
}
// Content model for Adjustment to Taxable Income Schedule
type AdjustmentToTaxableIncomeSchType: {
}
// None
type PropertyDepreciatedInfoType: {
  Yr: string
  TotalPropertyDeprecColmAAmt: number
  TotalPropertyDeprecColmBAmt: number
  NetTotPropertyDeprecForPYAmt: number
}
// None
type OtherAdjustmentsInfoType: {
  Yr: string
  TotalOtherAdjustmentColmAAmt: number
  TotalOtherAdjustmentColmBAmt: number
  NetTotOtherAdjustmentsForPYAmt: number
}
// Content model for IRS Form 8866 Attachments Statement
type Form8866AttachmentsType: {
  MediumExplanationTxt: string
}
// Content model for Explanation of Computed Interest Statement
type ExplanationOfComputedInterestType: {
  ExplanationTxt: string
}
// Content model for Additional Section 263A Costs Under Cost of Goods Sold Schedule
type AddnlSection263ACostsSchType: {
  TotalForeignTradeIncomeAmt: number
  TotalForeignSlsLeasingIncmAmt: number
}
// Content model for Basis for Entitlement Statement
type BasisForEntitlementStatementType: {
  ExplanationTxt: string
}
// Content model for Other Expenses and Deductions Schedule
type OtherExpensesandDeductionsSchType: {
  TotFrgnTrdIncmOthExpnssDedAmt: number
  TotFrgnSlsLeasingExpnssDedAmt: number
}
// Content model for Other Costs under Cost of Goods Sold Schedule 
type OtherCostsUnderGoodsSoldSchType: {
  TotalAmountOfForeignTrdIncmAmt: number
  TotFrgnSalesAndLeasingIncmAmt: number
}
// Content model for Section 942(a)(3) Schedule
type Section942a3ScheduleType: {
  TotalOfGrossReceiptsExcldAmt: number
}
// Content model for tabular schedule of transactions
type TabularScheduleOfTransactionseType: {
}
// Content model for Transactions in Lieu of the FSC Provisions Schedule
type TransInLieuOfFSCProvisionsSchType: {
  TotalTransactionAmt: number
}
// Content model for continuation of Form 8886 expected tax benefits explanation
type ContF8886ExpctTaxBnftExplnType: {
}
// Content model for continuation of Form 8886 expected tax benefits explanation
type ContF8886ExpctTaxBenefitExplnType: {
  EIN: string
  ExpectedTaxBenefitsExplnTxt: string
}
// Content model for assignee railroad track miles statement
type AssigneeRailroadTrackMilesStmtType: {
}
// None
type AssigneeRailroadTrackMilesGrpType: {
  EIN: string
  TotalRlrdTrackMilesQty: number
  TotalAssignorsEligRlrdTrackQty: number
  TotRlrdTrackAsgnByAssignorQty: number
}
// Content model for assignor railroad track miles statement
type AssignorRailroadTrackMilesStmtType: {
}
// None
type AssignorRailroadTrackMilesGrpType: {
  EIN: string
  Dt: string
  TotalRlrdTrackMilesQty: number
}
// Content model for Expanded Affiliated Group Allocation Calculation Statement
type ExpndAffltGroupAllocnCalcStmtType: {
}
// Content model for Expanded Affiliated Group QPAI Statement
type ExpndAffiliatedGroupQPAIStmtType: {
  QPAICalcMthdTxt: string
}
// Content model for the Additional Bond Current Year Credit Statement    
type AddnlBondCYCreditStmtType: {
}
// Content model for Passive Credit Amount Explanation statement
type PassCreditAmtExplanationStmtType: {
  ExplanationTxt: string
}
// Content model for Basis Other Than Actual Cost of Property Statement
type BasisOthThanActlCostPropStmtType: {
  ExplanationTxt: string
}
// Content model for Interest Disposition Statement
type InterestDispositionStmtType: {
}
// None
type InterestDispositionDetailType: {
  InterestDispositionDesc: string
  EntityEIN: string
  GainOrLossFromDisposAmt: number
  AdjustmentsToGainOrLossAmt: number
}
// Content model for Currently Deductible Expenditures for Other Silvicultural Activities Schedule
type DedExpendSilviculturalActySchType: {
}
// Content model for Timber Deductible Expenditures Info
type TimberDeductibleExpendInfoGrpType: {
  AccountBlockTractOrAreaTxt: string
  KindOfActivityTxt: string
  NumberOfAcresTreatedQty: number
  ExpenditureCurrentlyDedAmt: number
}
