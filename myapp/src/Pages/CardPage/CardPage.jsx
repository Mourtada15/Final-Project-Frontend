import { useState, useEffect } from 'react';
import instance from '../../api';
import Navbar from "../../Components/Navbar/Navbar";
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import "./CardPage.css";

const CardPage = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await instance.get('/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products', error.message);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on category from URL parameter
  const categoryParam = new URLSearchParams(location.search).get('category');
  const filteredProducts = categoryParam ? products.filter(product => product.subCategoryID.category === categoryParam) : products;

  return (
    <div className='card-page-wrapper'>
      <Navbar />
      <div className="card-wrapper" id="House" >
        <div className="category-header-in-wrapper">
          <span><h5>{categoryParam || 'House'} | </h5>Furniture - Appliances - Household</span>
        </div>
        <div className="card-container">
          {filteredProducts.map((product) => (
            <div key={product._id} className='card' target='_blank'>
              <div className="card-image-container">
                <img src={`${instance.defaults.baseURL}/${product.image}`} className="card-img-top" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description.substring(0, 100)}...</p>
                <a href="#" className="btn btn-primary">More details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPage;
