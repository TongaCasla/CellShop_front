import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import { ApiCarrito } from '../Utilidades/api';
import { AuthContext } from './AuthContext';

const CardProducto = ({ producto }) => {
  const { usuarioData, setUsuarioData } = useContext(AuthContext);
  const [productoCarrito, setProductoCarrito] = useState({
    id_usuario:'',
    id_presentacion: '',
    cantidad: '',
    precio_unitario: '',
    
  });
  const [errorMensaje, setErrorMensaje] = useState('');

  const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
  };
  const agregarProductoCarrito = async () => {
    // Prepare the new product data
    const newProducto = {
      id_usuario: usuarioData.id_usuario,
      id_presentacion: producto.id_presentacion,
      cantidad: 1,
      precio_unitario: producto.precio_compra * (1 + producto.porcentaje_aumento / 100),
    
    };
    console.log(newProducto);
    // Update state and make API call
    try {
      setProductoCarrito(newProducto); // Update state for UI consistency
      const response = await axios.post(`${ApiCarrito}agregar`, newProducto,config); // Use newProducto directly
      console.log('Producto agregado:', response.data); // Log success for debugging

      // Reset state after success
      setProductoCarrito({
        id_usuario:'',
        id_presentacion: '',
        cantidad: '',
        precio_unitario: '',
        
      });
      setErrorMensaje('');
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error); // Log full error
      const errorMessage = error.response?.data?.message || 'Error al agregar al carrito';
      setErrorMensaje(errorMessage);
      setTimeout(() => {
        setErrorMensaje('');
      }, 3000);
    }
  };

  return (
    <Card style={{ width: '18rem' }} className="mb-4 flex">
      <Card.Img
        variant="top"
        src={`/img/${producto.nombre_presentacion}.webp`}
        style={{ height: '350px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>
          {producto.producto.nombre_producto} {producto.nombre_presentacion}
        </Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>
          <strong>$ {producto.precio_compra * (1 + producto.porcentaje_aumento / 100)}</strong>
        </Card.Text>
        <Button variant="primary" onClick={agregarProductoCarrito}>
          Agregar al Carrito
        </Button>
        {errorMensaje && <Alert variant="danger">{errorMensaje}</Alert>}
      </Card.Body>
    </Card>
  );
};

export default CardProducto;
