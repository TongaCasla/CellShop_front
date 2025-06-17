// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Proveedor del carrito
export const CartProvider = ({ children }) => {
  // Estado inicial del carrito, cargado desde localStorage
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Añadir producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id_presentacion === product.id_presentacion);
      if (existingProduct) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        return prevCart.map((item) =>
          item.id_presentacion === product.id_presentacion ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Si es un producto nuevo, añadirlo con quantity: 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (id_presentacion) => {
    console.log('Eliminando producto con id_presentacion:', id_presentacion); // Para depuración
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id_presentacion !== id_presentacion);
      console.log('Carrito actualizado:', updatedCart); // Para depuración
      return updatedCart;
    });
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id_presentacion === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  // Calcular el precio total
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);