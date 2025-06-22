import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Carga el estado inicial desde localStorage, o usa los valores por defecto
  const [usuarioData, setUsuarioData] = useState(() => {
    const savedUsuarioData = localStorage.getItem('usuarioData');
    return savedUsuarioData
      ? JSON.parse(savedUsuarioData)
      : { usuario: 'invitado', id_rol: 2 };
  });

  // Guarda usuarioData en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
  }, [usuarioData]);

  return (
    <AuthContext.Provider value={{ usuarioData, setUsuarioData }}>
      {children}
    </AuthContext.Provider>
  );
};