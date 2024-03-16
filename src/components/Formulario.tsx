import { useEffect, useState } from "react";
import Error from './Error'

interface Props{
    pacientes:any
    setPacientes:any
    paciente:any
    setPaciente:any
}

const Formulario = ({pacientes,setPacientes,paciente,setPaciente}: Props) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(()=> {
        if( Object.keys(paciente).length > 0){
            const {nombre, propietario, email, fecha, sintomas} = paciente;
            setNombre(nombre);
            setPropietario(propietario);
            setEmail(email);
            setFecha(fecha);
            setSintomas(sintomas);
        }
    },[paciente]);


    const genrarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }


    const handleSubmit = (e:any) => {
        e.preventDefault();

        //Validación formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')){

            setError(true);
            return;
        }
        setError(false);

        const pacienteObjt = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
            id:""
        }

        if(paciente.id){
            //editar paciente
            pacienteObjt.id = paciente.id;
            const pacientesActualizados = pacientes.map((pacienteState:any) => pacienteState.id === paciente.id ? pacienteObjt : pacienteState)
            setPacientes(pacientesActualizados);
            setPaciente({});
        }else{
            // nuevo paciente
            pacienteObjt.id = genrarId();
            setPacientes([...pacientes, pacienteObjt]);
        }

        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }


    return (
        <div className="md:w-1/2 lg:wd-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold"> Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mx-5" onSubmit={(e) =>  handleSubmit(e)}>
                {error && <Error />}
                <div className="mb-5">
                    <label
                        htmlFor="nombre"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Mascota
                    </label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={e=> setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={e=> setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Correo electronico
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Fecha de alta mascota
                    </label>
                    <input
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={e=> setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Síntomas
                    </label>
                    <textarea 
                        id="sintomas" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas de tu mascota"
                        value={sintomas}
                        onChange={e=> setSintomas(e.target.value)}
                    />
                </div>

                <input 
                    type="submit" 
                    className="bg-indigo-600 w-full p-3 
                    text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"   
                    value={paciente.id ? "Editar paciente" : "Agregar paciente"}
                />
            </form>
        </div>
    );
};

export default Formulario;
