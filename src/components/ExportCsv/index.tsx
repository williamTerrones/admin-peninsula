import { CSVLink } from "react-csv"
import { LoadingFull } from ".."
import { FC, useRef } from 'react';
import useExportCsv from './useExportCsv';
import { TypeOfReport } from "../../models/csv";

interface Props {
    name:string,
    type:TypeOfReport
}

export const ExportCsv:FC<Props> = ({name, type}) => {

    const refCSV = useRef<any>(null)

    const { loading, loadReportData, getCsvReport } = useExportCsv(refCSV, type)

    return (
        <LoadingFull loading={loading}>
            <button className="btn btn-primary text-xl p-6" onClick={() => { loadReportData() }} >
                Generar reporte de {name}
            </button>
            <CSVLink style={{ display: 'none' }} asyncOnClick={true} ref={refCSV} {...getCsvReport()}>
                Generar reporte de {name}
            </CSVLink>
        </LoadingFull>
    )
}