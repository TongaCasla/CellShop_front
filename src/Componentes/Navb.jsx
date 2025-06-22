import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BsNavbar from 'react-bootstrap/Navbar';
import { AuthContext } from './AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const NavB = () => {
  const [userRole, setUserRole] = useState(); // Para almacenar el rol del usuario
  const [userName, setUserName] = useState();
  const history = useHistory();

   useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    if (token) {
      try {
        // *** ¡IMPORTANTE! Verificación antes de decodificar ***
        const decodedToken = jwtDecode(token);
        console.log('Token decodificado en NavB:', decodedToken);

        setUserRole(decodedToken.id_rol); // Asume que 'id_rol' está en tu payload
        setUserName(decodedToken.nombre_usuario); // Asume que 'nombre_usuario' está en tu payload
        
      } catch (error) {
        console.error('Error decodificando el token en NavB:', error);
        // Si hay un error al decodificar (token corrupto o inválido), limpia el token
        localStorage.removeItem('jwtToken');
        setUserRole(null);
        setUserName('');
        // navigate('/login'); // Puedes redirigir si quieres que se loguee de nuevo
      }
    } else {
      // No hay token, asegúrate de que el rol y nombre estén vacíos
      setUserRole(3);
      setUserName('Invitado');
    }
  },[history]);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    console.log('Token JWT eliminado del localStorage.');
    setUserRole(3);
    setUserName('Invitado');
     history.push('/Ingreso');
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
            {userRole ===2 && (
              <Nav.Link href="/ProductosCRUD">CRUD Productos</Nav.Link>
            )}
            {(userRole === 1 || userRole === 2) && (
              <Nav.Link href="/Carrito">Carrito</Nav.Link>
            )}
          </Nav>

          <Nav className="ms-auto nav nav-pills nav-fill dark">
            {userRole === 3 && (
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
            {userRole !== 3 && (
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
