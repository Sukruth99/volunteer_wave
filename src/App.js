import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SignUp from './SignUp'; // Import your sign-up component
import './App.css';

function App() {
  const logo = `${process.env.PUBLIC_URL}/logo.png`;
  return (
    
    <Router> 
    <nav className="navbar"> {/* Add this line */}
      <img src={logo} alt="Volunteer Wave Logo" className="logo" /> 
      <h1 style={{ color: 'rgb(4, 80, 143)' }}>VOLUNTEER WAVE</h1> {/* Add this line */}
    </nav> {/* Add this line */}
    <Switch> 
    <Route exact path="/"> 
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
            <button type="button">New User? SIGN UP</button>
          </div>
        </form>
      </div>
      <Link to="/signup" className="signup-link">New User? SIGN UP</Link> {/* Change the button to a Link */} 
    </div>
    </Route>
    </Switch>
    </Router>
    
  );
}

export default App;
