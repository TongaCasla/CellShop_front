import React, { useState, useContext } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ApiUsuario } from '../Utilidades/api';
import { AuthContext } from './AuthContext';

const Login = () => {
  const { setUsuarioData } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    usuario: '',
    password: '',
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
      const response = await axios.post(`${ApiUsuario}login`, formData);
      console.log('Respuesta del backend:', response.data);
      setUsuarioData({
      usuario: response.data.user.usuario,
      id_rol: Number(response.data.user.id_rol),
      id_usuario: response.data.user.id_usuario,
      });
      setSuccess(response.data.message || 'Inicio de sesión exitoso');
     
      setFormData({ usuario: '', password: '' }); // Limpia el formulario
      setTimeout(() => {
         history.push('/');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.error || 'Error al iniciar sesión');
    }
  };

  return (
    <Container className="mt-5 mb-3 reg">
      <h2>Iniciar Sesión</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleSubmit}>
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
          Iniciar Sesión
        </Button>
      </Form>
    </Container>
  );
};

export default Login;