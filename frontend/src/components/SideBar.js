import './SideBar.css';

const SideBar = ({showMenu}) => {
  const  sideMenu = ["sidedrawer"];

  if (showMenu) {
    sideMenu.push("show");
  }
  

  return (
    <div  className={sideMenu.join(" ")}>
      
    </div>
  )
}

export default SideBar;
