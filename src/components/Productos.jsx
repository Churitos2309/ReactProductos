import React, {useState} from "react";
import TablaProductos from "./TablaProductos";
import FormularioCrearProducto from "./FormularioCrearProducto";

const Productos = ({ productos, onEditar, onEliminar, onCreate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <button onClick={handleOpenModal} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">Nuevo Producto</button>
            <TablaProductos 
                productos={productos}
                onEditar={onEditar}
                onEliminar={onEliminar}
            />
            <FormularioCrearProducto
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onCreate={(producto) => {
                    onCreate(producto);
                    handleCloseModal();
                }}
            />
        </div>
    );
};

export default Productos;
