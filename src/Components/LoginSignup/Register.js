import React, { useState } from 'react';
import './LoginSignup.css';


export const Register = () => {
  const [formData, setFormData] = useState({
    fname: '', lname: '', email: '', phone_number: '', password: '', location: '', user_type: 'client'
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fname) tempErrors.fname = "First name is required.";
    if (!formData.lname) tempErrors.lname = "Last name is required.";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) tempErrors.email = "Invalid email format.";
    if (!formData.phone_number.match(/^\d{10}$/)) tempErrors.phone_number = "Phone number must be 10 digits.";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters.";
    if (!formData.location) tempErrors.location = "Location is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    console.log("Registering: ", formData);

    // Simulate an API request
    setTimeout(() => {
      setLoading(false);
      alert("Registration Successful!");
    }, 2000);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fname" placeholder="First Name" value={formData.fname} onChange={handleChange} required />
        {errors.fname && <span className="error">{errors.fname}</span>}

        <input type="text" name="lname" placeholder="Last Name" value={formData.lname} onChange={handleChange} required />
        {errors.lname && <span className="error">{errors.lname}</span>}

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        {errors.email && <span className="error">{errors.email}</span>}

        <input type="text" name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
        {errors.phone_number && <span className="error">{errors.phone_number}</span>}

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        {errors.password && <span className="error">{errors.password}</span>}

        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        {errors.location && <span className="error">{errors.location}</span>}

        <select name="user_type" value={formData.user_type} onChange={handleChange} required>
          <option value="client">Client</option>
          <option value="technician">Technician</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};
