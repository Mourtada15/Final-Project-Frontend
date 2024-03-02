import "../Categories/Categories.css"

const Categories = () => {
  return (
    <>
      <div className="categories-card-container" data-aos="fade-left">
        <div className="categories-card">
          <a href="#House"><img src="home.png" alt="icon" /></a>
          <div className="dropdown">
            <h6 className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              House
            </h6>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">Furniture</button></li>
              <li><button className="dropdown-item" type="button">Appliances</button></li>
              <li><button className="dropdown-item" type="button">Household</button></li>
            </ul>
          </div>
        </div>
        <div className="categories-card">
          <a href="#Entertainment"><img src="entertainment.png" alt="icon" /></a>
          <div className="dropdown">
            <h6 className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Entertainment
            </h6>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">Book, Films, & Music</button></li>
              <li><button className="dropdown-item" type="button">Video Games</button></li>
            </ul>
          </div>
        </div>
        <div className="categories-card">
          <a href="#Clothing & Accessories"><img src="clothing.png" alt="icon" /></a>
          <div className="dropdown">
            <h6 className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Clothing & Accessories
            </h6>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">Jewelry & Accessories</button></li>
              <li><button className="dropdown-item" type="button">Bags & Luggage</button></li>
              <li><button className="dropdown-item" type="button">Men's Clothing & Shoes</button></li>
              <li><button className="dropdown-item" type="button">Women's Clothing & Shoes</button></li>
            </ul>
          </div>
        </div>
        <div className="categories-card">
          <a href="#Electronics"><img src="electronics.png" alt="icon" /></a>
          <div className="dropdown">
            <h6 className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Electronics
            </h6>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">Mobile Phones</button></li>
              <li><button className="dropdown-item" type="button">Electronics & Computers</button></li>
            </ul>
          </div>
        </div>
        <div className="categories-card">
          <a href="#Hobbies"><img src="hobbies.png" alt="icon" /></a>
          <div className="dropdown">
            <h6 className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Hobbies
            </h6>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">Sports & Outdoors</button></li>
            </ul>
          </div>
        </div>
        <div className="categories-card">
          <a href="#Other"><img src="other.png" alt="icon" /></a>
          <div className="dropdown">
            <h6 className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Other
            </h6>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" type="button">Miscellaneous</button></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;