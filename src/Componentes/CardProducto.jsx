import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Link  from 'react-router-dom/cjs/react-router-dom';
import  {useCart}  from './CartContext';


const CardProducto = ({ producto }) => {
  const { addToCart } = useCart();
  return (
    <Card style={{ width: '18rem' }} className="mb-4 flex">
      <Card.Img variant="top" src= {`/img/${producto.nombre_presentacion}.webp`} style={{ height: '350px', objectFit: 'cover'}}  />
      <Card.Body>
        <Card.Title> {producto.producto.nombre_producto} {producto.nombre_presentacion}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>
          <strong>$ {producto.precio_compra *(1+producto.porcentaje_aumento/100)}</strong>
        </Card.Text>
        <Button  onClick={() => {
          addToCart(producto)
          console.log('Agregando producto:', { ...producto, cantidad: 1 }); }}
           variant="primary">
          Agregar al Carrito
        </Button>
      </Card.Body>
    </Card>
  )
}
export default CardProducto;
