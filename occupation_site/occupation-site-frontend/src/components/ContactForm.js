import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the backend
    axios.post('/api/contact/', formData)
      .then((response) => {
        console.log('Message sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
