import { ImportCsv, UICard } from "../components"
import { ExcampleCsv } from "../components/ExampleCsv"
import { incidentsHeaderExample, leadsHeaderExample } from "../constants/headerExamples"

const Import = () => {
  return (
    <div className="w-screen justify-center flex flex-col items-center">
      <div className="my-4"></div>
      <UICard text="Ejemplo de reportes">
        <ExcampleCsv text="leads" headers={leadsHeaderExample} />
        <ExcampleCsv text="incidencias" headers={incidentsHeaderExample} />
      </UICard>
      <div className="my-4"></div>
      <UICard text="Subir reportes">
        <ImportCsv label="Subir leads" type="leads"
          icon="https://cdn-icons-png.flaticon.com/512/747/747305.png" />
        <ImportCsv label="Subir incidentes" type="incidents"
          icon="https://cdn-icons-png.flaticon.com/512/747/747305.png" />
      </UICard>
    </div>
  )
}

export default Import