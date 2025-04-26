import React from 'react'
import { useState } from 'react';
import { Form, Button, Container, Row, Col, FloatingLabel } from 'react-bootstrap';

const Registro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <Container className="m-5 reg">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center mb-4">Registro de Usuario</h2>
          <Form onSubmit={handleSubmit}>

            <FloatingLabel controlId="formNombre" label="Nombre"  className="mx-auto mb-3" style={{ width: '250px' }}>
              <Form.Control type="text" placeholder="Nombre"  required />
            </FloatingLabel>

            <FloatingLabel controlId="formApellido" label="Apellido"  className="mx-auto mb-3" style={{ width: '250px' }}>
              <Form.Control type="text" placeholder="Apellido" required />
            </FloatingLabel>

            <FloatingLabel controlId="formEmail" label="Email"  className="mx-auto mb-3" style={{ width: '250px' }}>
              <Form.Control type="email" placeholder="Email"  required />
            </FloatingLabel>

            <FloatingLabel controlId="formPassword" label="Contraseña"  className="mx-auto mb-3" style={{ width: '250px' }}>
              <Form.Control type="password" placeholder="Contraseña" required />
            </FloatingLabel>

            <FloatingLabel controlId="formFechaNacimiento" label="Fecha de Nacimiento"  className="mx-auto mb-3" style={{ width: '250px' }}>
              <Form.Control type="date" placeholder="Fecha de nacimiento" required />
            </FloatingLabel>

            

            <Button variant="primary" type="submit" className="mx-auto mb-3">
              Registrarse
            </Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;

