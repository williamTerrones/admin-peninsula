import serverApi from '../api/serverApi';
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


export const importCsvList = async (rows: Rows, type: TypeOfReport) => {

    rows.splice(0, 1)

    const list = getList(rows, type)

    const { data } = await serverApi.post(`/${type}/import`, list)

    console.log({data})

    return data

}

const getLeadList = (rows: Rows): LeadCsv[] => rows.map(e => ({
    name: e[0],
    email: e[1],
    mobile: e[2],
    form: e[3],
    leadSource:e[4],
    platform:e[5],
    sourceUrl: e[6],
}))

const getIncidentList = (rows: Rows) => rows.map(e => ({
    status: e[0],
    sourceUrl:e[1],
    tagsStatus:[{tag:e[2]}],
    leadId:e[3]
}))

const getList = (rows: Rows, type: TypeOfReport) => type === 'leads' ? getLeadList(rows) : getIncidentList(rows)