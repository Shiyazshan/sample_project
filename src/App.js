import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Get';
import Header from './components/includes/Header';
import Post from './components/Post';
import MainRouter from './components/routers/MainRouter';

function App() {
  const [datas, setdata] = useState([])

  return (
   <BrowserRouter>
    <MainRouter />
   </BrowserRouter>
  );
}

export default App;
