import { CSSProperties } from "react"

interface Props {
    color?:'white' | 'blue',
    width?: number | string,
    height?: number | string,
}

const colors = {
    white:'border-white',
    blue:'border-blue-400',
}

export const Loading = (props:Props) => {

    const {color = 'white', width = '1rem', height='1rem'} = props
    const divStyle:CSSProperties = { 
        borderTopColor: 'transparent',
        width,
        height,
    }

    return (
        <div style={divStyle}
        className={`border-4 border-solid rounded-full 
        animate-spin inline-block mr-2 ${colors[color]}`}>
        </div>
    )
}