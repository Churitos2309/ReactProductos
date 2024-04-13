import React, { useState } from "react";
import Contenedor from "./components/Contenedor";
import ModalEditarProducto from "./components/ModalEditarProducto";
import datos from "./components/datos";
import Productos from "./components/Productos";

const App = () => {
  const [productos, setProductos] = useState(datos);
  const [indiceProductoSeleccionado, setIndiceProductoSeleccionado] =
    useState(null);

  const handleCrearProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const handleEditarProducto = (indice) => {
    setIndiceProductoSeleccionado(indice);
  };

  const handleActualizarProducto = (productoActualizado) => {
    const productosActualizados = [...productos];
    productosActualizados[indiceProductoSeleccionado] = productoActualizado;
    setProductos(productosActualizados);
    setIndiceProductoSeleccionado(null);
  };

  const handleEliminarProducto = (indice) => {
    const productosActualizados = [...productos];
    productosActualizados.splice(indice, 1);
    setProductos(productosActualizados);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Contenedor>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-semibold mb-4">Productos</h1>
        <Productos 
          productos={productos} 
          onEditar={handleEditarProducto} 
          onEliminar={handleEliminarProducto} 
          onCreate={handleCrearProducto} 
          onOpenModal={handleOpenModal}

        />
      </div>
      {/* <div className="">
        <FormularioCrearProducto
          handleOpenModal={handleOpenModal}
          isOpen={modalOpen}
          onClose={handleCloseModal}
          onCreate={(producto) => {
            setProductos([...productos, producto]);
            console.log("Producto creado: ", producto);
            handleCloseModal();
          }}
        />
      </div> */}
      {indiceProductoSeleccionado !== null && (
        <ModalEditarProducto
          producto={productos[indiceProductoSeleccionado]}
          onUpdate={handleActualizarProducto}
          onCancel={() => setIndiceProductoSeleccionado(null)}
        />
      )}
    </Contenedor>
  );
};

export default App;
