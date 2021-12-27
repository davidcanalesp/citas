import React from 'react'

const Paciente = ({elemPaciente}) => {
    return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
                <p className='font-normal mb-3 text-gray-700 uppercase'>Nombre:{' '}
                    <span className='font-bold normal-case'>{elemPaciente.nombre}</span>
                </p>

                <p className='font-normal mb-3 text-gray-700 uppercase'>Dueño:{' '}
                    <span className='font-bold normal-case'>{elemPaciente.propietario}</span>
                </p>

                <p className='font-normal mb-3 text-gray-700 uppercase'>e-mail:{' '}
                    <span className='font-bold normal-case'>{elemPaciente.email}</span>
                </p>

                <p className='font-normal mb-3 text-gray-700 uppercase'>Ingreso:{' '}
                    <span className='font-bold normal-case'>{elemPaciente.fecha}</span>
                </p>

                <p className='font-normal mb-3 text-gray-700 uppercase'>Síntomas:{' '}
                    <span className='font-bold normal-case'>{elemPaciente.sintoma}</span>
                </p>
            </div>
            
        
    )
}

export default Paciente
