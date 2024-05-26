import React from 'react';
import { Link } from 'react-router-dom'; 

const NavigationBar = () => {
  return (
    <div className="main-nav">
      <img src="https://tse4.mm.bing.net/th?id=OIP.UlAnO39WgY--Uk3l2ugnQAAAAA&pid=Api&P=0&h=180" alt="Gitam university" className="logo" />
      <ul className="main-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About us</Link></li>
        <li><Link to="/eventlist">Events</Link></li>
        <li><Link to="/gallery">Gallery</Link></li> {}
        <li><Link to="/contact">Contact us</Link></li>
        <li><Link to="/login" className="login-btn">Login</Link></li>
      </ul>
      <ul className="right-menu">
        <li><a href="#"><i className="fas fa-search"></i></a></li>
        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
      </ul>
    </div>
  );
};

export default NavigationBar;
