import { useState } from "react"
import { IncidentCsv } from "../../models/incident"
import { getReportData } from "../../services/report"
import { showToastError } from "../../utils/toast"
import { getCsvReportHeaders } from "./utils"
import { TypeOfReport } from "../../models/csv"
import { Lead } from "../../models/code"

const useExportCsv = (refCSV:React.MutableRefObject<any>, type:TypeOfReport) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Lead[] | IncidentCsv[]>([])

    const getCsvReport = () => ({
        data: data,
        headers: getCsvReportHeaders(type) ,
        filename: `reporte-${type}.csv`
    })

    const loadReportData = async () => {

        setLoading(true)

        try {

            const dataApi = await getReportData(type)
            setData(dataApi)
            refCSV?.current?.link?.click()

        } catch (e) {
            console.log("error ", e)
            showToastError("Ocurrió un error inesperado")
        } finally {
            setLoading(false)
        }

    }

    return {
        loadReportData,
        getCsvReport,
        loading,
    }

}

export default useExportCsv