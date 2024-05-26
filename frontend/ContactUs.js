import React from 'react';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p><strong>Email:</strong> info@example.com</p>
        <p><strong>Phone:</strong> +1234567890</p>
        <p><strong>Address:</strong> 123 Main Street, City, Country</p>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com/gitamdeemeduniversity/"><img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" /></a>
        <span className="social-space"></span>
        <a href="https://x.com/GITAMUniversity"><img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" /></a>
        <span className="social-space"></span>
        <a href="https://www.linkedin.com/school/gitam-deemed-university/?originalSubdomain=in"><img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" /></a>
      </div>
    </div>
  );
};

export default ContactUs;
