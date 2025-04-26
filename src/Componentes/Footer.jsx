import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
   <> 
        <footer className="bg-dark text-white text-center py-4" sticky= "bottom">
            <Container>
                <p>&copy; 2025 Mi Página Web. Todos los derechos reservados.</p>
            </Container>
        </footer>
    </>
);

export default Footer;