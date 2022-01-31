import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../includes/Header';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Features from '../screens/Features';
import Home from '../screens/Home';

function Approuter() {
  return (
      <Routes>
          <Route path="/" element={<Header />} >
              <Route path="/" element={<Home />} />
              <Route path="Features" element={<Features />} />
              <Route path="About" element={<About />} />
              <Route path="Contact" element={<Contact />} />
          </Route>
      </Routes>
  );
}

export default Approuter;
