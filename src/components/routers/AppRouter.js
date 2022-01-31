import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../includes/Header';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Features from '../screens/Features';
import Home from '../screens/Home';
import Single from '../screens/Single';

function Approuter() {
    const data = [
        {
          id: 1,
          title: "html",
        },
        {
          id: 2,
          title: "CSS",
        },
        {
          id: 3,
          title: "Bootstrap",
        },
        {
          id: 4,
          title: "JavaScript",
        },
        {
          id: 5,
          title: "React",
        },
        {
          id: 6,
          title: "Django",
        },
      ];
  return (
      <Routes>
          <Route path="/" element={<Header />} >
              <Route path="/" element={<Home />} />
              <Route path="Features" element={<Features data={data} />} />
              <Route path="About" element={<About />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Single/:id" element={<Single data={data} />} />
          </Route>
      </Routes>
  );
}

export default Approuter;
