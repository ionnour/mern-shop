import './Navbar.css';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

const Navbar = ({menuClick}) => {

  const { cartItems } = useSelector((state) => state.cart);;


  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  }; 

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"><h2>MERN-SHOP</h2></Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/cart" className="cart-link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo-badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger-menu"  onClick={menuClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
