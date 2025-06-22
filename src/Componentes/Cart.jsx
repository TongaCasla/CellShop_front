import React from 'react';
import { useCart } from './CartContext';
import { Table, Button, Container, Form } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react';
import { ApiCarrito } from '../Utilidades/api';
import axios from 'axios';
import { AuthContext } from './AuthContext';

const Cart = () => {
  const [carrito, setProductos] = useState([]);
   const { usuarioData, setUsuarioData } = useContext(AuthContext);

  const fetchCarrito = async () => {
    
    try {
     
      const response = await axios.get(`${ApiCarrito}${usuarioData.id_usuario}`); // Cambia esta URL por la correcta de tu API
      setProductos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };


   useEffect(() => {
        fetchCarrito(); 
      }, []);

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
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
              <tr key={producto.detalles.presentacion.id_presentacion}>
                <td>
                  {producto.detalles.presentacion.nombre_presentacion}
                  
                </td>
                <td>
                  $
                  {(
                    producto.detalles.precio_unitario
                    
                  )}
                </td>
                <td>
                  {producto.detalles.cantidad}
                </td>
                <td>
                  $
                  {(
                    producto.detalles.precio_unitario * producto.detalles.cantidad
                    
                  )}
                </td>
                <td>
                  <Button
                    variant="danger"
                    //onClick={() => removeFromCart(producto.id_presentacion)}
                  >
                    Quitar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <h4>Total: $ </h4>
    </div>
  );
};

export default Cart;