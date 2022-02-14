import React, { useState, useEffect } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import ListadoPacientes from "./ListadoPacientes";

const App = () => {
  const [arregloDePacientes, setArregloDePacientes] = useState ([]);
  const [pacienteAEditar, setPacienteAEditar]= useState({});
  //console.log('El paciente a editar es: ', pacienteAEditar);
  
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-red-600 font-extrabold">
        Hodie in terra canunt angeli, Laetantur archangeli
      </h1>
      <p className="text-indigo-700 font-bold">Hodie Salvator apparuit,</p>
      <p className="uppercase">Hodie Christus natus est</p>
      <Header />
      <div className='mt-12 md:flex'>
        <Formulario 
            arregloDePacientes={arregloDePacientes} 
            setArregloDePacientes= {setArregloDePacientes}
            pacienteAEditar = {pacienteAEditar}
        />
        <ListadoPacientes 
            arregloDePacientes={arregloDePacientes}
            pacienteAEditar= {pacienteAEditar}
            setPacienteAEditar= {setPacienteAEditar}
        />
      </div>
    </div>
  );
};

export default App;
