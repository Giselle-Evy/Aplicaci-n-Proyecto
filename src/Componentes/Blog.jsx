import React from 'react';

const Blog = () => {
  return (
    <section className="blog">
      <h2>Noticias y Tendencias de Moda 2024</h2>
      <div className="blog-cards">
        
        <div className="blog-card">
          <h3>Colores que marcarán la temporada Primavera 2024</h3>
          <p>Los tonos pastel y los colores vibrantes como el lavanda y el coral estarán en todas partes. ¡Combina con neutros para un look equilibrado!</p>
        </div>
       
        <div className="blog-card">
          <h3>Texturas que definen el 2024</h3>
          <p>Desde tejidos suaves como el terciopelo hasta materiales ligeros como el lino, las texturas son clave para lograr un look moderno y cómodo.</p>
        </div>
       
        <div className="blog-card">
          <h3>Materiales sostenibles en nuestra nueva línea</h3>
          <p>Nuestra colección 2024 utiliza algodón orgánico y fibras recicladas, demostrando que el estilo y la sostenibilidad pueden ir de la mano.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
