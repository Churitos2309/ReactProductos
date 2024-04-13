import React, { useState } from 'react';

const ModalEditarProducto = ({ producto, onUpdate, onCancel }) => {
  // Estados para almacenar los valores actualizados del producto
  const [nombre, setNombre] = useState(producto.nombre);
  const [descripcion, setDescripcion] = useState(producto.descripcion);
  // const [cantidad, setCantidad] = useState(producto.cantidad);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (window.confirm("¿Deseas actualizar este producto?"))
    // Llama a la función onUpdate pasada como prop, pasando los datos actualizados del producto
    onUpdate({ ...producto, nombre, descripcion });
    // Cierra el modal
    onCancel();
  };
  const handleActualizarAlerta = (index) => {
    if (window.confirm("Deseas Actualizar este producto? " + index)) {
      console.log("Se actualizo el producto: " + index);
    }else{
      console.log("Actualizacion cancelada por el usuario");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block font-medium mb-1">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="precio" className="block font-medium mb-1">Descripcion:</label>
            <input
              type="text"
              id="precio"
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
          <div className="flex justify-end">
            <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2">Cancelar</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarProducto;
