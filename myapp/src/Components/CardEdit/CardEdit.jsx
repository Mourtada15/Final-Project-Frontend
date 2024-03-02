import React, { useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./CardEdit.css";
import AOS from "aos";

const CardEdit = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='cardedit-wrapper'>
      <Navbar />
      <div className='cardedit-container' data-aos="fade-right">
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Category</a></li>
            <li className="breadcrumb-item active" aria-current="page">Sub-Category</li>
          </ol>
        </nav>
        <div className='cardedit-inside'>
          <div className='cardedit-inside-img'>
            <img src="home.png" alt="" />
          </div>
          <div className='cardedit-inside-info'>
            <div>
              <h4 className='cardedit-inside-info-h'>House with a garden</h4>
              <div className='cardedit-inside-info-inner'>
                <p><b>Condition:</b> New</p>
                <p><b>Price:</b> 50,000$</p>
              </div>
            </div>
            <div>
              <h5 className='cardedit-inside-info-h'>Seller Information</h5>
              <div className='cardedit-inside-info-inner'>
                <span className='cardedit-span'>
                  <img src="email.png" alt="" />
                  <p>example@gmail.com</p>
                </span>
                <span className='cardedit-span'>
                <img src="phone.png" alt="" />
                <p>76-553366</p>
                </span>
                <span className='cardedit-span'> 
                <img src="location.png" alt="" />
                <p>Beirut, Hamra</p>
                </span>
              </div>
            </div>
            <button>Add to my wishlist</button>
          </div>
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Description</a>
          </li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eius aspernatur enim! Cum, suscipit aspernatur. Quae qui, cum maxime quasi quis deserunt, saepe rerum quas eligendi nemo sed. Accusamus, natus!</p>
        {/* <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Related Items</a>
          </li>
        </ul> */}
      </div>
      <Footer />
    </div>
  );
}

export default CardEdit;
