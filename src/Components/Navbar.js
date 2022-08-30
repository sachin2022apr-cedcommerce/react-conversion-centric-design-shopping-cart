import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css';
export default function Navbar(props) {
  return (
    <header>
      {/* logo */}
      <h1><i class="fa-brands fa-black-tie"></i></h1>
      <div className='navigation'>
        {/* navigations */}
        <Link to='/' style={{ textDecoration: "none" }}><h3>Home</h3></Link>
        <Link to='/shop' style={{ textDecoration: "none" }}><h3>Shop</h3></Link>
        <Link to='/' style={{ textDecoration: "none" }}><h3>About</h3></Link>
      
        <Link to='/cartPage' style={{ textDecoration: "none" }}><h4>
          <i class="fa-solid fa-cart-shopping"><sup>{props.productCart.length}</sup>
          </i></h4></Link>


      </div>
    </header>
  )
}
