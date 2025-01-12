import React from 'react';
import { Link } from 'react-router-dom';
import { TiShoppingCart } from "react-icons/ti";
import FetchCart from '../CustomsHooks/FetchCart';
import { useAuth } from '../CustomsHooks/UseAuth';
const NavBar = () => {
  const {user}=useAuth()
  const [cart]=FetchCart()
    return (
        <div className="navbar fixed z-20 text-white px-10 bg-black/45">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm text-black dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link>Home</Link>
        <Link>Contact Us</Link>
        <Link>Dashboard</Link>
        <Link>Our Menu</Link>
        <Link>Our Shop</Link>
        <button><Link to={'/login'} className="">SIGN IN</Link></button>
        <button><Link to={'/signUp'} className="">SIGN OUT</Link></button>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className="menu menu-horizontal px-1 gap-5 items-center">
      <Link>Home</Link>
        <Link>Contact Us</Link>
        <Link>Dashboard</Link>
        <Link to={'/ourMenu'}>Our Menu</Link>
        <Link to={'/ourShop'}>Our Shop</Link>
       <ul>
        
       </ul>
    </ul>
    
  </div>
  <div className="navbar-end gap-4 ">
  <div className="indicator">
          <Link to={'/cart'} className='text-2xl'><TiShoppingCart></TiShoppingCart></Link>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
        
        {/* DropDown Menu  */}

        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} alt="" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  bg-black/45 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <button><Link to={'/login'} className="">SIGN IN</Link></button>
        <button><Link to={'/signUp'} className="">SIGN OUT</Link></button>
        <button><Link to={'dashboard'}  className="">DASHBOARD</Link></button>
      </ul>
    </div>
  </div>
  
 
     
    

  
</div>
    );
};

export default NavBar;