// src/components/About.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './About.css'; // Import your CSS file
import NavBar from "../Components/NavigationBar"
import ScrollArrows from "../Components/ScrollArrows";

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using Email.js
    /*emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
      	*/
    // Clear the form fields after submission
    setFormData({
      name: '',
      comment: '',
    });
  };

  return (
    <div>
      <NavBar/>
      <ScrollArrows/>
      <h2>About Page</h2>
      <div className="video-container">
          <iframe
            width="560" // Set the width as needed
            height="315" // Set the height as needed
            src="https://www.youtube.com/embed/5A8lEZbDQZg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      <form onSubmit={handleSubmit} className="about-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default About;
