import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

 const Principal = () => {
  return (
    <div>
      <header className="bg-primary text-white text-center p-5">
        <h1>Bienvenido a Nuestro Sitio</h1>
        <p>Explora nuestras increíbles características</p>
      </header>

      <Container className="my-5">
        <hr className="featurette-divider" />
        <Row className="featurette my-5">
          <Col md={6}>
            <img src="/img/cell.png" alt="Feature 1" className="featurette-image img-fluid" />
          </Col>
          <Col md={6}>
            <h2 className="featurette-heading">Característica 1</h2>
            <p className="lead">Aquí puedes colocar una descripción más detallada de esta característica. Haz que tu usuario se interese más.</p>
          </Col>  
        </Row>
        <hr className="featurette-divider" />
        <Row className="featurette my-5">
          <Col md={6} order={{ md: 2 }}>
            <h2 className="featurette-heading">Característica 2</h2>
            <p className="lead">Esta es otra característica de tu producto. Puedes agregar más información sobre lo que la hace especial.</p>
          </Col>
          <Col md={6} order={{ md: 1 }}>
            <img src="" alt="Feature 2" className="featurette-image img-fluid" />
          </Col>
        </Row>
        <hr className="featurette-divider" />
        <Row className="featurette my-5">
          <Col md={6}>
            <img src="" alt="Feature 3" className="featurette-image img-fluid" />
          </Col>
          <Col md={6}>
            <h2 className="featurette-heading">Característica 3</h2>
            <p className="lead">Descripción de la tercera característica. Usa este espacio para detallar lo que hace tu producto único.</p>
          </Col>
        </Row>
        <hr className="featurette-divider" />
      </Container>
    </div>
  )
}
export default Principal;