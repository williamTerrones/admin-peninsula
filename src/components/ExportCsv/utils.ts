import { AWARDS_HEADER, CODES_HEADER, INTERESTED_HEADERS, PARTICIPANT_HEADERS } from "./constants"

export const getCsvReportHeaders = (type: 'codes' | 'awards' | 'participant' | 'interested') => {
    
    if (type === 'codes') return CODES_HEADER
    if(type==='interested') return INTERESTED_HEADERS
    if(type==='participant') return PARTICIPANT_HEADERS

    return AWARDS_HEADER

}