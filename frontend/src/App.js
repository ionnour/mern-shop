import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/views/Home';
import Product from './components/views/Product';
import Cart from './components/views/Cart';

import Navbar from './components/Navbar';
//import Backdrop from './components/Backdrop';


function App() {
  return (
    <Router>
     <Navbar/>

     <Backdrop/> 
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
