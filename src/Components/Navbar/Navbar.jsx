import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export default function Navbar() {

  const [menu,setMenu] = useState("shop");

  return (
    <div className='nav-bar'>
      <div className="nav-logo">
        <img src={logo} alt=''/>
        <p>LIQUOR SHOP</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}> Home{menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("gin")}}> Gin{menu==="gin"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("rum")}}> Rum{menu==="rum"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("vodka")}}> Vodka{menu==="vodka"?<hr/>:<></>} </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt=""/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
