import './CartItemList.css';
import {Link} from 'react-router-dom';


const CartItemList = () => {
  return (
    <div className="cartitem">
      <div className="cartitem-image">
        <img src='https://images.hindustantimes.com/tech/img/2020/06/12/960x540/sony_ps5_digital_edition_1591929311470_1591929330517.jpg' alt='titlr' />

      </div>
      <Link to={`/product/${111}`} className="cartItem-name">
        <p>playstation</p>
      </Link>
      <p className="cartitem-price">$400</p>
      <select
        
        className="cartItem-select"
      >
        <option value="1" >1</option>
        <option value="2" >2</option>
        <option value="3" >3</option>
        <option value="4" >4</option>
      </select>
      <button
        className="cartItem-deleteBtn"
        
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default CartItemList;
