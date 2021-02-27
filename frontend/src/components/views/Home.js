import './Home.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductList from '../ProductList';

import {getProducts as listProducts} from '../../redux/actions/productActions';

const Home = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state)=> state.getProducts);
  const {products, loading, error} = getProducts;

  useEffect(()=>{
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <h2 className="home-title">
        Our latest products
      </h2>

      <div className="home-products">
        {loading ? (
          <h2> Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <ProductList
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}


        {/* <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/>
        <ProductList/> */}
      </div>
    </div>
  )
}

export default Home
