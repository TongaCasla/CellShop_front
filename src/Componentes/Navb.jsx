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
            <img alt='' src="/logoCS.svg" width="150"height="110"></img>
            </BsNavbar.Brand>
            <BsNavbar.Toggle aria-controls="navbar-nav" />
            <BsNavbar.Collapse id="basic-navbar-nav">             

            <Nav className="me-auto nav nav-underline dark" class="nav nav-underline mx-auto">
              <Nav.Link href="/Productos">Productos</Nav.Link>
              <Nav.Link href="/ProductosCRUD">CRUD Productos</Nav.Link>
              <Nav.Link href="/Carrito">Carrito</Nav.Link>
            </Nav>
            
            <Nav className="ms-auto nav nav-pills nav-fill dark" class="nav nav-pills nav-fill">
              <Nav.Link class="nav-link " href="/Registro">Registro</Nav.Link>             
              <Nav.Link class="nav-item nav-link active" aria-current="page" href="/Ingreso">Ingreso</Nav.Link>
            </Nav>
              
            </BsNavbar.Collapse>
        </Container>
        </BsNavbar>
       
    </>
  )
}
export default NavB;
