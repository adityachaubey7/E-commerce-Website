import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Contact from './pages/Contact'
import Login from './pages/Login'
import Product from './pages/Product'
import Order from './pages/Order'
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import SearchBar from "./component/SearchBar";
import {ToastContainer} from 'react-toastify'

function App() {
  return (
   <>
   <ToastContainer/>
   <NavBar/>
   <SearchBar/>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/Place-order" element={<PlaceOrder/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/order" element={<Order/>}/>
    </Routes>
    <Footer/>
   </>
  );
}

export default App