import { useState } from "react";
const Formulario = ({arregloDePacientes, setArregloDePacientes}) => {
    const [nombre, setNombre]= useState('');
    const [propietario, setPropietario]= useState('');
    const [email, setEmail]= useState('');
    const [fecha, setFecha]= useState('');
    const [sintoma, setSintoma]= useState('');
    const [fallo, setFallo]= useState(false);

    const handleSubmit= (e) => {
        //validación del formulario

        e.preventDefault();
        if ([nombre, propietario, email, fecha, sintoma].includes('')){
            setFallo(true);
            return;
        }
        else {
            setFallo(false);
            const objPaciente={
                nombre,
                propietario,
                email,
                fecha,
                sintoma
            }
            console.log(objPaciente);
            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintoma('');
            setArregloDePacientes([...arregloDePacientes, objPaciente])
        }
    }

    return ( 
        <div className= 'w-full md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {' '}
                <span className='text-indigo-600 font-bold'>adminístralos {nombre}</span>
            </p>

            <form className='bg-white shadow-md rounded-lg py-10 px-5'
                  onSubmit={handleSubmit}
            
            >
                <div>
                    {fallo && <p className="bg-red-800 text-white font-bold uppercase py-3 px-5 text-center rounded-md mb-3">¡¡¡Error: TODOS LOS CAMPOS SON NECESARIOS!!!</p>}
                </div>
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
                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Propietario</label>
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

                <div className='mb-5'>
                    <label htmlFor="Sintomas" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
                    <textarea
                        id= 'Sintoma'
                        placeholder="Describe los síntomas"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={sintoma}
                        onChange={(e)=>setSintoma(e.target.value)}
                    />
                </div>

                <div>
                    <input 
                        type="submit"
                        value='Guardar datos'
                        className='w-full bg-indigo-600 font-bold text-white py-2 px-10 rounded-lg hover:cursor-pointer hover:bg-indigo-700 transition-colors'/>
                </div>


            </form>
        </div>
     );
}
 
export default Formulario;