
type Props = {
    message?: string
}

function Error({message = "Todos los campos son obligatorios"}: Props) {
    return (
        <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
            <p>{message}</p>
        </div>
    )
}

export default Error
