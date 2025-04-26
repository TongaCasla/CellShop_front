import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BsNavbar from 'react-bootstrap/Navbar';



const NavB = () => {
  return (
    <>
        <BsNavbar  bg="dark" data-bs-theme="dark">
        <Container>
            <BsNavbar.Brand href="/">
            <img alt='' src="/logoCS.svg" width="100" height="70"/>
            </BsNavbar.Brand>
            <BsNavbar.Toggle aria-controls="navbar-nav" />
            <BsNavbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"> 
                <Nav.Link href="/Productos">Productos</Nav.Link>
                <Nav.Link href="/ProductosCRUD">CRUD Productos</Nav.Link>
                <Nav.Link href="/Registro">Registro</Nav.Link>
                <Nav.Link href="/Ingreso">Ingreso</Nav.Link>
              </Nav>
            </BsNavbar.Collapse>
        </Container>
        </BsNavbar>
       
    </>
  )
}
export default NavB;
