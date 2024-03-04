import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Cards.css";
import instance from '../../api';
import DataContext from '../../ContextAPI/Context'
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const { categories, subCategories, products } = useContext(DataContext);

  if (!categories.length || !subCategories.length || !products.length) {
    return <div className="loader">
      <div className="circle" tabIndex="0"></div>
      <div className="circle" tabIndex="0"></div>
      <div className="circle" tabIndex="0"></div>
      <div className="circle" tabIndex="0"></div>
      <div className="circle" tabIndex="0"></div>
    </div>;
  }

  return (
    <>
      {categories.map((category) => (
        <div className="card-wrapper" key={category._id} id={category.name} data-aos="fade-right">

          <div className="category-header-in-wrapper">
            <span>
              <h5>{category.name} | </h5>
              {subCategories.filter((subCategory) => subCategory.category === category.name).map((subCategory, index) =>
                <span key={subCategory._id}>{subCategory.name} {index < subCategories.filter((subCategory) => subCategory.category === category.name).length - 1 ? ' - ' : ''} </span>
              )}</span>
            <Link to={`/cardpage?category=${encodeURIComponent(category.name)}`}>See all</Link>
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
                      <Link to={``} className="btn btn-primary">More details</Link>
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
