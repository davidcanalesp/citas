import React from 'react'

const ListadoPacientes = () => {
    return (
        <div class='w-1/2 lg:w-3/5 h-screen overflow-y-scroll'>
            <h2 class='font-black text-3xl text-center'>Listado de Pacientes</h2>
            <p class='text-xl mt-5 mb-10 text-center'>Administra tus {' '}
            <span class='text-indigo-600 font-bold'>pacientes y citas</span></p>
            <div class='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
                <p class='font-normal mb-3 text-gray-700 uppercase'>Nombre:{' '}
                    <span class='font-bold normal-case'>Hook</span>
                </p>

                <p class='font-normal mb-3 text-gray-700 uppercase'>Dueño:{' '}
                    <span class='font-bold normal-case'>Juan Camaney</span>
                </p>

                <p class='font-normal mb-3 text-gray-700 uppercase'>e-mail:{' '}
                    <span class='font-bold normal-case'>juan@correo.com</span>
                </p>

                <p class='font-normal mb-3 text-gray-700 uppercase'>Ingreso:{' '}
                    <span class='font-bold normal-case'>12/12/2021</span>
                </p>

                <p class='font-normal mb-3 text-gray-700 uppercase'>Síntomas:{' '}
                    <span class='font-bold normal-case'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis obcaecati facere eveniet voluptatem, culpa voluptate quia, ipsa at ad accusamus numquam! Commodi nobis inventore enim ex a repellat, laborum, cum dolorum amet dolore adipisci voluptates. Et aperiam odio dolorem inventore, voluptatem eius accusantium alias neque nam reiciendis ad, quae qui.</span>
                </p>
            </div>
        </div>
    )
}

export default ListadoPacientes
