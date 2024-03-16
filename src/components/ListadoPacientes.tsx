import Paciente from "./Paciente";

type Props={
    pacientes:any
    setPaciente:any
    eliminarPaciente:any
}

const ListadoPacientes = ({pacientes,setPaciente,eliminarPaciente}:Props) => {
    return <div className="md:w-1/2 lg:wd-3/5 md:h-screen overflow-y-scroll">
        {pacientes && pacientes.length ? <>
                <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
                <p className="text-xl mt-5 text-center mb-10">
                    Administra tus {""}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
                {
                    pacientes.map((paciente:any) => <Paciente paciente={paciente} key={paciente.id} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>)
                }

            </>
            : 
            <>
                <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                <p className="text-xl mt-5 text-center mb-10">
                    Comienza  agregando pacientes {""}
                    <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                </p>
            </>
        }
        
    </div>;
};

export default ListadoPacientes;
