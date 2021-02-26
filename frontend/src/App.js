import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideBar from './components/SideBar';

import Home from './components/views/Home';
import Product from './components/views/Product';
import Cart from './components/views/Cart';




function App() {
  const [sideMenu, setSideMenu] = useState(false)

  return (
    <Router>
      <Navbar menuClick={() => setSideMenu(true)}/>
      <SideBar showMenu={sideMenu}/>
      <Backdrop showMenu={sideMenu} menuClick={() => setSideMenu(false)}/> 
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/product/:id' component={Product}/>
          <Route exact path='/cart' component={Cart}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
