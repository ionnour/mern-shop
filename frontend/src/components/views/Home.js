import './Home.css';
import ProductList from '../ProductList';

const Home = () => {
  return (
    <div className="home">
      <h2 className="home-title">
        Our latest products
      </h2>

      <div className="home-products">
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
      </div>
    </div>
  )
}

export default Home
