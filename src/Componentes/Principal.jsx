import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';

const Principal = () => {
  return (
    <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Encabezado principal */}
      <header style={{ backgroundColor: '#1E3A8A', color: 'white', textAlign: 'center', padding: '2rem' }}>
        <h1>Bienvenido a CellShop</h1>
        <p>¡Encuentra los mejores celulares y accesorios aquí!</p>
      </header>

      {/* Carrusel de imágenes */}
      <Carousel className="my-0" interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/banner1.png" alt="Primer slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/banner2.png" alt="Segundo slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/img/banner3.png" alt="Tercer slide" />
        </Carousel.Item>
      </Carousel>

      {/* Sección de características */}
      <Container fluid className="my-0 p-3">
        <Row className="g-0">
          {/* Banner 1 */}
          <Col 
            xs={12} md={6} 
            className="position-relative d-flex align-items-center"
            style={{
              backgroundColor: '#dc2626',
              height: '400px',
              backgroundImage: "url('/img/red.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              padding: '2rem',
              border: '15px solid white',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ zIndex: 2, color: 'white', textAlign: 'left' }}>
              <h6>Ofertas de temporada</h6>
              <h1 className="fw-bold">Hasta<br />30% menos</h1>
              <p>En Smartphones seleccionados</p>
              {/* <Button variant="light" className="rounded-pill mt-3 px-4">Tienda</Button> */}
            </div>
          </Col>

          {/* Banner 2 */}
          <Col 
            xs={12} md={6}
            className="position-relative d-flex align-items-center"
            style={{
              backgroundColor: '#7c3aed',
              height: '400px',
              backgroundImage: "url('/img/purple.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat',
              padding: '2rem',
              border: '15px solid white',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ zIndex: 2, color: 'white', textAlign: 'left' }}>
              <h6>Recién llegados</h6>
              <h1 className="fw-bold">Lleva tu<br />sonido<br />dondequieras</h1>
              <p>Mejores marcas de audífonos</p>
              {/* <Button variant="light" className="rounded-pill mt-3 px-4">Comprar</Button> */}
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light py-5">
        <Row className="text-center">
          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <div style={{ width: '40px', margin: '0 auto 10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
              </svg>
            </div>
            <h6>Entrega rápida</h6>
          </Col>

          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <div style={{ width: '40px', margin: '0 auto 10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-box-seam" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
                    </svg>
            </div>
            <h6>Envío gratis en compras de más de $499</h6>
          </Col>

          <Col xs={12} md={3} className="mb-4 mb-md-0">
            <div style={{ width: '40px', margin: '0 auto 10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-percent" viewBox="0 0 16 16">
                <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0M4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            </div>
            <h6>Precios bajos garantizados</h6>
          </Col>

          <Col xs={12} md={3}>
            <div style={{ width: '40px', margin: '0 auto 10px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-clock-history" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"/>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"/>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"/>
              </svg>
            </div>
            <h6>Disponible para ti 24/7</h6>
          </Col>
        </Row>
      </Container>

      <hr className="featurette-divider" />
        
      <Container className="my-5">
        {/* Sección de productos */}
        <Row className="featurette my-5 align-items-center">
          <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
            <img src="/img/cell.png" alt="Celulares" className="featurette-image img-fluid" style={{ width: '400px', height: '400px', objectFit: 'cover' }}/>
          </Col>
          <Col xs={12} md={8} className="d-flex flex-column justify-content-center text-center text-md-center">
            <h2 className="featurette-heading">¡El Mundo de los Celulares!</h2>
            <p className="lead">Los celulares han revolucionado nuestras vidas de una manera asombrosa, convirtiéndose en una herramienta indispensable en todos los aspectos de nuestro día a día. Desde mantenerse conectado con amigos y familiares hasta realizar tareas profesionales, la tecnología de los celulares.
            En el mundo de los dispositivos móviles, la innovación nunca se detiene. Los celulares más nuevos no solo ofrecen más potencia y características, sino que también mejoran aspectos esenciales de la vida diaria, como la productividad, el entretenimiento, la conectividad y la seguridad. Si buscas un dispositivo que se adapte a tu estilo de vida, te permita ser más eficiente y te ofrezca entretenimiento y calidad sin límites, ¡un celular de última generación es la respuesta!</p>
          </Col>
        </Row>

        <hr className="featurette-divider" />
        
        <Row className="featurette my-5 align-items-center flex-md-row-reverse">
          <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
            <img src="/img/tablet.jpeg" alt="Accesorios" className="featurette-image img-fluid" style={{ width: '400px', height: '400px', objectFit: 'cover' }}/>
          </Col>
          <Col xs={12} md={8} className="d-flex flex-column justify-content-center text-center text-md-center">
            <h2 className="featurette-heading">¡Redescubre lo que Puedes Hacer con una Tablet!</h2>
            <p className="lead">Las tablets ya no son solo pantallas grandes para ver videos: se han convertido en herramientas potentes, versátiles y elegantes que transforman la forma en que estudias, trabajas, creas contenido y te diviertes. Brinda libertad, versatilidad y potencia, todo en un solo dispositivo.</p>
          </Col>
        </Row>

        <hr className="featurette-divider" />
        
        <Row className="featurette my-5 align-items-center">
          <Col xs={12} md={4} className="d-flex justify-content-center mb-3 mb-md-0">
            <img src="/img/auriculares.png" alt="Ofertas" className="featurette-image img-fluid" style={{ width: '400px', height: '400px', objectFit: 'cover' }}/>
          </Col>
          <Col xs={12} md={8} className="d-flex flex-column justify-content-center text-center text-md-center">
            <h2 className="featurette-heading">Auriculares Inalámbricos: Libertad Total para Tu Día a Día</h2>
            <p className="lead">Los auriculares inalámbricos no son solo una tendencia, son una mejora real en comodidad, calidad y estilo. Ya sea que los uses para entrenar, trabajar, viajar o simplemente disfrutar de buena música, ofrecen ventajas que los convierten en una excelente inversión.</p>
          </Col>
        </Row>

        <hr className="featurette-divider" />
      </Container>
    </div>
  );
};

export default Principal;
