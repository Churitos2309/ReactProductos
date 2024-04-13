import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

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
    <div className="">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={
          "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        }
      >
        <form onSubmit={handleSubmit} className="w-auto ">
          {/* Campos de entrada para nombre, precio y cantidad */}
          {/* Los valores de los campos están enlazados con los estados correspondientes */}
          {/* Cuando se cambia el valor de un campo, se actualiza el estado correspondiente */}
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-center text-black-600">
              Agregar Producto Nuevo
            </h1>
            <br />
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
          <div className="flex justify-between">
            <button
              onClick={onClose}
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Agregar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default FormularioCrearProducto;
