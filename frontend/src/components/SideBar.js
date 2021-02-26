import './SideBar.css';
import {Link } from 'react-router-dom';

const SideBar = ({showMenu, menuClick}) => {
  const  sideMenu = ["sidedrawer"];

  if (showMenu) {
    sideMenu.push("show");
  }
  

  return (
    <div  className={sideMenu.join(" ")} onClick={menuClick}>
      <ul className="sidebar-links">
      <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidebar-cartbadge">0</span>
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
