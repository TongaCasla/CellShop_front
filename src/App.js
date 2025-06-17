import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react'

import Footer from './Componentes/Footer';
import  Productos  from './Componentes/Productos';
import Principal from "./Componentes/Principal";
import NavB from './Componentes/Navb';
import Registro  from './Componentes/Registro';
import Login from './Componentes/Login';
import ProductosCRUD from './Componentes/ProductosCRUD ';
import Cart from './Componentes/Cart';
import { CartProvider } from './Componentes/CartContext';





function App() {
  return (
    <CartProvider>
    <div className='App'>
        
        <NavB/>
      
        <Router>
          <Switch>   
            <Route path="/" exact component={Principal} />
            <Route path="/Productos" component={Productos} />
            <Route path="/ProductosCRUD" component={ProductosCRUD} />
             <Route path="/Carrito" component={Cart} />
            <Route path="/Registro" component={Registro} />
            <Route path="/Ingreso" component={Login} />
          </Switch>
        </Router>

        <Footer/>

       
    </div>
    </CartProvider>
  );
}

export default App;
