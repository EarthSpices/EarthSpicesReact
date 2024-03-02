import logo from './logo.svg';
import './App.css';
import './Css/style.css';
import './Css/plugins/bootstrap-datepicker.min.css'
import './Css/plugins/bootstrap.min.css'
import './Css/plugins/ion.rangeSlider.min.css'
import './Css/plugins/magnific-popup.css'
import './Css/plugins/slick.css'
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import Products from './Components/Products/Products';
import ContactUs from './Components/ContactUs/ContactUs';
import Gallary from './Components/Gallary/Gallary';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About-us" element={<AboutUs />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Contact-us" element={<ContactUs />} />
        <Route exact path="/Gallary" element={<Gallary />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
