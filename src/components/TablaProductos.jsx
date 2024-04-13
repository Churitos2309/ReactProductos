import React, { useState } from "react";

const TablaProductos = ({ productos, onEditar, onEliminar }) => {
  const [busqueda, setBusqueda] = useState("");
  const [articulosPagina, setArticulosPagina] = useState(10);
  const [paginaActual, setPaginaActual] = useState(1);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const ultimoArticulo = paginaActual * articulosPagina;
  const primerArticulo = ultimoArticulo - articulosPagina;
  const articulosActuales = productosFiltrados.slice(
    primerArticulo,
    ultimoArticulo
  );

  const totalPaginas = Math.ceil(productos.length / articulosPagina);

  const handleChange = (e) => {
    setArticulosPagina(parseInt(e.target.value));
    setPaginaActual(1);
  };

  const handleEliminarAlerta = (index) => {
    if (window.confirm("Deseas eliminar este producto? " + index)) {
      onEliminar(index);
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Buscar"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <select value={articulosPagina} onChange={handleChange} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>
      <table className=" w-full">
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
          {articulosActuales.map((producto, index) => (
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
                  onClick={() => handleEliminarAlerta(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-4">
        {paginaActual > 1 && (
          <button
            onClick={() => setPaginaActual(paginaActual - 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
          >
            Anterior
          </button>
        )}
        <span className="text-gray-700 mr-2">
          Pagina {paginaActual} de {totalPaginas}
        </span>
        {paginaActual < totalPaginas && (
          <button
            onClick={() => setPaginaActual(paginaActual + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default TablaProductos;
