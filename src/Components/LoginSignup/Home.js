import './Register.js';
import './Login.js';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to JobConnect</h1>
      <p>The system aims to connect users of the system with nearby technicians, allowing them 
      to compare services, read reviews, and book appointments.</p>
      <div className="button-container">
        <button className="nav-button" onClick={() => navigate("/register")}>Sign Up</button>
        <button className="nav-button" onClick={() => navigate("/login")}>Login</button>
      </div>
    </div>
  );
};

