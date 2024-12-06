import React from 'react';
import { NavLink } from 'react-router-dom';


function Header({ isLogIn, setIslogIn }) {
  
  function RenderButton() {
    return (
      <button
        className='bg-blue-700 p-1 rounded-md w-20'
        onClick={() => setIslogIn(!isLogIn)}
      >
        {isLogIn ? 'Logout' : 'Login'}
      </button>
    );
  }

  return (
    <div className=' p-6 text-center flex justify-around  font-semibold shadow-lg'>
      <NavLink exact to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>

      {isLogIn && (
        <NavLink to='/Product' className={({ isActive }) => (isActive ? 'active' : '')}>
          Product
        </NavLink>
      )}
      <RenderButton />
    </div>
  );
}

export default Header;
