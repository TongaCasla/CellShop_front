import React from 'react';
import { Form, Button, Container, Row, Col, FloatingLabel } from 'react-bootstrap';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '65vh' }}>
      <Container className="m-5 reg">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Ingreso de Usuario</h2>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="formEmail" label="Email" className="mx-auto mb-3" style={{ width: '250px' }}>
                <Form.Control type="email" placeholder="Email" required />
              </FloatingLabel>

              <FloatingLabel controlId="formPassword" label="Contraseña" className="mx-auto mb-3" style={{ width: '250px' }}>
                <Form.Control type="password" placeholder="Contraseña" required />
              </FloatingLabel>

              <Button variant="primary" type="submit" className="mx-auto mb-3 d-block">
                Ingreso
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
