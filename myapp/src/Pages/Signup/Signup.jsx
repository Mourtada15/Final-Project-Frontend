import "../Login/Login.css";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import instance from "../../api"
import AOS from "aos";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUp, setSignUp] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    location: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post('/api/users/register', signUp);
      console.log(response)
      setSignUp({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
      toast.success('Sign up successful! Redirecting to login page...', {
        autoClose: 2500,
      });
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      // console.error(error.response.data)
      const errorMessage = error.response.data.message || 'Sign up failed. Please try again.'
      toast.error(errorMessage);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className='login-wrapper' data-aos="zoom-in">
        <div className="login-wrapper-logo">
          <Link to="/"><img src="logo.png" alt="" width="140rem" height="70rem" /></Link>
          <h1>Welcome to MarketEase!</h1>
          <p>Your trusted place to sell and buy freely</p>
        </div>
        <div className="login-body">
          <h1>Sign Up</h1>
          <form className='login-form' onSubmit={handleSubmit}>

            <div className="inside-login-form">
              <input type="text" id="firstName" name="firstName" value={signUp.firstName} placeholder="First Name" onChange={handleInputChange} required />
              <input type="text" id="lastName" name="lastName" value={signUp.lastName} placeholder="Last Name" onChange={handleInputChange} required />
            </div>

            <div className="inside-login-form">
              <input type="text" id="phoneNumber" name="phoneNumber" value={signUp.phoneNumber} placeholder="Phone Number" onChange={handleInputChange} required />
              <input type="text" id="location" name="location" value={signUp.location} placeholder="Location" onChange={handleInputChange} required />
            </div>

            <input
              type="email"
              id='email'
              name="email"
              value={signUp.email}
              placeholder="Email"
              onChange={handleInputChange}
              required
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                name="password"
                value={signUp.password}
                placeholder="Password"
                onChange={handleInputChange}
                required
              />
              <span className="password-visibility-toggle" onClick={handleShowPassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id='confirmPassword'
                name="confirmPassword"
                value={signUp.confirmPassword}
                placeholder="Confirm Password"
                onChange={handleInputChange}
                required
              />
              <span className="password-visibility-toggle" onClick={handleShowPassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <button type="submit">Sign Up</button>
            <p>Already signed up! <Link to='/login'>Login</Link></p>
          </form>
        </div >
      </div >
    </>

  );
}

export default Signup;