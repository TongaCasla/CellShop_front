import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Link  from 'react-router-dom/cjs/react-router-dom';

const CardProducto = ({ product }) => {
  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src= "/logoCS.svg" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        <Button as={Link} to={`/producto/${product.id}`} variant="primary">
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  )
}
export default CardProducto;
