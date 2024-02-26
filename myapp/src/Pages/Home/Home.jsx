import '../../App.css';
import Carousel from '../../Components/Carousel/Carousel';
import Cards from '../../Components/Cards/Cards';
import Categories from '../../Components/Categories/Categories';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Carousel />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;