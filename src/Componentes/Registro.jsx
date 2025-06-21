import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ApiUsuario } from '../Utilidades/api';

const Register = () => {
  const [formData, setFormData] = useState({
    id_direccion: 1,
    id_rol: 1,
    id_genero: 1,
    dni_usuario: '',
    apellido_usuario: '',
    nombre_usuario: '',
    usuario: '',
    password: '',
    email_usuario: '',
    estado_usuario: true,
    
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(ApiUsuario, formData);
      setSuccess(response.data.message || 'Usuario registrado exitosamente');
      setFormData({
        dni_usuario: '',
        apellido_usuario: '',
        nombre_usuario: '',
        usuario: '',
        password: '',
        email_usuario: '',
      }); // Limpia el formulario
      setTimeout(() => {
        history.push('/Ingreso');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al registrar usuario');
    }
  };

  return (
    <Container className="mt-5 mb-3 reg" >
      <h2>Registro de Usuario</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre_usuario"
            value={formData.nombre_usuario}
            onChange={handleChange}
            placeholder="Ingresa tu nombre"
            required
            className="mx-auto mb-3" style={{ width: '250px' }}
          />
        </Form.Group>

        <Form.Group controlId="formLastName" className="mb-3">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="apellido_usuario"
            value={formData.apellido_usuario}
            onChange={handleChange}
            placeholder="Ingresa tu apellido"
            required
            className="mx-auto mb-3" style={{ width: '250px' }}
          />
        </Form.Group>

        <Form.Group controlId="formDni" className="mb-3">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            name="dni_usuario"
            value={formData.dni_usuario}
            onChange={handleChange}
            placeholder="Ingresa tu DNI"
            required
            className="mx-auto mb-3" style={{ width: '250px' }}
          />
        </Form.Group>

        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            placeholder="Ingresa tu nombre de usuario"
            required
            className="mx-auto mb-3" style={{ width: '250px' }}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email_usuario"
            value={formData.email_usuario}
            onChange={handleChange}
            placeholder="Ingresa tu correo"
            required
            className="mx-auto mb-3" style={{ width: '250px' }}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            required
            className="mx-auto mb-3" style={{ width: '250px' }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mx-auto mb-3" style={{ width: '250px' }}>
          Registrarse
        </Button>
      </Form>
    </Container>
  );
};

export default Register;