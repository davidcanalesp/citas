const Formulario = () => {

    return ( 
        <div class= 'md: w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {' '}
                <span className='text-indigo-600 font-bold'>adminístralos</span>
            </p>

            <form className='bNameg-white shadow-md rounded-lg py-10 px-5'>
                <div className='mb-5'>
                    <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input 
                        type='text'
                        placeholder="Nombre de la mascota"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        id= 'mascota'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="mascota" class='block text-gray-700 uppercase font-bold'>Propietario</label>
                    <input 
                        type='text'
                        placeholder="Nombre del propietario"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        id= 'propietario'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="e-mail" className='block text-gray-700 uppercase font-bold'>Correo electrónico</label>
                    <input 
                        type='text'
                        placeholder="e-mail de contacto"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        id= 'e-mail'
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="Alta" className='block text-gray-700 uppercase font-bold'>Fecha Ingreso del paciente</label>
                    <input
                        type='date'
                        id= 'Alta'
                    />
                </div>

                <div class='mb-5'>
                    <label htmlFor="Síntomas" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
                    <textarea
                        id= 'Alta'
                        placeholder="Describe los síntomas"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    />
                </div>

            </form>
        </div>
     );
}
 
export default Formulario;