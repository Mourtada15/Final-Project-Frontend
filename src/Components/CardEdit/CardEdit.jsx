import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./CardEdit.css";
import AOS from "aos";
import DataContext from '../../ContextAPI/Context'
import instance from '../../api';

const CardEdit = () => {
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("id");
  // console.log("Here", productId)

  // Fetch product details based on productId from the context
  const { categories, subCategories, products, users } = useContext(DataContext);
  const [product, setProduct] = useState('');
  console.log('Users Here: ', users)

  useEffect(() => {
    if (products.length > 0) {
      // Find the product from the products array based on productId
      const foundProduct = products.find(product => product._id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.log('Could not find productId')
      }
    }
  }, [productId, products]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!categories.length || !subCategories.length || !products.length) {
    return <div className="loader">
      <div className="circle" tabIndex="0"></div>
      <div className="circle" tabIndex="0"></div>
      <div className="circle" tabIndex="0"></div>
      <div className="circle" tabIndex="0"></div>
      <div className="circle" tabIndex="0"></div>
    </div>;
  }

  let subCategory;
  if (product && product.subCategoryID && product.subCategoryID._id) {
    subCategory = subCategories.find(subCat => subCat._id === product.subCategoryID._id);
  }

  if (!subCategory) {
    // console.log('Could not find subCategory');
  } else {
    // console.log('subCategory', subCategory);
  }

  const category = subCategory ? subCategory.category : '';
  // console.log('category', category)

  return (
    <div className='cardedit-wrapper'>
      <Navbar />
      <div className='cardedit-container' data-aos="fade-right">
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to={`/cardpage?category=${encodeURIComponent(category)}`}>{category}</Link></li>
            {product.subCategoryID && (
              <li className="breadcrumb-item active" aria-current="page">
                {product.subCategoryID.name}
              </li>
            )}

          </ol>
        </nav>
        <div className='cardedit-inside'>
          <div className='cardedit-inside-img'>
            <img src={`${instance.defaults.baseURL}/${product.image}`} alt="" />
          </div>
          <div className='cardedit-inside-info'>
            <div>
              <h4 className='cardedit-inside-info-h'>{product.title}</h4>
              <div className='cardedit-inside-info-inner'>
                <p><b>Condition:</b> {product.condition}</p>
                <p><b>Price:</b> {product.price}$</p>
              </div>
            </div>
            <div>
              <h5 className='cardedit-inside-info-h'>Seller Information</h5>
              <div className='cardedit-inside-info-inner'>
                <span className='cardedit-span'>
                  <img src="email.png" alt="" />
                  <p>{users[0].email}</p>
                </span>
                <span className='cardedit-span'>
                  <img src="phone.png" alt="" />
                  <p>{users[0].phoneNumber}</p>
                </span>
                <span className='cardedit-span'>
                  <img src="location.png" alt="" />
                  <p>{users[0].location}</p>
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
        <p>{product.description}</p>
      </div>
      <Footer />
    </div>
  );
}

export default CardEdit;
