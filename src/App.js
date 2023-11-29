  import React from 'react';
  import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
  import SignUp from './SignUp'; // Make sure this component is correctly defined
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
              {/* ... other components ... */}
              <Link to="/signup" className="signup-link">New User? SIGN UP</Link>
            </div>
          }/>
          {/* Define other routes as needed, for example: */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    );
  }

  export default App;
