import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Update from '../crud/Update';
import Header from '../includes/Header';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Features from '../screens/Features';
import Home from '../screens/Home';
import Request from '../screens/Request';
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
              <Route path="features" element={<Features data={data} />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="request" element={<Request />} />
              <Route path="update" element={<Update />} />
              <Route path="feature/:id" element={<Single data={data} />} />
          </Route>
      </Routes>
  );
}

export default Approuter;
