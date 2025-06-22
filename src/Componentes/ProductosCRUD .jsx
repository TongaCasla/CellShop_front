import React from 'react'
import { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { ApiAgregarPres, ApiCategoria, ApiProducto, ApiTipoProducto } from '../Utilidades/api';


const ProductosCRUD = () => {
  
  const [productos, setProductos] = useState([]);
  const [tipoproductos, setTipoProductos] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [formTipo, setFormTipo] = useState("");
  const [nuevaPres, setNuevaPres] = useState({

    
    nombre_presentacion: '',
    descripcion: '',
    stock: '',
    precio_compra: '',
    porcentaje_aumento: '',
    id_producto: '', 
  });
  
 const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
  };

  const [nuevoProducto, setNuevoProducto] = useState({
    nombre_producto: '',
    id_categoria: '',
    estado_producto: 'activo'
  });

  const [formData, setFormData] = useState({
    producto: { nombre: "" },
    presentacion: { nombre: "" },
    modificar: { nombre: "" }
  });
  const handleChangeProducto = (e) => {
    const { name, value } = e.target;
    setNuevoProducto((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangePres = (e) => {
    const { name, value } = e.target;
    setNuevaPres((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleModificar = (producto) => {
    setNuevaPres({
      nombre_presentacion: producto.nombre_presentacion,
      descripcion: producto.descripcion,
      stock: producto.stock,
      precio_compra: producto.precio_compra,
      porcentaje_aumento: producto.porcentaje_aumento,
      id_producto: producto.producto.id_producto,
      id_presentacion: producto.id_presentacion,
    });
    setFormTipo("modificar");
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

   const [errorMensaje, setErrorMensaje] = useState('');

  const agregarPresentacion = async () => {
    const error = validarCamposPresentacion();
     if (error) {
    setErrorMensaje(error);
    setTimeout(() => setErrorMensaje(''), 3000);
    return;
    }
    try {
      
      const response = await axios.post(`${ApiAgregarPres}${nuevaPres.id_producto}/presentacion`, nuevaPres,config);
      
      setNuevaPres({
        nombre_presentacion: '',
        descripcion: '',
        stock: '',
        precio_compra: '',
        porcentaje_aumento: '',
        id_producto: '',
      }); 
      setErrorMensaje('');
      await fetchProductos();
      handleClose();
    } catch (error) {
      console.error('Error al agregar producto:', error);
      setErrorMensaje(error.response.data.message);
      setTimeout(() => {
      setErrorMensaje('');
      }, 3000);
      
    }
  };
  const modificarPresentacion = async (id_presentacion,id_producto) => {
    const error = validarCamposPresentacion();
     if (error) {
    setErrorMensaje(error);
    setTimeout(() => setErrorMensaje(''), 3000);
    return;
    }
    try {
      const response = await axios.put(`${ApiAgregarPres}${id_producto}/presentacion/${id_presentacion}`,nuevaPres,config);
      
      setNuevaPres({
        id_presentacion: '',
        nombre_presentacion: '',
        descripcion: '',
        stock: '',
        precio_compra: '',
        porcentaje_aumento: '',
        id_producto: ''
        
      });  
      await fetchProductos();
      handleClose();
    } catch (error) {
      console.error('Error al agregar producto:', error);
      setErrorMensaje(error.response.data.message);
      setTimeout(() => {
      setErrorMensaje('');
      }, 3000);
    }
  };
  const agregarProducto = async () => {
    const error = validarCamposProducto();
      if (error) {
        setErrorMensaje(error);
        setTimeout(() => setErrorMensaje(''), 3000);
        return;
    }
    try {
      const response = await axios.post(ApiTipoProducto,nuevoProducto,config);
      console.log(response);
      if(response){
         await fetchProductos();
         await fetchTipoProductos();
         setNuevoProducto({
        nombre_producto: '',
        id_categoria: '',
        estado_producto: 'activo'
          
        }); 
         handleClose();
      }else{
        return response;
      }
     
    } catch (error) {
      console.error('Error al agregar producto:', error);
      setErrorMensaje(error.response.data.message);
      setTimeout(() => {
      setErrorMensaje('');
      }, 3000);
    }
  };
  // Función para obtener productos desde la API
  const fetchProductos = async () => {
    try {
      const response = await axios.get(ApiProducto); // ← Cambia esta URL
      setProductos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setLoading(false);
    }
  };
  const fetchTipoProductos = async () => {
    try {
      const response = await axios.get(ApiTipoProducto); // ← Cambia esta URL
      setTipoProductos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setLoading(false);
    }
  };
  const fetchCategoria = async () => {
    try {
      const response = await axios.get(ApiCategoria); // ← Cambia esta URL
      setCategoria(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener productos:', error);
      setLoading(false);
    }
  };

  useEffect(() => { // Se ejecuta una sola vez cuando carga el componente
    fetchProductos();
    fetchTipoProductos();
    fetchCategoria();
  }, []);

  const forms = {
    producto: {
      title: "Agregar Producto",
      content: (
        <Form>
            <Form.Group>
              <Form.Label>Categoria</Form.Label>
              <Form.Control
                as="select"
                name="id_categoria"
                value={nuevoProducto.id_categoria}
                onChange={handleChangeProducto}
              >
                <option value="">Seleccione un tipo</option>
                {categoria.map((cat) => (
                  <option key={cat.id_categoria} value={cat.id_categoria}>
                    {cat.nombre_categoria}
                  </option>
                ))}
              </Form.Control>
            </Form.Group> 
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre_producto"
                value={nuevoProducto.nombre_producto}
                onChange={handleChangeProducto}
              />
            </Form.Group>
            <Form.Group>
                <Button variant="secondary" className='mr-3' onClick={handleClose}>
                Cancelar
                </Button>
                <Button variant="primary"  className='m-3' onClick={agregarProducto}>
                Agregar
               </Button>
               {errorMensaje && (<Alert variant="danger">{errorMensaje}</Alert>)}
          </Form.Group>
          </Form>
      ),
    },
    presentacion: {
      title: "Agregar Presentación",
      content: (
        <Form>
           <Form.Group>
              <Form.Label>Tipo de producto</Form.Label>
              <Form.Control
                as="select"
                name="id_producto"
                value={nuevaPres.id_producto}
                onChange={handleChangePres}
              >
                <option value="">Seleccione un tipo</option>
                {tipoproductos.map((tipo) => (
                  <option key={tipo.id_producto} value={tipo.id_producto}>
                    {tipo.nombre_producto} 
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre_presentacion"
                value={nuevaPres.nombre_presentacion}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                value={nuevaPres.descripcion}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="precio_compra"
                value={nuevaPres.precio_compra}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Porcentaje de aumento</Form.Label>
              <Form.Control
                type="number"
                name="porcentaje_aumento"
                value={nuevaPres.porcentaje_aumento}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={nuevaPres.stock}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
                <Button variant="secondary" className='mr-3' onClick={handleClose}>
                Cancelar
                </Button>
                <Button variant="primary" className='m-3' onClick={agregarPresentacion}>
                Agregar
               </Button>
               {errorMensaje && (<Alert variant="danger">{errorMensaje}</Alert>)}
          </Form.Group>
          </Form>
      ),
    },
    modificar: {
      title: "Modificar Presentación",
      content: (
        <Form>
           <Form.Group>
              <Form.Label>Tipo de producto</Form.Label>
              <Form.Control
                as="select"
                name="id_producto"
                value= {nuevaPres.id_producto}
                onChange={handleChangePres}
                disabled
              >
                <option value="">Seleccione un tipo</option>
                {tipoproductos.map((tipo) => (
                  <option key={tipo.id_producto} value={tipo.id_producto}>
                    {tipo.nombre_producto} 
                  </option>
                ))} 
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre_presentacion"
                value={nuevaPres.nombre_presentacion}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                name="descripcion"
                value={nuevaPres.descripcion}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                name="precio_compra"
                value={nuevaPres.precio_compra}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Porcentaje de aumento</Form.Label>
              <Form.Control
                type="number"
                name="porcentaje_aumento"
                value={nuevaPres.porcentaje_aumento}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                name="stock"
                value={nuevaPres.stock}
                onChange={handleChangePres}
              />
            </Form.Group>
            <Form.Group>
                <Button variant="secondary" className='mr-3' onClick={handleClose}>
                Cancelar
                </Button>
                <Button variant="primary" className='m-3' onClick={() => modificarPresentacion(nuevaPres.id_presentacion, nuevaPres.id_producto)}>
                Modificar
               </Button>
               {errorMensaje && (<Alert variant="danger">{errorMensaje}</Alert>)}
          </Form.Group>
          </Form>
      ),
    },
  };
  
  const handleShow = (tipo) => {
    setFormTipo(tipo);
    setShowModal(true);
    
    if (tipo === "presentacion") {
      setNuevaPres({
        
        nombre_presentacion: '',
        descripcion: '',
        stock: '',
        precio_compra: '',
        porcentaje_aumento: '',
        id_producto: ''
      });
    } 
  };

  const eliminarPresentacion = async (id_presentacion,id_producto) => {
    try {
      await axios.delete(`${ApiAgregarPres}${id_producto}/presentacion/${id_presentacion}`,config);
      await fetchProductos();
      handleClose();
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  const validarCamposPresentacion = () => {
    const camposObligatorios = [
      'nombre_presentacion',
      'descripcion',
      'stock',
      'precio_compra',
      'porcentaje_aumento',
      'id_producto'
    ];

    for (let campo of camposObligatorios) {
      if (!nuevaPres[campo] || nuevaPres[campo].toString().trim() === "") {
          return `El campo "${campo.replace('_', ' ')}" es obligatorio.`;
      }
    }

    return null; // sin errores
  };

  const validarCamposProducto = () => {
    const camposObligatorios = ['id_categoria', 'nombre_producto'];

    for (let campo of camposObligatorios) {
      if (!nuevoProducto[campo] || nuevoProducto[campo].toString().trim() === '') {
        return `El campo "${campo.replace('_', ' ')}" es obligatorio.`;
      }
    }

    return null;
  };

  return (
    <div className="container mt-5">
      <h2>Lista de Productos</h2>
      <Button variant="primary"  onClick={() => handleShow("producto")} className="m-3">
        Agregar Producto
      </Button>
      <Button variant="primary" onClick={() => handleShow("presentacion")} className="m-3">
        Agregar Presentacion
      </Button>


      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Cargando productos...</p>
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Precio Venta</th>
              <th>Stock</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={producto.id_presentacion}>
                <td>{producto.id_presentacion}</td>
                <td>{producto.producto.nombre_producto} {producto.nombre_presentacion}</td>
                <td> $ {producto.precio_compra}</td> 
                <td> $ {producto.precio_compra *(1+producto.porcentaje_aumento/100)}</td>
                <td>{producto.stock}</td> 
                <td>
                  <img src={`/img/${producto.nombre_presentacion}.webp`}  alt="Producto" width="50" height="50" />
                </td>
                <td>
                  <Button variant="success" className='m-1' onClick={() => handleModificar(producto)}>
                    Modificar
                  </Button>
                  <Button variant="danger" onClick={() => eliminarPresentacion(producto.id_presentacion,producto.producto.id_producto)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

    

      {/* Modal para agregar presentacion */}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{forms[formTipo]?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {forms[formTipo]?.content}
        </Modal.Body>
      </Modal>
      
    </div>
  );
};

export default ProductosCRUD;