import { toast } from "react-toastify";

export const showToastError = (text:string) => toast(text, { type: 'error' })
export const showToastSuccess = (text:string) => toast(text, { type: 'success' })