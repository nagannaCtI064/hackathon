import React from 'react';

const Showcase = () => {
  return (
    <header className="showcase" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', textAlign: 'center', color: 'white' }}>
      <h2>Enhancing Personal Development</h2>
      <p style={{ color: 'white' }}>
        Participation in visual arts, music, and dance allows students to express their creativity and explore their artistic talents.
      </p>
      <a href="/register" className="btn" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block' }}>
        Register Now <i className="fas fa-chevron-right"></i>
      </a>
    </header>
  );
};

export default Showcase;
