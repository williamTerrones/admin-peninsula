export interface LeadCsv {
    name:string,
}

export interface Lead extends LeadCsv {
    creationDate:string
    email:string
    form:string
    incidentId:string
    leadSource:string
    mobile:string
    platform:string
    sourceUrl:string
    totalOfIncidents:number
}