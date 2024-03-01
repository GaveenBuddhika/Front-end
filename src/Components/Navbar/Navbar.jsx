import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="navlogo">
        <img src={logo} alt=''/>
        <p>LIQUOR SHOP</p>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Gin</li>
        <li>Rum</li>
        <li>Vodka</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=""/>
      </div>
    </div>
  )
}
