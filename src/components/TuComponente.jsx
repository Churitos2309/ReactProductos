import React, { useState } from 'react';
import FormularioCrearProducto from './FormularioCrearProducto';

const TuComponente = () => {
  const [mostrarModal, setMostrarModal] = useState(false); // Estado para controlar la visibilidad del modal

  const handleMostrarModal = () => {
    setMostrarModal(true); // Función para mostrar el modal
  };

  const handleCerrarModal = () => {
    setMostrarModal(false); // Función para cerrar el modal
  };

  const crearProductoModal = () => {
    const [isOpen, setIsOpen] = useState(false);
  }


  return (
    <div>
      <button onClick={handleMostrarModal}>Nuevo Producto</button> {/* Botón para abrir el modal */}
      
      {/* Renderiza el modal si mostrarModal es true */}
      {mostrarModal !== null && (
        <FormularioCrearProducto
          onClose={handleCerrarModal} // Propiedad para cerrar el modal
          isOpen={crearProductoModal}
        />
      )}
    </div>
  );
};

export default TuComponente;
