import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Approuter from './AppRouter';

function MainRouter() {
  return (
      <Routes>
          <Route path="/*" element={<Approuter/>} />
      </Routes>
  );
}

export default MainRouter;
