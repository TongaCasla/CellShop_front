import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BsNavbar from 'react-bootstrap/Navbar';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

const NavB = () => {
  const { usuarioData, setUsuarioData } = useContext(AuthContext);
  const history = useHistory();

  console.log('usuarioData en NavB:', usuarioData); // Depura

  const handleLogout = () => {
    setUsuarioData({
      usuario: 'invitado',
      id_rol: 3,
    });
    localStorage.removeItem('usuarioData'); // Limpia localStorage
     history.push('/');
  };

  return (
    <BsNavbar bg="dark" data-bs-theme="dark">
      <Container>
        <BsNavbar.Brand href="/">
          <img alt="" src="/logoCS.svg" width="150" height="110" />
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav nav-underline dark">
            <Nav.Link href="/Productos">Productos</Nav.Link>
            {usuarioData.id_rol === 2 && (
              <Nav.Link href="/ProductosCRUD">CRUD Productos</Nav.Link>
            )}
            {usuarioData.id_rol === 2 && (
              <Nav.Link href="/Carrito">Carrito</Nav.Link>
            )}
          </Nav>

          <Nav className="ms-auto nav nav-pills nav-fill dark">
            {usuarioData.id_rol === 3 && (
              <>
                <Nav.Link className="nav-link" href="/Registro">
                  Registro
                </Nav.Link>
                <Nav.Link
                  className="nav-link active"
                  aria-current="page"
                  href="/Ingreso"
                >
                  Ingreso
                </Nav.Link>
              </>
            )}
            {usuarioData.id_rol !== 3 && (
              <Nav.Link as="button" className="nav-link" onClick={handleLogout}>
                Logout
              </Nav.Link>
            )}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default NavB;
