import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
      <li><a><img src="/imagenes/tienda.png" alt="Logo" className="navbar-logo" />Glossier</a></li>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Acerca de nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
