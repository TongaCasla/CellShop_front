import React from 'react'
import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { ApiProducto } from '../Utilidades/api';

const ProductosCRUD = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({

    nombre: '',
    descripcion: '',
    precio: '',
    precioVenta: '',
    stock: '',
    imagen: ''
  });

  // Función para obtener productos desde la API
  const fetchProductos = async () => {
    try {
      const response = await axios.get(ApiProducto); // ← Cambia esta URL
      setProductos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos(); // Se ejecuta una sola vez cuando carga el componente
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };

  const agregarProducto = async () => {
    try {
      const response = await axios.post(ApiProducto, nuevoProducto);
      setProductos([...productos, response.data]);
      setNuevoProducto({
        nombre: '',
        descripcion: '',
        precio: '',
        precioVenta: '',
        stock: '',
        imagen: ''
      });
      handleClose();
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await axios.delete(`${ApiProducto}/${id}`);
      setProductos(productos.filter(producto => producto.id !== id));
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Lista de Productos</h2>
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Agregar Producto
      </Button>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Cargando productos...</p>
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Marca</th>
              <th>Precio</th>
              <th>Precio Venta</th>
              <th>Stock</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={producto.id_presentacion}>
                <td>{producto.id_presentacion}</td>
                <td>{producto.nombre_presentacion}</td>
                <td>{producto.producto.nombre_producto}</td>
                <td>{producto.precio}</td> 
                <td>{producto.precioVenta}</td>
                <td>{producto.stock}</td> 
                <td>
                  {producto.imagen ? (
                    <img src={producto.imagen} alt="Producto" width="50" height="50" />
                  ) : 'Sin imagen'}
                </td>
                <td>
                  <Button variant="danger" onClick={() => eliminarProducto(producto.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal para agregar producto */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={nuevoProducto.nombre}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                value={nuevoProducto.descripcion}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="precio"
                value={nuevoProducto.precio}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio Venta</Form.Label>
              <Form.Control
                type="number"
                name="precioVenta"
                value={nuevoProducto.precioVenta}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={nuevoProducto.stock}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>URL de Imagen</Form.Label>
              <Form.Control
                type="text"
                name="imagen"
                value={nuevoProducto.imagen}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={agregarProducto}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductosCRUD;