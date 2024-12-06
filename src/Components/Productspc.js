import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Productspc() {
  const [productData, setProductData] = useState(null);
  const [activeSmallCardIndex, setActiveSmallCardIndex] = useState(0);

  let Params = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${Params.id}`)
      .then((res) => {
        setProductData(res.data);
      });
  }, [Params.id]);

  return (
    <div>
      {productData != null ? 
        <div className='Productspc-container'>
          <div id='Productspc-left-container'>
            <img className='w-full h-full' src={productData.images[activeSmallCardIndex]} />
          </div>
    
          <div id='Productspc-right-container' className='p-5 space-y-3'>
            <h1 className='text-4xl'>{productData.title}</h1>
            <p>Brand: {productData.brand}</p>
            <p>Price: {productData.price}$</p>
            <p><b>Description</b> <br /> {productData.description}</p>
            <h1><b>Product preview</b></h1>
            <div id='product-preview-section' className="flex space-x-2">
  {productData.images.map((item, i) => (
    <div 
      key={i} 
      onClick={() => setActiveSmallCardIndex(i)} 
      className={`small-image-wrapper ${i === activeSmallCardIndex ? "active-small-image" : ""}`}
    >
      <img className='small-image' src={item} />
    </div>
  ))}
</div>

          </div>
        </div> : ""}
    </div>
  );
}

export default Productspc;
