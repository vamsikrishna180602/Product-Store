import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  
 

  return (
    <div className="p-20">
      <div className=" text-white p-10 text-center rounded-lg mb-8">
        <h1 className="text-5xl font-bold">Welcome to My Store!</h1>
        <p className="mt-5">Shop the latest products at unbeatable prices.</p>
        <Link to="/Product">
          <button className="bg-red-600 px-4 py-2 mt-5 rounded-lg hover:bg-red-700">
            Shop Now
          </button>
        </Link>
      </div>
</div>
  );
}

export default Home;
