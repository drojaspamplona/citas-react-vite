import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from 'react';



function App() {

  const [pacientes, setPacientes] = useState(() =>JSON.parse(localStorage.getItem('pacientes') as any) ?? []);
  const [paciente, setPaciente] = useState({});
  const eliminarPaciente = (id:string) => {
    const pacientesActualizados = pacientes.filter((paciente:any) => paciente.id !== id );
    setPacientes(pacientesActualizados);
  }

  /*  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes') as any);
      setPacientes(pacientesLS);
    }
    obtenerLS();
  },[]); */

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes]);

  return (
    <div className="container mx-auto mt-10">
      <Header/>
      <div className="mt-12 flex">
        <Formulario 
          pacientes={pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente = {eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
