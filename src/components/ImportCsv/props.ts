import { TypeOfReport } from "../../models/csv";

export interface ImportCsvPropsBase {
    label: string,
    icon: string,
}

export interface ImportCsvProps extends ImportCsvPropsBase {
    type: TypeOfReport,
}