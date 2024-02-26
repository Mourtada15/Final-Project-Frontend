import "./Login.css";
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

  return (
    <>
      <div className='login-wrapper'>
        <div className="login-wrapper-logo">
          <Link to="/"><img src="logo.png" alt="" width="140rem" height="70rem" /></Link>
          <h1>Welcome to MarketEase!</h1>
          <p>Your trusted place to sell and buy freely</p>
        </div>
        <div className="login-body">
          <h1>Log In</h1>
          <form className='login-form'>

            {/* <label htmlFor="email">Email</label> */}
            <input
              type="text"
              id='email'
              name="email"
              placeholder=" Email"
              required
            />

            {/* <label htmlFor="password">Password</label> */}
            <input
              type="text"
              id='password'
              name="password"
              placeholder=" Password"
              required
            />

            <span className="password-visibility-toggle">
            </span>

            <button type="submit">LOG IN</button>
            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>

  );
}

export default Login;