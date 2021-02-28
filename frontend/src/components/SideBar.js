import './SideBar.css';
import {Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const SideBar = ({showMenu, menuClick}) => {
  const  sideMenu = ["sidedrawer"];

  if (showMenu) {
    sideMenu.push("show");
  }
  
  
  const { cartItems } = useSelector((state) => state.cart);;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  }; 


  return (
    <div  className={sideMenu.join(" ")} onClick={menuClick}>
      <ul className="sidebar-links">
      <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidebar-cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar;
