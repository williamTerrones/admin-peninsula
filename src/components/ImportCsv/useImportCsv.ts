import excelRenderer from "../../utils/excelRenderer"
import { showToastError, showToastSuccess } from "../../utils/toast"
import { TypeCsv } from "./props"
import { useState } from 'react';
import { importCsvList } from '../../services/report';

const useImportCsv = (type: TypeCsv) => {

    const [loading, setLoading] = useState(false)

    const isCorrectSize = (rows: any[][]) => {

        const size = 1

        if (rows[0].length !== size) {
            showToastError("El formato de csv es incorrecto " + type)
            return false
        }

        return true

    }

    const handleUploadCsv = async (rows: any[][]) => {

        setLoading(true)

        try {

            await importCsvList(rows, type)
            showToastSuccess("El archivo ha sido importado correctamente")

        } catch (e) {

            console.error("Error ", e)
            showToastError("Ocurrió un error inesperado al tratar de subir el csv, por favor consulte a soporte ténico")

        } finally {

            setLoading(false)

        }

    }

    const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {

        if (!e.target?.files) return

        const fileObj = e.target.files[0]
        const { rows } = await excelRenderer(fileObj)
        if (!isCorrectSize(rows)) return

        handleUploadCsv(rows)

    }

    return {
        changeHandler,
        loading
    }

}

export default useImportCsv