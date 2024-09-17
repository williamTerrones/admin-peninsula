import { Loading } from ".."

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    loading?:boolean,
}

export const UIButton = ({ type, loading }: Props) => {
    return (
        <button type={type} className='btn btn-primary p-2' disabled={loading}>
            <div className="flex items-center">
                {loading ? <Loading /> : null}
                Iniciar sesión
            </div>
        </button>
    )
}
