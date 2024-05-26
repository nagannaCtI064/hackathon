import React from 'react';

const Section = () => {
  return (
    <section className="xbox">
      <div className="content">
        <h2>Experience Drama at the Theater Workshop: Your Stage Awaits!</h2>
        <p>Unleash Your Inner Rockstar!</p>
        <a href="/register" className="btn" style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', display: 'inline-block' }}>
          Join Now <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Section;
