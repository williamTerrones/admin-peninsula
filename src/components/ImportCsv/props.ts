export interface ImportCsvPropsBase {
    label: string,
    icon: string,
}

export type TypeCsv = 'code' | 'award'
 
export interface ImportCsvProps extends ImportCsvPropsBase {
    type: TypeCsv,
}