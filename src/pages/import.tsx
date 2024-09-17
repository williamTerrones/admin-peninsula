import { ImportCsv, UICard } from "../components"
import { ExcampleCsv } from "../components/ExampleCsv"
import { awardsHeaderExample, codesHeaderExample } from "../constants/headerExamples"

const Import = () => {
  return (
    <div className="w-screen justify-center flex flex-col items-center">
      <div className="my-4"></div>
      <UICard text="Ejemplo de reportes">
        <ExcampleCsv text="codigos" headers={codesHeaderExample} />
        <ExcampleCsv text="premios" headers={awardsHeaderExample} />
      </UICard>
      <div className="my-4"></div>
      <UICard text="Subir reportes">
        <ImportCsv label="Subir códigos" type="code"
          icon="https://cdn-icons-png.flaticon.com/512/747/747305.png" />
        <ImportCsv label="Subir premios" type="award"
          icon="https://cdn-icons-png.flaticon.com/512/747/747305.png" />
      </UICard>
    </div>
  )
}

export default Import