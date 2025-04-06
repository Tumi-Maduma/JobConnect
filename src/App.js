import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './Components/LoginSignup/Home';
import {Register} from './Components/LoginSignup/Register';
import {Login} from './Components/LoginSignup/Login';
import './Components/LoginSignup/LoginSignup.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
