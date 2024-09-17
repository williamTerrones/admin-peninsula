import {CSVLink} from "react-csv"

interface Props {
    text:string,
    headers:{
        label:string,
        key:string,
    }[]
}

export const ExcampleCsv = ({text, headers}:Props) => {

    const csvReport = {
        data: [],
        headers,
        filename: text+'.csv'
    }

    return (
        <CSVLink className="btn btn-primary text-sm p-3 m-2"
        {...csvReport}>Descargar ejemplo de {text}</CSVLink>
    )
}
