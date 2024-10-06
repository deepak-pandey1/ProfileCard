/* eslint-disable no-unused-vars */
import React from 'react';
import './SocialIcons.css'; // Import the CSS file

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://wa.me/+919667750250" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="https://www.linkedin.com/in/deepak-pandey-193177324/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.instagram.com/the_deepak_pandey" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://github.com/deepak-pandey1" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
