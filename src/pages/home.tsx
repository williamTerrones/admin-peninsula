import { ExportCsv } from '../components'

const Home = () => {
  return (
    <div className="w-screen h-screen justify-center flex items-center flex-col gap-4">
      <ExportCsv name='Códigos Activos' type='codes' />
      <ExportCsv name='Participantes' type='participant' />
      <ExportCsv name='Interesados' type='interested' />
    </div>
  )
}

export default Home