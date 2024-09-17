import { useState } from "react"
import { AwardCsv } from "../../models/award"
import { Code } from "../../models/code"
import { getCodes } from "../../services/codes"
import { showToastError } from "../../utils/toast"
import { getCsvReportHeaders } from "./utils"

const useExportCsv = (refCSV:React.MutableRefObject<any>, type:'codes' | 'awards' | 'participant' | 'interested') => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Code[] | AwardCsv[]>([])

    const getCsvReport = () => ({
        data: data,
        headers: getCsvReportHeaders(type) ,
        filename: `reporte-${type}.csv`
    })

    const loadCodes = async () => {

        setLoading(true)

        try {

            const codes = await getCodes(type)
            setData(codes)
            refCSV?.current?.link?.click()

        } catch (e) {
            console.log("error ", e)
            showToastError("Ocurrió un error inesperado")
        } finally {
            setLoading(false)
        }

    }

    return {
        loadCodes,
        getCsvReport,
        loading,
    }

}

export default useExportCsv