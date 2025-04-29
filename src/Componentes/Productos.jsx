import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import CardProducto  from './CardProducto';
import axios from 'axios';
import { ApiProducto } from '../Utilidades/api';
import { useState, useEffect } from 'react';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  const fetchProductos = async () => {
    try {
      const response = await axios.get(ApiProducto); // Cambia esta URL por la correcta de tu API
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
  };

  useEffect(() => {
      fetchProductos(); 
    }, []);

  return (
      <Container className='flex-column align-items-center'>
        <h2 className="my-4">Productos</h2>
        <Row>
          {productos.map(producto => (
            <Col key={producto.id_presentacion} md={3}> 
              <CardProducto producto={producto} />
            </Col>
          ))}
        </Row>
      </Container>
    ); 
}

export default Productos;
