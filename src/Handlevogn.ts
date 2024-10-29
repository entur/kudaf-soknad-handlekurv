type Handlevogn = {
    orgNr: string,
    system: string,
    accessRights: AccessRights,
    language: string,
    dataDef: string,
}

enum AccessRights {
    PUBLIC = 'PUBLIC',
    RESTRICTED = 'RESTRICTED',
    NON_PUBLIC = 'NON_PUBLIC',
}