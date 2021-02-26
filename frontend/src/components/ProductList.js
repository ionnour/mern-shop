import './ProductList.css';
import {Link} from 'react-router-dom';

const ProductList = () => {
  return (
    <div className="product">
      <img src='https://images.hindustantimes.com/tech/img/2020/06/12/960x540/sony_ps5_digital_edition_1591929311470_1591929330517.jpg' alt='titlr' />

  <div className="product-info">
  <p className="info-name">PS5udct 1</p>

  <p className="info-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur repellendus cumque eos omnis ratione delectus, facere asperiores molestias fugit est voluptatem. Blanditiis tempora quibusdam ut dicta similique inventore quod voluptas!</p>

  <p className="info-price">400$</p>

  <Link to={`/product/${111}`} className="info-button">
    View
  </Link>
</div>
    </div>
  )
}

export default ProductList
