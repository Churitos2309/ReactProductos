import React from 'react';

const Paginacion = ({ productos, limite, pagina, setPagina, totalPaginas, informacionRegistros }) => {
  const startIndex = (pagina - 1) * limite;
  const endIndex = startIndex + limite;
  const currentData = productos.slice(startIndex, endIndex);

  return (
    <div>
      <p>{informacionRegistros}</p>
      {currentData.map((item, index) => (
        <div key={index}>
          {item.nombre} - {item.descripcion}
        </div>
      ))}
      <div>
        {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((pagina) => (
          <button key={pagina} onClick={() => setPagina(pagina)}>{pagina}</button>
        ))}
      </div>
      <select value={limite.toString()} onChange={(e) => setLimite(parseInt(e.target.value, 10))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default Paginacion;