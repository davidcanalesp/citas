import { useState } from "react";
const Formulario = () => {
    const [nombre, setNombre]= useState('');
    const [propietario, setPropietario]= useState('');
    const [email, setEmail]= useState('');
    const [fecha, setFecha]= useState('');
    const [sintoma, setSintoma]= useState('');

    const handleSubmit= (e) => {
        //validación del formulario
        e.preventDefault();
    }

    return ( 
        <div class= 'md: w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {' '}
                <span className='text-indigo-600 font-bold'>adminístralos {nombre}</span>
            </p>

            <form className='bNameg-white shadow-md rounded-lg py-10 px-5'
                  onSubmit={handleSubmit}
            
            >
                <div className='mb-5'>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input 
                        type='text'
                        placeholder="Nombre de la mascota"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        id= 'mascota'
                        value={nombre}
                        onChange={(e)=>setNombre(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="mascota" class='block text-gray-700 uppercase font-bold'>Propietario</label>
                    <input 
                        type='text'
                        placeholder="Nombre del propietario"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        id= 'propietario'
                        value={propietario}
                        onChange={(e)=>setPropietario(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="e-mail" className='block text-gray-700 uppercase font-bold'>Correo electrónico</label>
                    <input 
                        type='email'
                        placeholder="e-mail de contacto"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        id= 'e-mail'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="Alta" className='block text-gray-700 uppercase font-bold'>Fecha Ingreso del paciente</label>
                    <input
                        type='date'
                        id= 'Alta'
                        value={fecha}
                        onChange={(e)=>setFecha(e.target.value)}
                    />
                </div>

                <div class='mb-5'>
                    <label htmlFor="Sintomas" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
                    <textarea
                        id= 'Sintoma'
                        placeholder="Describe los síntomas"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={sintoma}
                        onChange={(e)=>setSintoma(e.target.value)}
                    />
                </div>

            </form>
        </div>
     );
}
 
export default Formulario;