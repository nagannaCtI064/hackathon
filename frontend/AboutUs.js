import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p>Welcome to our university's About Us page. Here, you can learn more about our institution, our vision, and our team.</p>
      
      <div className="team">
        <h3>Meet Our Team</h3>
        <div className="team-member">
          <div className="member-info">
            <h4>Director</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
          <img src="https://via.placeholder.com/150" alt="Director" />
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="HOD" />
          <div className="member-info">
            <h4>Head of Department</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          </div>
        </div>
        {}
      </div>

      <div className="mission-vision">
        <h3>Our Mission & Vision</h3>
        <p>Our mission is to provide quality education and foster a nurturing environment for our students...</p>
        <p>Our vision is to become a leading institution in the field of education and research...</p>
      </div>
    </div>
  );
};

export default AboutUs;
