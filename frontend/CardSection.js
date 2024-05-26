import React from 'react';

const CardSection = ({ cards }) => {
  return (
    <section className="home-cards">
      {cards.map((card, index) => (
        <div key={index}>
          <img src={card.image} alt="" />
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <a href={card.link}>Learn More <i className="fas fa-chevron-right"></i></a>
        </div>
      ))}
    </section>
  );
};

export default CardSection;
