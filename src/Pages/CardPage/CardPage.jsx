import { useContext, useEffect, useState } from 'react';
import instance from '../../api';
import Footer from "../../Components/Footer/Footer"
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import "./CardPage.css";
import DataContext from '../../ContextAPI/Context'
import AOS from "aos";
import Categories from '../../Components/Categories/Categories';

const CardPage = () => {
  const location = useLocation(); // Get the current location
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { subCategories, products } = useContext(DataContext);

  // Filter products based on category from URL parameter
  const categoryParam = new URLSearchParams(location.search).get('category');
  const decodedCategoryParam = categoryParam ? decodeURIComponent(categoryParam) : null;
  const filteredProducts = decodedCategoryParam ? products.filter(product => product.subCategoryID.category === decodedCategoryParam) : products;

  // Filter products based on selected subcategory
  const filteredProductsBySubcategory = selectedSubcategory ? filteredProducts.filter(product => product.subCategoryID.name === selectedSubcategory) : filteredProducts;

  const handleSubcategoryFilter = (subcategory) => {
    setSelectedSubcategory(subcategory === selectedSubcategory ? null : subcategory);
  }

  return (
    <div className='card-page-wrapper'>
      <Categories />
      <div className="card-wrapper" id="House">
        <div className="category-header-in-wrapper" data-aos="fade-right">
          <span className='category-subcategory' ><h5>{categoryParam || 'House'} | </h5>
            {subCategories
              .filter((subCategory) => subCategory.category === decodedCategoryParam)
              .map((subCategory) =>
                <button className={`cardpage-filter-button ${selectedSubcategory === subCategory.name ? 'category-subcategory-active' : ''}`} key={subCategory._id} onClick={() => handleSubcategoryFilter(subCategory.name)}>{subCategory.name}</button>
              )}
          </span>
        </div>
        <div className="card-container" data-aos="fade-right">
          {filteredProductsBySubcategory
            .map((product) => (
              <div key={product._id} className='card' target='_blank'>
                <div className="card-image-container">
                  <img src={`${instance.defaults.baseURL}/${product.image}`} className="card-img-top" alt="" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description.substring(0, 100)}...</p>
                  <div className='card-more-details'>
                    <Link to={`/cardedit?id=${product._id}`} className="btn btn-primary">More details</Link>
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
