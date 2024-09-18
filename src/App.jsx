import React from 'react';
import Navbar from './Componentes/Navbar.jsx'; // Importa el Navbar
import Images from './Componentes/Images.jsx'; // Importa las imagenes
import Buttons from './Componentes/Buttons.jsx'; // Importa los botones
import Blog from './Componentes/Blog.jsx'; // Importa la informacion
import Footer from './Componentes/Footer.jsx'; // Importa la seccion de footer
import './App.css'; // Importa los estilos

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="Coleccion">
        <h1>Nueva Colección de Ropa Primavera 2024</h1>
        <p>"Descubre los colores y estilos que definirán esta temporada."</p>
        <Images />
        <Buttons />
      </section>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
