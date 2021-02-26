import './Backdrop.css';

const Backdrop = ({showMenu, menuClick}) => {
  return (
    showMenu &&<div className="backdrop" onClick={menuClick}></div>
  )
}

export default Backdrop
