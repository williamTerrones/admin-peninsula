import { FormEvent, useState } from 'react'
import { UIButton, UIFormInput } from '../components'
import UseForm from '../hooks/useForm'

import { delay } from '../utils/delay'
import { showToastError } from '../utils/toast'

export const Login = () => {

    const { formData:{user,password}, onChange } = UseForm({user:'',password:''})
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        
        e.preventDefault()
        setLoading(true)
        
        await delay()

        if( !(user==='admin-crediviaja' && password==='FWqRActZfuAd)B9N') ) {
            setLoading(false)
            return showToastError("Las credenciales son incorrecta")
        }
        
        localStorage.setItem('token','token')
        window.location.reload()

    }

    return (
        <div className="w-screen h-screen m-auto flex">
            <form className='w-1/2 m-auto shadow-sm border-2 p-5 rounded-2xl bg-white'
             onSubmit={handleSubmit}>
                <UIFormInput name="user" placeholder='Por favor ingrese su nombre de usuario' 
                label='Usuario' value={user} onChange={onChange} required />
                <UIFormInput name="password" placeholder='Por favor ingrese su contraseña' type="password"
                label='Contraseña' value={password} onChange={onChange} required />
                <div className='text-center mt-6'>
                    <UIButton type='submit' loading={loading} />
                </div>
            </form>
        </div>
    )
}
