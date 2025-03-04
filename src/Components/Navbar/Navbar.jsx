import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import AOS from "aos";
import instance from "../../api";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if token exists in sessionStorage
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn based on token existence
    AOS.init({ duration: 1000 });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search operation with searchQuery
    console.log("Search query:", searchQuery);
    // setSearchQuery('')
  };

  const Authorized = () => {
    if (isLoggedIn) {
      navigate("/carddetails");
    } else {
      navigate("/login");
    }
  };
  const Logout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigate("/");
  };

  // const Logout = async () => {
  //   try {
  //     await instance.post('/api/users/logout');
  //     console.log('Before setIsLoggedIn(false):', isLoggedIn);
  //     sessionStorage.clear();
  //     setIsLoggedIn(false);
  //     console.log('isLoggedIn:', isLoggedIn); // Add this line
  //     navigate('/');
  //   } catch (error) {
  //     console.error('Error logging out:', error.message);
  //   }
  //   console.log('Logout clicked'); // Add this line
  //   console.log('isLoggedIn:', isLoggedIn); // Add this line
  // };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body" data-aos="fade-down">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="logo" width="140rem" height="70rem" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for categories, items, and more..."
                title="Search for categories, items, and more..."
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link nav-link-home"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {isLoggedIn ? (
                <li className="nav-item ">
                  <button
                    className="nav-link "
                    to=""
                    role="button"
                    aria-expanded="false"
                    onClick={() => Logout()}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item ">
                  <Link
                    className="nav-link "
                    to="/login"
                    role="button"
                    aria-expanded="false"
                  >
                    Login
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <button
                  className={
                    pathname === "/carddetails"
                      ? "nav-link-cta-hide"
                      : "nav-link nav-link-cta"
                  }
                  onClick={() => Authorized()}
                >
                  Sell
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
