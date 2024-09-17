import { ChangeEvent, useState } from "react"

const UseForm = <T>(initialState:T) => {

    const [formData, setFormData] = useState(initialState)
    
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]:e.target.value,
        }))
    }

    const resetForm = () => setFormData({...initialState})

    return {
        formData,
        onChange,
        resetForm,
    }

}

export default UseForm