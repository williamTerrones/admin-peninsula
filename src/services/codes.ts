import firebaseApi from '../api/firebaseApi';
import { TypeCsv } from '../components/ImportCsv/props';
import { AwardCsv } from '../models/award';
import { Code, CodeCsv } from '../models/code';

type Rows = any[][]

export const getCodes = async (type: 'codes' | 'awards' | 'participant' | 'interested' = 'codes') => {

    const { data } = await firebaseApi.get(`/${type}/report-list`)

    if (type === 'codes') return data as Code[]

    return data as AwardCsv[]

}


export const importCsvList = async (rows: Rows, type: TypeCsv) => {

    rows.splice(0, 1)

    const list = getList(rows, type)
    const payload = {
        list,
    }

    console.log(payload)

    const { data } = await firebaseApi.post(`/${type}s/import-list`, payload)

    return data

}

const getCodeList = (rows: Rows): CodeCsv[] => rows.map(e => ({
    codigo: e[0],
}))

const getAwardList = (rows: Rows): AwardCsv[] => rows.map(e => ({
    codigo: e[0],
}))

const getList = (rows: Rows, type: TypeCsv) => type === 'code' ? getCodeList(rows) : getAwardList(rows)