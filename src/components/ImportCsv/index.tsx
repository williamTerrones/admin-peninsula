import { LoadingFull } from "../";
import { ImportCsvFileLabel } from "./FieltdLabel";
import { ImportCsvProps } from "./props";
import { ImportCsvTextInput } from "./TextInput";
import useImportCsv from "./useImportCsv";

export const ImportCsv = ({ label, icon, type }: ImportCsvProps) => {

    const {changeHandler, loading} = useImportCsv(type)

    return (
        <LoadingFull loading={loading} >
            <div className="py-5 px-2">
                <div className="mx-auto rounded-lg overflow-hidden md:max-w-xl">
                    <ImportCsvFileLabel label={label} icon={icon} />
                    <div className="relative border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
                        <ImportCsvTextInput />
                        <input type="file" className="h-full w-full opacity-0" name="" onChange={changeHandler} />
                    </div>
                </div>
            </div>
        </LoadingFull>
    )
}
