import { ExportCsv } from '../components'

const Home = () => {
  return (
    <div className="w-screen h-screen justify-center flex items-center flex-col gap-4">
      <ExportCsv name='Leads' type='leads' />
      <ExportCsv name='Indicentes' type='incidents' />
    </div>
  )
}

export default Home