import './App.css';
import Home from './Tabs/Home';
import ProductList from './Tabs/ProductList';
import Product from './Tabs/Product';
import Register from './Tabs/Register';
import Login from './Tabs/Login';
import Cart from './Tabs/Cart';
import Success from './Tabs/Success'
import { 
  BrowserRouter as Router, 
  Routes,
  Route,

} from "react-router-dom";
import { useSelector } from 'react-redux';



function App() {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path="/"
          element={<Home/>}
        >
        </Route>
        <Route path="/products/:category"
          element={<ProductList/>}
        >
        </Route>
        <Route path="/product/:id"
          element={<Product/>}
        >
        </Route>
        <Route path="/cart"
          element={<Cart />}
        >
        </Route>
        <Route path="/login"
          element= {user ? <Home/> : <Login/>}
        >
        </Route>
        <Route path="/register"
          element={<Register/>}
        >
        </Route>
        <Route path="/success"
          element={<Success/>}
        >
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
