import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
      <li><a><img src="/imagenes/tienda.png" alt="Logo" className="navbar-logo" />Glossier</a></li>
        <li><a>Inicio</a></li>
        <li><a>Acerca de nosotros</a></li>
        <li><a>Servicios</a></li>
        <li><a>Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
