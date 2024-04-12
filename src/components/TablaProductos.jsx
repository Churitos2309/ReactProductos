import React from "react";

const TablaProductos = ({ productos, onEditar, onEliminar }) => {
  return (
    <table className="">
      <thead>
        <tr>
          <th className="px-4 py-2 font-medium text-left border">Nombre</th>
          <th className="px-4 py-2 font-medium text-left border">
            Descripcion
          </th>
          {/* <th className="px-4 py-2 font-medium text-left border">Cantidad</th> */}
          <th className="px-4 py-2 font-medium text-left border">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapea la lista de productos y renderiza una fila para cada producto */}
        {productos.map((producto, index) => (
          <tr key={index} className="border-b">
            {/* Muestra el nombre, precio y cantidad del producto */}
            <td className="px-4 py-2 border">{producto.nombre}</td>
            <td className="px-4 py-2 border">{producto.descripcion}</td>
            {/* <td className="px-4 py-2 border">{producto.cantidad}</td> */}
            {/* Botones de editar y eliminar */}
            <td className="px-4 py-2 border">
              <button
                onClick={() => onEditar(index)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => onEliminar(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaProductos;
