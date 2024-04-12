import React, { useState } from 'react';

const Buscador = ({ onBuscar }) => {
  const [buscar, setBuscar] = useState('');

  const handleBuscarChange = (e) => {
    setBuscar(e.target.value);
    onBuscar(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar"
      value={buscar}
      onChange={handleBuscarChange}
    />
  );
};

export default Buscador;