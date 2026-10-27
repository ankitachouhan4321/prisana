
import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

import { BrowserRouter, Routes, Route } from "react-router-dom";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import Home from "./pages/Home"
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import WindscreenWashProduct from './products/WindscreenWashProduct'
import CarShampooProduct from './products/CarShampooProduct'
import DashboardPolishProduct from './products/DashboardPolishProduct'
import DryWashShampooProduct from './products/DryWashShampooProduct'
import DeMineraliseWaterProduct from './products/DeMineraliseWaterProduct'
import TyreShinerProduct from './products/TyreShinerProduct'
import CoolantProduct from './products/CoolantProduct'

import ScrollToTop from "./component/ScrollToTop";







const App = () => {
  
  return (
   <>
      <BrowserRouter>
     

        {/* AUTO SCROLL TO TOP ON ROUTE CHANGE */}
        <ScrollToTop />

      <Navbar />

    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shirt/girls" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />      
          <Route path="/products/windscreen-wash-fluid" element={<WindscreenWashProduct />} />
          <Route path="/products/car-shampoo" element={<CarShampooProduct />} />
          <Route path="/products/dashboard-polish" element={<DashboardPolishProduct />} />
          <Route path="/products/dry-wash-shampoo" element={<DryWashShampooProduct />} />
          <Route path="/products/de-mineralise-water" element={<DeMineraliseWaterProduct />} />
          <Route path="/products/tyre-shiner" element={<TyreShinerProduct />} />
          <Route path="/products/coolant" element={<CoolantProduct />} />
          <Route path="/products" element={<Products/>}/>


        </Routes>

      <Footer/>
        
      </BrowserRouter>
    </>
  )
}

export default App;


// https://preview.themeforest.net/item/crsine-car-washing-service-booking-html-template/full_screen_preview/30252560

// https://preview.themeforest.net/item/vwash-car-wash-cleaning-service-wordpress-theme/full_screen_preview/57237620