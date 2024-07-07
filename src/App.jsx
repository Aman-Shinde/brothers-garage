import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Service from './components/Service';
import Work from './components/Work';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import Business from './components/Business';
import CompanyCarousal from './components/CompanyCarousal';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  })


  return (
    <>
      {
        loader ? <Loader/> : (<>
          <Header />
          <Hero />
          <About />
          <Team />
          <Service />
          <Work />
          <TestimonialsCarousel />
          <Business />
          <CompanyCarousal />
          <Footer />
        </>)
      }
    </>
  )
}

export default App
