import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Product() {
  const [SearchInput, setSearchInput] = useState('');
  const [productsList, setProductsList] = useState([]);
  const [filteredProductsList, setfilteredPoductsList] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((res) => {
      let categories = res.data.products.map((items) => items.category);
      setCategory(Array.from(new Set(categories)));
      setProductsList(res.data.products);
    });
  }, []);

  useEffect(() => {
    let filteredItems = productsList.filter((items) =>
      items.title.toLowerCase().includes(SearchInput.toLowerCase())
    );
    setfilteredPoductsList(filteredItems);
  }, [SearchInput, productsList]);

  let applyFilter = (filterType, value) => {
    let ProductCopy = [...productsList];
    if (filterType === 'Itemsbelow200$') {
      let filtered = ProductCopy.filter((items) => items.price < 200);
      setfilteredPoductsList(filtered);
    } else if (filterType === 'Itemsbelow10$') {
      let filtered = ProductCopy.filter((items) => items.price < 10);
      setfilteredPoductsList(filtered);
    } else if (filterType === 'RemoveFilters') {
      setfilteredPoductsList(ProductCopy);
    } else if (filterType === '4+rating') {
      let filtered = ProductCopy.filter((items) => items.rating > 4);
      setfilteredPoductsList(filtered);
    } else if (filterType === 'category') {
      let filtered = ProductCopy.filter((items) => items.category === value);
      setfilteredPoductsList(filtered);
    } else if (filterType === 'pricelowtohigh') {
      let filtered = ProductCopy.sort((a, b) => a.price - b.price);
      setfilteredPoductsList(filtered);
    } else if (filterType === 'pricehightolow') {
      let filtered = ProductCopy.sort((a, b) => b.price - a.price);
      setfilteredPoductsList(filtered);
    }
  };

  return (
    <div>
      <div className='text-center m-5'>
        <h1 className='text-3xl'>MY STORE</h1>
        <input
          className='text-white w-1/3 rounded-lg text-center bg-transparent p-1 m-2 border border-slate-500'
          type='text'
          placeholder='Search for a Product'
          value={SearchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <div className='flex justify-center space-x-5'>
        <button onClick={() => applyFilter('Itemsbelow200$')} className='border border-gray-300 p-1 rounded-md'>
          Items Below 200$
        </button>
        <button onClick={() => applyFilter('Itemsbelow10$')} className='border border-gray-300 p-1 rounded-md'>
          Items Below 10$
        </button>
        <button onClick={() => applyFilter('4+rating')} className='border border-gray-300 p-1 rounded-md'>
          4+ Rating
        </button>
        <button onClick={() => applyFilter('pricelowtohigh')} className='border border-gray-300 p-1 rounded-md'>
          Price Low To High
        </button>
        <button onClick={() => applyFilter('pricehightolow')} className='border border-gray-300 p-1 rounded-md'>
          Price High To Low
        </button>

        <select className='border border-gray-300 p-1 rounded-md bg-transparent' onChange={(e) => applyFilter('category', e.target.value)}>
          <option value='' className='text-black'>Select Your Category</option>
          {category.map((items, i) => (
            <option key={i} value={items} className='text-black'>
              {items}
            </option>
          ))}
        </select>

        <button onClick={() => applyFilter('RemoveFilters')} className='border border-gray-300 p-1 rounded-md'>
          Remove Filters
        </button>
      </div>

      <div>
        <div className='grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8 m-10'>
          {filteredProductsList.length === 0 && SearchInput === ''
            ? productsList.map((product) => (
                <div key={product.id}>
                  <div>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                      <img src={product.thumbnail} alt={product.title} className='h-full w-full object-cover object-center group-hover:opacity-75' />
                    </div>
                    <h3 className='mt-4 text-lg'>{product.title}</h3>
                    <h4 className='text-gray-200'>Brand: {product.brand}</h4>
                    <p className='mt-1 text-md text-gray-200'>
                      Price: {product.price}
                      <b>$</b>
                    </p>
                    <p className='mt-1 text-md text-gray-200'>Category: {product.category}</p>
                    <p className='mt-1 text-md text-gray-200'>Rating: {product.rating}</p>
                    <br />
                    <Link to={`/Product/${product.id}`}>
                      <button className='border border-indigo-700 rounded-md p-1 hover:bg-indigo-500 text-sm'>
                        View Details
                      </button>
                    </Link>
                    <Link to={`/Product/${product.id}/reviews`}>
                      <button className='border border-indigo-700 rounded-md p-1 hover:bg-indigo-500 text-sm m-7'>
                        View Reviews
                      </button>
                    </Link>
                    
                  </div>
                </div>
              ))
            : filteredProductsList.map((product) => (
                <div key={product.id}>
                  <div>
                    <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
                      <img src={product.thumbnail} alt={product.title} className='h-full w-full object-cover object-center group-hover:opacity-75' />
                    </div>
                    <h3 className='mt-4 text-lg'>{product.title}</h3>
                    <h4 className='text-gray-200'>Brand: {product.brand}</h4>
                    <p className='mt-1 text-md text-gray-200'>
                      Price: {product.price}
                      <b>$</b>
                    </p>
                    <p className='mt-1 text-md text-gray-200'>Category: {product.category}</p>
                    <p className='mt-1 text-md text-gray-200'>Rating: {product.rating}</p>
                    <br />
                    <Link to={`/Product/${product.id}`}>
                      <button className='border border-indigo-700 rounded-md p-1 hover:bg-indigo-500 text-sm'>
                        View Details
                      </button>
                    </Link>
                    <Link to={`/Product/${product.id}/reviews`}>
                      <button className='border border-indigo-700 rounded-md p-1 hover:bg-indigo-500 text-sm m-7'>
                        View Reviews
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>

        {SearchInput !== '' && filteredProductsList.length === 0 ? (
          <h1 className='text-8xl text-center m-10 text-gray-400 font-serif'>PRODUCT NOT FOUND!</h1>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Product;
