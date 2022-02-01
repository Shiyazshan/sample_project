import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const location = useLocation();
  return (
      <>
      <div className="main">
          <div className="box" >
              <h4>Home</h4>
              {
                  location.pathname === '/' ? <p>Welcome to home page.</p> : ''
              }
          </div>
      </div>
      </>
  );
}
