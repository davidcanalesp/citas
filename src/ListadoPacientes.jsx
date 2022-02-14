import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({arregloDePacientes, pacienteAEditar, setPacienteAEditar}) => {
    return (
        <div className='w-full mt-10 md:w-1/2 lg:w-3/5 h-screen transition-opacity md:overflow-y-scroll'>
            <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
            {arregloDePacientes.length > 0 ?
                <div>
                    <p className='text-xl mt-5 mb-10 text-center'>Administra tus {' '}
                    <span className='text-indigo-600 font-bold'>pacientes y citas</span></p>
            
                    {arregloDePacientes.map( elemPaciente =>
                        <Paciente key={elemPaciente.id}
                            elemPaciente={elemPaciente}
                            pacienteAEditar={pacienteAEditar}
                            setPacienteAEditar={setPacienteAEditar} 
                         g/>)
                    }        
                </div>
             :
                <p className='text-center text-3xl mt-10 text text-gray-400 mx-2.5'>No has ingresado pacientes. Captúralos en el formulario.</p>

            }
        </div>
    )
}

export default ListadoPacientes
