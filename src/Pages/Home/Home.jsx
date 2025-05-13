import '../../App.css';
import Carousel from '../../Components/Carousel/Carousel';
import Cards from '../../Components/Cards/Cards';
import Categories from '../../Components/Categories/Categories';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
  return (
    <div className="App">
      <Categories />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;