import { Link } from "react-router-dom";
import "./Categories.css"
import { useContext } from "react";
import DataContext from '../../ContextAPI/Context'
import instance from "../../api";

const Categories = () => {
  const { categories, subCategories } = useContext(DataContext);

  if (!categories.length || !subCategories.length) {
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
      <div className="categories-card-container">
        {categories.map((category) =>
          <div className="categories-card" key={category._id}>
            <a href={`#${category.name}`}><img src={`${instance.defaults.baseURL}/${category.icon}`} alt="icon" /></a>
            <div className="dropdown">
              <h6 className="dropdown-toggle" data-bs-toggle="dropdown">
                {category.name}
              </h6>
              <ul className="dropdown-menu">
                {subCategories
                  .filter((subCategory) => subCategory.category === category.name)
                  .map((subCategory) => (
                    <li key={subCategory._id}>
                      <Link to={`/cardpage?category=${encodeURIComponent(category.name)}&subcategory=${encodeURIComponent(subCategory.name)}`} className="dropdown-item" type="button">
                        {subCategory.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Categories;
