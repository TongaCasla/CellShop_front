import React from 'react';
import { useCart } from './CartContext';
import { Table, Button, Container, Form } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  // Calcular el total (usando la fórmula del precio con porcentaje_aumento)
  const total = cart.reduce(
    (sum, producto) =>
      sum +
      producto.precio_compra *
        (1 + producto.porcentaje_aumento / 100) *
        producto.quantity,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
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
            {cart.map((producto) => (
              <tr key={producto.id_presentacion}>
                <td>
                  {producto.producto.nombre_producto}{' '}
                  {producto.nombre_presentacion}
                </td>
                <td>
                  $
                  {(
                    producto.precio_compra *
                    (1 + producto.porcentaje_aumento / 100)
                  ).toFixed(2)}
                </td>
                <td>
                  {producto.quantity}
                </td>
                <td>
                  $
                  {(
                    producto.precio_compra *
                    (1 + producto.porcentaje_aumento / 100) *
                    producto.quantity
                  ).toFixed(2)}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(producto.id_presentacion)}
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
    </div>
  );
};

export default Cart;