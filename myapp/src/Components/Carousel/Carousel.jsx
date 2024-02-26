import "../Carousel/Carousel.css"
import a from "../../Images/a.png"
import b from "../../Images/b.jpeg"
import c from "../../Images/c.jpeg"
import d from "../../Images/d.jpeg"
import e from "../../Images/e.jpeg"

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={a} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={b} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={d} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={e} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;