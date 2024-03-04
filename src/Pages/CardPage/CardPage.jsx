import { useContext, useEffect } from 'react';
import instance from '../../api';
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer"
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import "./CardPage.css";
import DataContext from '../../ContextAPI/Context'
import AOS from "aos";

const CardPage = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { categories, subCategories, products } = useContext(DataContext);

  // Filter products based on category from URL parameter
  const categoryParam = new URLSearchParams(location.search).get('category');
  const decodedCategoryParam = categoryParam ? decodeURIComponent(categoryParam) : null;
  const filteredProducts = decodedCategoryParam ? products.filter(product => product.subCategoryID.category === decodedCategoryParam) : products;


  return (
    <div className='card-page-wrapper'>
      <Navbar />
      <div className="card-wrapper" id="House">
        <div className="category-header-in-wrapper" data-aos="fade-right">
          <span><h5>{categoryParam || 'House'} | </h5>
            {subCategories.filter((subCategory) => subCategory.category === decodedCategoryParam).map((subCategory, index) =>
              <span key={subCategory._id}>{subCategory.name} {index < subCategories.filter((subCategory) => subCategory.category === decodedCategoryParam).length - 1 ? ' - ' : ''} </span>
            )}
          </span>
        </div>
        <div className="card-container" data-aos="fade-right">
          {filteredProducts.map((product) => (
            <div key={product._id} className='card' target='_blank'>
              <div className="card-image-container">
                <img src={`${instance.defaults.baseURL}/${product.image}`} className="card-img-top" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.substring(0, 100)}...</p>
                <div className='card-more-details'>
                  <a href="#" className="btn btn-primary">More details</a>
                  <span style={{ color: "gray" }}>|</span>
                  <p><b>{product.price}$</b></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CardPage;
