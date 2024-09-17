import { TypeOfReport } from "../../models/csv"
import { INCIDENTES_HEADERS, LEADS_HEADER } from "./constants"

export const getCsvReportHeaders = (type: TypeOfReport) => {
    
    if (type === 'leads') return LEADS_HEADER

    return INCIDENTES_HEADERS

}