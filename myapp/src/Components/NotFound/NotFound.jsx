import { Link } from 'react-router-dom';
import './NotFound.css';
import AOS from "aos";
import { useEffect } from 'react';

const NotFound = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="not-found-container" data-aos="fade-down">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-description">
        Oops! Looks like you've stumbled upon a page that doesn't exist.
      </p>
      <Link to="/">
      <button className="not-found-button">
        Go back to Home
      </button>
      </Link>
    </div>
  );
}

export default NotFound;