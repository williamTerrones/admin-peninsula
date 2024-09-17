import { CSVLink } from "react-csv"
import { LoadingFull } from ".."
import { FC, useRef } from 'react';
import useExportCsv from './useExportCsv';

interface Props {
    name:string,
    type:'codes' | 'awards' | 'participant' | 'interested'
}

export const ExportCsv:FC<Props> = ({name, type}) => {

    const refCSV = useRef<any>(null)

    const { loading, loadCodes, getCsvReport } = useExportCsv(refCSV, type)

    return (
        <LoadingFull loading={loading}>
            <button className="btn btn-primary text-xl p-6" onClick={() => { loadCodes() }} >
                Generar reporte de {name}
            </button>
            <CSVLink style={{ display: 'none' }} asyncOnClick={true} ref={refCSV} {...getCsvReport()}>
                Generar reporte de {name}
            </CSVLink>
        </LoadingFull>
    )
}