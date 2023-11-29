import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignUp from './SignUp';
import './App.css';

function App() {
  const logo = `${process.env.PUBLIC_URL}/logo.png`;
  return (
    <Router>
      <nav className="navbar">
        <img src={logo} alt="Volunteer Wave Logo" className="logo" />
        <h1 style={{ color: 'rgb(4, 80, 143)' }}>VOLUNTEER WAVE</h1>
      </nav>
      
      <Routes>
        <Route exact path="/" element={
          <div className="login-page">
            <div className="header">
              {/* <img src={logo} alt="Volunteer Wave Logo" className="logo" /> */}
            </div>
            <div className="form-container">
              <button className="close-button">X</button>
              <form>
                <h2>LOGIN</h2>
                
          <div className="input-group">
            <label htmlFor="userId">User ID</label>
            <input type="text" id="userId" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
                <div className="form-footer">
                  <a href="#">Forgot Password?</a>
                  <button type="submit">LOGIN</button>
                  <Link to="/signup" className="signup-link">New User? SIGN UP</Link>
                </div>
              </form>
            </div>
          </div>
        }/>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
