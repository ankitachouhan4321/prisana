
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


const App = () => {
  
  return (
   <>
      <BrowserRouter>
     
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      <Footer/>
        
      </BrowserRouter>

    </>
  )
}

export default App;


// https://preview.themeforest.net/item/crsine-car-washing-service-booking-html-template/full_screen_preview/30252560

// https://preview.themeforest.net/item/vwash-car-wash-cleaning-service-wordpress-theme/full_screen_preview/57237620