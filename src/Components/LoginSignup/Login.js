import React, { useState } from 'react';
import './LoginSignup.css';

export const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "", user_type: "client" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!loginData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) tempErrors.email = "Invalid email format.";
    if (loginData.password.length < 6) tempErrors.password = "Password must be at least 6 characters."; 
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      // Simulating login API request (Replace with actual authentication logic)
      console.log("Logging in:", loginData);
      setTimeout(() => {
        setLoading(false);
        alert("Login Successful!");
      }, 2000);
    } catch (error) {
      setErrors({ general: "Invalid email or password." });
      console.error("Login Error:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleChange} required/>
        {errors.email && <span className="error">{errors.email}</span>}

        <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChange} required/>
        {errors.password && <span className="error">{errors.password}</span>}

        <select name="user_type" value={loginData.user_type} onChange={handleChange} required>
          <option value="client">Client</option>
          <option value="technician">Technician</option>
        </select>
        {errors.general && <span className="error">{errors.general}</span>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};
