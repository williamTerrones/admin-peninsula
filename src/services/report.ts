import serverApi from '../api/serverApi';
import { TypeCsv } from '../components/ImportCsv/props';
import { IncidentCsv } from '../models/incident';
import { Lead, LeadCsv } from '../models/code';
import { TypeOfReport } from '../models/csv';

type Rows = any[][]

export const getReportData = async (type: TypeOfReport) => {

    const { data } = await serverApi.get(`/${type}`)

    if (type === 'leads') return data as Lead[]

    const items = data as any[]

    return items.map(e => ({
        ...e,
        tagsStatus: e.tagsStatus?.map((e: any) => e.tag)?.join(',')
    }))

}


export const importCsvList = async (rows: Rows, type: TypeCsv) => {

    rows.splice(0, 1)

    const list = getList(rows, type)
    const payload = {
        list,
    }

    const { data } = await serverApi.post(`/${type}s/import-list`, payload)

    return data

}

const getCodeList = (rows: Rows): LeadCsv[] => rows.map(e => ({
    name: e[0],
}))

const getAwardList = (rows: Rows): IncidentCsv[] => rows.map(e => ({
    tagstagsStatus: e[0],
}))

const getList = (rows: Rows, type: TypeCsv) => type === 'code' ? getCodeList(rows) : getAwardList(rows)