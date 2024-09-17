import { ReactNode } from 'react'
import './style.css'

interface Props {
    loading?:boolean,
    children:ReactNode,
}

export const LoadingFull = ({children, loading = false}:Props) => {

    return (
        <div className={loading ? 'state-loading' : ''}>
            {children}
        </div>
    )

}
