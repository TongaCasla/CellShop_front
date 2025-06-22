import React, { useEffect, useState, useContext } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { ApiCarrito, ApiVenta } from '../Utilidades/api';
import { AuthContext } from './AuthContext';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


const Cart = () => {
  const [carrito, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const { usuarioData } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
    },
  };

  const fetchCarrito = async () => {
    try {
      const response = await axios.get(ApiCarrito, config);
      const data = response.data.detalles || [];
      console.log('API Response:', response.data);
      console.log('Normalized data:', data);
      setProductos(data);
      setError(null);
    } catch (error) {
      console.error('Error al obtener productos:', error.response?.status, error.response?.data || error.message);
      setError('No se pudo cargar el carrito. Intenta de nuevo.');
      setProductos([]);
    }
  };

  useEffect(() => {
    fetchCarrito();
  }, []);

  const handleVenta = async () => {
    setError(null);
    setSuccessMessage(null);
    const metodo_pago = {
      metodos_pago: [
      {
        id_metodo_pago: 1,
        monto: total,
      },  
    ]
    };

    try {
     
      await axios.post(ApiVenta,metodo_pago,config);
      setSuccessMessage('Gracias por su compra :)');
      setShowModal(true); // Mostrar modal
      setTimeout(() => {
        setShowModal(false);  // Oculta el modal
        history.push('/');
      }, 3000);
      
    } catch (error) {
      console.error('Error al realizar la compra del carrito:', error.response?.status, error.response?.data || error.message);
      if (error.response?.status === 401 || error.response?.status === 403) {
        setError('No autorizado. Por favor, inicia sesión de nuevo.');
      } else {
        setError('No se pudo realizar la compra. Intenta de nuevo.');
      }
    }
  };
  const handleRemoveItem = async (id_carrito_detalle) => {
    setError(null);
    setSuccessMessage(null);
    try {
      // Asumiendo que tu endpoint DELETE es como /api/carrito/:id_presentacion
      await axios.delete(`${ApiCarrito}eliminar/${id_carrito_detalle}`,config);
      setSuccessMessage('Producto eliminado del carrito exitosamente.');
      // Después de eliminar, volvemos a cargar el carrito para actualizar la vista
      fetchCarrito();
    } catch (error) {
      console.error('Error al eliminar producto del carrito:', error.response?.status, error.response?.data || error.message);
      if (error.response?.status === 401 || error.response?.status === 403) {
        setError('No autorizado. Por favor, inicia sesión de nuevo.');
      } else {
        setError('No se pudo eliminar el producto del carrito. Intenta de nuevo.');
      }
    }
  };

  const total = carrito.reduce(
    (sum, producto) => sum + producto.precio_unitario * producto.cantidad,
    0
  );

  return (
    <Container className="mt-4">
      <h2>Carrito de compras</h2>
      {error && <p className="text-danger">{error}</p>}
      {successMessage && <p className="text-success">{successMessage}</p>}
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto) => (
              <tr key={producto.id_presentacion}>
                <td>{producto.presentacion.nombre_presentacion}</td>
                <td>${producto.precio_unitario}</td>
                <td>{producto.cantidad}</td>
                <td>${(producto.precio_unitario * producto.cantidad).toFixed(2)}</td>
                <td>
                  <Button variant="danger"
                    onClick={() => handleRemoveItem(producto.id_carrito_detalle)}
                  >
                    Quitar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <h4>Total: ${total.toFixed(2)}</h4>
      <Button variant="primary"
       onClick={() => handleVenta()}
      >
         Realizar Compra
      </Button>


      <Modal show={showModal} centered>
        <Modal.Body className="text-center">
          <h4>¡Gracias por su compra! 🎉</h4>
          <p>Será redirigido al inicio en unos segundos...</p>
      </Modal.Body>
      </Modal>

    </Container>
    
    
  );
};

export default Cart;