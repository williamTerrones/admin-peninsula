import { utils, read } from 'xlsx';

interface RowItem {
    rows:any[][],
    cols:{
        name: string
        key: number
    }[]
}

const makeCols  = (refstr: string | undefined) => {
    if(!refstr) return []
    const range = utils.decode_range(refstr).e.c + 1
    return Array(range).map(i=>({ name: utils.encode_col(i), key: i }))
}

export default function excelRenderer(file: File): Promise<RowItem> {
    return new Promise(resolve => {
        const reader = new FileReader()
        const rABS = !!reader.readAsBinaryString
        reader.onload = (e: any) => {
            const bstr = e.target.result
            const wb = read(bstr, { type: rABS ? "binary" : "array" })
            const wsname = wb.SheetNames[0], ws =wb.Sheets[wsname]

            const rows = utils.sheet_to_json(ws, { header: 1 }) as any[][]
            const cols = makeCols(ws["!ref"])

            resolve({ rows, cols })
        }
        if (file && rABS) reader.readAsBinaryString(file)
        else reader.readAsArrayBuffer(file)
    })
}