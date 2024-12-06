import React, { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Product from './Components/Product';
import Header from './Components/Header';
import './App.css';
import Productspc from './Components/Productspc';
import Reviews from './Components/Reviews';

function App() {
  let [isLogIn, setIslogIn] = useState(false);

  return (
    <div className='bg-gray-600 min-h-screen text-white'>
      <BrowserRouter>
        <Header isLogIn={isLogIn} setIslogIn={setIslogIn} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={isLogIn === true ? <Product /> : <Navigate to='/' />} />
          <Route path='/Product/:id' element={isLogIn === true ? <Productspc /> : <Navigate to='/' />} />
          <Route path="/Product/:id/reviews" element={isLogIn ? <Reviews /> : <Navigate to="/" />} />
          <Route path='/*' element={<h1 className='text-8xl text-center m-10 text-gray-400 font-serif'>404 <br />Page Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

