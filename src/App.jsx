import React, { useState } from "react";
import Contenedor from "./components/Contenedor";
import Header from "./components/Header";
import FormularioCrearProducto from "./components/FormularioCrearProducto";
import TablaProductos from "./components/TablaProductos";
import ModalEditarProducto from "./components/ModalEditarProducto";
import datos from "./components/datos";
import Paginacion from "./components/paginacion";
import Buscador from "./components/Buscador";

const App = () => {
  // Estado para almacenar la lista de productos
  const [productos, setProductos] = useState(datos);
  // Estado para almacenar el indice del producto seleccionado para editar
  const [indiceProductoSeleccionado, setIndiceProductoSeleccionado] =
    useState(null);

  const [informacionRegistros, setInformacionRegistros] = useState("");
  const [buscar, setBuscar] = useState("");
  const [clasificar, setClasificar] = useState("");
  const [limite, setLimite] = useState(5);
  const [pagina, setPagina] = useState(1);

  const handleBuscar = (buscar) => {
    setBuscar(buscar);
    const datosFiltrados = datosOrdenados.filter((index) =>
      index.nombre.toLowerCase().includes(buscar.toLowerCase())
    );
  };

  // Funcion para agregar un nuevo producto a la lista
  const handleCrearProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  // Funcion para establecer el indice del producto seleccionado para editar
  const handleEditarProducto = (indice) => {
    setIndiceProductoSeleccionado(indice);
  };

  // Funcion para actualizar un producto existente en la lista
  const handleActualizarProducto = (productoActualizado) => {
    const productosActualizados = [...productos];
    productosActualizados[indiceProductoSeleccionado] = productoActualizado;
    setProductos(productosActualizados);
    setIndiceProductoSeleccionado(null);
  };

  // Funcion para eliminar un producto de la lista
  const handleEliminarProducto = (indice) => {
    const productosActualizados = [...productos];
    productosActualizados.splice(indice, 1);
    setProductos(productosActualizados);
  };

  const handleLimiteChange = (nuevoLimite) => {
    const spliceProductos = productos.splice(0, parseInt(nuevoLimite, 10));
    setLimite(parseInt(nuevoLimite, 10));
    setInformacionRegistros(
      `${Math.min(spliceProductos.length, parseInt(nuevoLimite, 10))} de ${
        productos.length
      }`
    );
  };

  const datosFiltrados = productos.filter((index) =>
    index.nombre.toLowerCase().includes(buscar.toLowerCase())
  );

  const datosOrdenados = datosFiltrados.sort((a, b) => {
    if (clasificar === "asc") {
      return a.nombre.toLowerCase() > b.nombre.toLowerCase() ? 1 : -1;
    } else if (clasificar === "desc") {
      return a.nombre.toLowerCase() < b.nombre.toLowerCase() ? 1 : -1;
    }
    return 0;
  });

  const totalPaginas = Math.ceil(datosFiltrados.length / limite);

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Contenedor>
      {/* Componente para agregar nuevos productos */}
      <TablaProductos
        productos={productos}
        onEditar={handleEditarProducto}
        onEliminar={handleEliminarProducto}
      />
      <div>
        <button onClick={handleOpenModal}>Abrir modal</button>
        <FormularioCrearProducto
          isOpen={modalOpen}
          onClose={handleCloseModal}
          onCreate={(producto) => {
            console.log("Producto creado: ", producto);
            handleCloseModal();
          }}
        />
      </div>
      {/* Componente para mostrar la lista de productos */}
      {/* Componente modal para editar productos */}
      {indiceProductoSeleccionado !== null && (
        <ModalEditarProducto
          producto={productos[indiceProductoSeleccionado]}
          onUpdate={handleActualizarProducto}
          onCancel={() => setIndiceProductoSeleccionado(null)}
        />
      )}
      <Buscador onBuscar={handleBuscar} />

      <Paginacion
        productos={datosOrdenados}
        limite={limite}
        pagina={pagina}
        setPagina={setPagina}
        totalPaginas={totalPaginas}
        informacionRegistros={`${Math.min(datosOrdenados.length, limite)} de ${
          productos.length
        }`}
      />
    </Contenedor>
  );
};

export default App;
