import React from 'react';

import { Table, Button } from 'react-bootstrap';

const Carrito = () => {

  return (
    <p>Wep</p>
    /*
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
              <tr key={producto.id_presentacion}>
                <td>{producto.producto.nombre_producto} {producto.nombre_presentacion}</td>
                <td>${producto.precio_compra *(1+producto.porcentaje_aumento/100)}</td>
                <td>{producto.cantidad}</td>
                <td>${producto.precio_compra *(1+producto.porcentaje_aumento/100) * producto.cantidad}</td>
                <td>
                  <Button variant="danger" onClick={() => quitarDelCarrito(producto.id_presentacion)}>
                    Quitar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table> 
      )}
      <h4>Total: ${total}</h4>
    </div>
   */
  );  
};

export default Carrito;