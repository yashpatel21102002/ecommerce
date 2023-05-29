
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from './pages/Login'
import Product from "./pages/Product"
import ProductList from "./pages/ProductList"
// import Success from './pages/Success'
import {BrowserRouter as Router,Routes,Route , Navigate} from 'react-router-dom'

const App = () => {
  const user = false;
  return (
     <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/products/:category" exact element={<ProductList/>}/>
        <Route path="/products" exact element={<ProductList/>}/>
        <Route path="/product" exact element={<Product/>}/>
        <Route path="/product/:id" exact element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/>:<Register/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        
        
          
       
      </Routes>
     </Router>
  )
}

export default App