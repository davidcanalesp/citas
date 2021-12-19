
import React from 'react';
import Header from './Header';
import Formulario from './Formulario';
import ListadoPacientes from './ListadoPacientes';

const App = () => {
  return (
      <div  class='container mx-auto mt-20'>
        <h1 className='text-red-600 font-extrabold'>Hodie in terra canunt angeli,
          Laetantur archangeli</h1>
        <p className='text-indigo-700 font-bold'>Hodie Salvator apparuit,</p>
        <p className="uppercase">Hodie Christus natus est</p>
        <Header />
        <Formulario/>
        <ListadoPacientes />
      </div>
  )
}

export default App
