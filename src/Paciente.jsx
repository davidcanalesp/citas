import React from 'react'

const Paciente = ({elemPaciente, pacienteAEditar, setPacienteAEditar}) => {
    const {nombre, propietario, email, fecha, sintoma} = elemPaciente;
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
                <p className='font-normal mb-3 text-gray-700 uppercase'>Nombre:{' '}
                    <span className='font-bold normal-case'>{nombre}</span>
                </p>

                <p className='font-normal mb-3 text-gray-700 uppercase'>Dueño:{' '}
                    <span className='font-bold normal-case'>{propietario}</span>
                </p>

                <p className='font-normal mb-3 text-gray-700 uppercase'>e-mail:{' '}
                    <span className='font-bold normal-case'>{email}</span>
                </p>

                <p className='font-normal mb-3 text-gray-700 uppercase'>Ingreso:{' '}
                    <span className='font-bold normal-case'>{fecha}</span>
                </p>

                <p className='font-normal mb-3 text-gray-700 uppercase'>Síntomas:{' '}
                    <span className='font-bold normal-case'>{sintoma}</span>
                </p>
                <div className='flex justify-between mt-10'>
                    <button className='font-bold bg-green-400 text-white rounded-md px-10 py-4'
                        onClick={()=>{setPacienteAEditar(elemPaciente)}}
                        >Actualizar Información</button>
                    <button className='font-bold bg-red-700 text-center text-white rounded-md px-10 py-4'>Eliminar Paciente</button>
                </div>
        </div>

            
        
    )
}

export default Paciente
