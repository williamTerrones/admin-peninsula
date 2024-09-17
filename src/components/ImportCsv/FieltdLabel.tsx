import { ImportCsvPropsBase } from "./props"

export const ImportCsvFileLabel = ({ label, icon }: ImportCsvPropsBase) => {
    return (
      <label htmlFor="formFile" className="form-label inline-block mb-2 text-gray-700">
        {label}
        <img src={icon} className="ml-1"
          alt="Icono" width={14} height={14} style={{ display: 'inline-block', paddingBottom: '2px' }} />
      </label>
    )
  }