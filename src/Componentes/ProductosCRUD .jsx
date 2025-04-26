import React from 'react'
import { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ProductosCRUD = () => {
  const [productos, setProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({
    id: '',
    nombre: '',
    descripcion: '',
    precio: '',
    precioVenta: '',
    stock: '',
    imagen: ''
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    setNuevoProducto({ ...nuevoProducto, [e.target.name]: e.target.value });
  };

  const agregarProducto = () => {
    setProductos([...productos, nuevoProducto]);
    setNuevoProducto({
      id: '',
      nombre: '',
      descripcion: '',
      precio: '',
      precioVenta: '',
      stock: '',
      imagen: ''
    });
    handleClose();
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter(producto => producto.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2>Lista de Productos</h2>
      <Button variant="primary" onClick={handleShow} className="mb-3">
        Agregar Producto
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Precio Venta</th>
            <th>Stock</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>{producto.descripcion}</td>
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
              <Form.Label>Descripcion</Form.Label>
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