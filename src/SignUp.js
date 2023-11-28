import React from 'react';
import './SignUp.css'; // Make sure you have a corresponding CSS file

function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>SIGN UP</h2>
        <form>
          <label htmlFor="firstName">First Name*</label>
          <input type="text" id="firstName" required />

          <label htmlFor="lastName">Last Name*</label>
          <input type="text" id="lastName" required />

          <label htmlFor="username">Username*</label>
          <input type="text" id="username" required />

          <label htmlFor="email">e-mail*</label>
          <input type="email" id="email" required />

          <label htmlFor="password">Password*</label>
          <input type="password" id="password" required />

          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input type="password" id="confirmPassword" required />

          <button type="submit" className="signup-btn">SIGN UP</button>
        </form>
        <button className="close-btn">X</button>
      </div>
    </div>
  );
}

export default SignUp;