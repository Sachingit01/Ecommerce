
import './App.css';
import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home'
import Men from './components/men/men'
import Women from './components/women/women'
import Cart from './components/cart/cart'
import CartC from './components/cart/cart copy'
import Checkout from './components/cart/checkout'
import Kids from './components/kids/Kids'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Home" element={<Home/>}/>
         
          <Route path="/men" element={<Men/>}/>
        
          <Route path="/women" element={<Women/>}/>
         
          {/* <Route path="/Cart" element={<Cart/>}/> */}
          <Route path="/Cart" element={<CartC/>}/>
          <Route path="/Checkout" element={<Checkout/>}/>
         
          <Route path="/Kids" element={<Kids/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
