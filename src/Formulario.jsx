const Formulario = () => {

    return ( 
        <div class= 'md: w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
            <p className='text-lg mt-5 text-center mb-10'>Añade pacientes y {' '}
                <span class='text-indigo-600 font-bold'>adminístralos</span>
            </p>

            <form class='bg-white shadow-md rounded-lg py-10 px-5'>
                <div class='mb-5'>
                    <label htmlFor="mascota" class='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
                    <input 
                        type='text'
                        placeholder="Nombre de la mascota"
                        class='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        id= 'mascota'
                    />
                </div>
                <div class='mb-5'>
                    <label htmlFor="mascota" class='block text-gray-700 uppercase font-bold'>Propietario</label>
                    <input 
                        type='text'
                        placeholder="Nombre del propietario"
                        class='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        id= 'propietario'
                    />
                </div>
                <div class='mb-5'>
                    <label htmlFor="e-mail" class='block text-gray-700 uppercase font-bold'>Correo electrónico</label>
                    <input 
                        type='text'
                        placeholder="e-mail de contacto"
                        class='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        id= 'e-mail'
                    />
                </div>
                <div class='mb-5'>
                    <label htmlFor="Alta" class='block text-gray-700 uppercase font-bold'>Fecha Ingreso del paciente</label>
                    <input
                        type='date'
                        id= 'Alta'
                    />
                </div>

                <div class='mb-5'>
                    <label htmlFor="Síntomas" class='block text-gray-700 uppercase font-bold'>Síntomas</label>
                    <textarea
                        id= 'Alta'
                        placeholder="Describe los sítomas"
                        class='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    />
                </div>

            </form>
        </div>
     );
}
 
export default Formulario;