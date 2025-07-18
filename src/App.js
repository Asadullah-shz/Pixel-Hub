import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import { AuthContext } from "../src/Context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/Tech" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/Laptop" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/Dock" element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route 
            path="/login" 
            element={user ? <Navigate to="/" /> : <LoginSignup />} 
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
