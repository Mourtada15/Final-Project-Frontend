import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from "../../api";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    setLogin({
      ...login, [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post('/api/users/login', login)

      if (response.status !== 200) {
        throw new Error(response.data.message || 'Login failed.');
      }
      setLogin({
        email: '',
        password: ''
      })

      const { token } = response.data
      if (token) {
        sessionStorage.setItem('token', true)
        navigate('/');
      } else {
        toast.error('Login failed. Please try again.');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please try again.'
      toast.error(errorMessage);
    }
  }

  return (
    <>
      <ToastContainer />
      <div className='login-wrapper'>
        <div className="login-wrapper-logo">
          <Link to="/"><img src="logo.png" alt="" width="140rem" height="70rem" /></Link>
          <h1>Welcome to MarketEase!</h1>
          <p>Your trusted place to sell and buy freely</p>
        </div>
        <div className="login-body">
          <h1>Log In</h1>
          <form className='login-form' onSubmit={handleSubmit}>

            <input
              type="email"
              id='email'
              name="email"
              value={login.email}
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                name="password"
                value={login.password}
                placeholder="Password"
                onChange={handleInputChange}
                required
              />
              <span className="password-visibility-toggle" onClick={handleShowPassword}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>

            <button type="submit">Log In</button>
            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
          </form>
        </div>
      </div>
    </>

  );
}

export default Login;