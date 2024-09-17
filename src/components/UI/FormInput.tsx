import { FC } from 'react';
import { InputElement } from '../../types';

interface Props extends InputElement {
    label: string,
}

export const UIFormInput:FC<Props> = props => {

    const { 
        label, placeholder, value, name, 
        onChange, type, required,
    } = props

    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input type={type} id={name} value={value}  
            onChange={onChange} name={name}
            className="my-2 p-4 focus:ring-indigo-500 
            focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
            placeholder={placeholder} required={required} />
        </>
    )
}