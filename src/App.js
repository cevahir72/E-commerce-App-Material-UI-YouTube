import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import {  Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SpeedAccess from "./components/SpeedAccess";

function App() {
 
  
  return (
    <div className="App">
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <SpeedAccess />
        <ToastContainer/>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <Carousel />
      <ItemList />
      <Footer />
      
    </div>
  );
};

export default App;
