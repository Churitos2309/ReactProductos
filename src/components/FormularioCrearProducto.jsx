import React, { useState } from "react";
import Modal from "react-modal";

const FormularioCrearProducto = ({ onCreate, isOpen, onClose }) => {
  // Estados para almacenar los valores de los campos del formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  // const [cantidad, setCantidad] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Llama a la función onCreate pasada como prop, pasando los datos del nuevo producto
    onCreate({ nombre, descripcion });
    // Reinicia los valores de los campos del formulario
    setNombre("");
    setDescripcion("");
    onClose();
    // setCantidad('');
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={"flex items-center justify-center flex-col w-3/5  border border-opacity-60"}
      >
        <h2 className="text-lg font-semibold mb-4">Agregar Producto</h2>
        <form onSubmit={handleSubmit} className="w-auto ">
          {/* Campos de entrada para nombre, precio y cantidad */}
          {/* Los valores de los campos están enlazados con los estados correspondientes */}
          {/* Cuando se cambia el valor de un campo, se actualiza el estado correspondiente */}
          <div className="mb-4">
            <label htmlFor="nombre" className="block font-medium mb-1">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="descripcion" className="block font-medium mb-1">
              Descripcion:
            </label>
            <input
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            />
          </div>
          {/* <div className="mb-4">
          <label htmlFor="cantidad" className="block font-medium mb-1">Cantidad:</label>
          <input
          type="number"
          id="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
        </div> */}
          {/* Boton para enviar el formulario */}
          <button
            onClick={onClose}
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Agregar
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default FormularioCrearProducto;
