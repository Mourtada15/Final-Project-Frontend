import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css";
import instance from '../../api';
import axios from 'axios';

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchProductsAndCategoriesAndSubCategories = async () => {
      try {
        const [productsResponse, categoriesResponse, subCategoriesResponse] = await axios.all([
          instance.get('/api/products'),
          instance.get('/api/categories'),
          instance.get('/api/subcategories')
        ]);
        setProducts(productsResponse.data);
        setCategories(categoriesResponse.data);
        setSubCategories(subCategoriesResponse.data);
      } catch (error) {
        console.error('Error fetching data', error.message);
      }
    };

    fetchProductsAndCategoriesAndSubCategories();
  }, []);

  return (
    <>
      {categories.map((category) => (
        <div className="card-wrapper" key={category._id} id={category.name}>

          <div className="category-header-in-wrapper">
            <span>
              <h5>{category.name} | </h5>
              {subCategories.filter((subCategory) => subCategory.category === category.name).map((subCategory,index) => 
                 <span key={subCategory._id}>{subCategory.name} {index < subCategories.filter((subCategory) => subCategory.category === category.name).length -1 ? ' - ' :''} </span>
              )}</span>
            <Link to={`/cardpage?category=${category.name}`}>See all</Link>
          </div>

          <div className="card-container">
            {products.filter((product) => product.subCategoryID.category === category.name).map((product, index) => (
                index < 5 ? 
                <div key={product._id} className='card' target='_blank'>
                <div className="card-image-container">
                  <img src={`${instance.defaults.baseURL}/${product.image}`} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description.substring(0, 100)}{product.description.length > 100 ? '...' : ''}</p>
                  <div className='card-more-details'>
                    <a href="#" className="btn btn-primary">More details</a>
                    <span style={{ color: "gray" }}>|</span>
                    <p><b>{product.price}$</b></p>
                  </div>
                </div>
              </div> : null
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
