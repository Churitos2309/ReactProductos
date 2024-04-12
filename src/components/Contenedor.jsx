import React from 'react';

const Contenedor = ({ children }) => {
  return (
    <div className='flex justify-center flex-col max-w-max place-content-center'>
      <h1>Contenedor</h1>
      {children}
    </div>
  );
};

export default Contenedor;
