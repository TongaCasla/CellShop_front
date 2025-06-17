import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Link  from 'react-router-dom/cjs/react-router-dom';

const CardSinStock = ({ producto }) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-4 flex">
      <Card.Img variant="top" src= {`/img/${producto.nombre_presentacion}.webp`} style={{ height: '350px', objectFit: 'cover'}}  />
      <Card.Body>
        <Card.Title> {producto.producto.nombre_producto} {producto.nombre_presentacion}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>
          <strong>SIN STOCK</strong>
          <br></br>
          <br></br>
          <br></br>
          
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default CardSinStock;