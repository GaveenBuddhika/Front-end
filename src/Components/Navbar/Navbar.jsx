import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [menu,setMenu] = useState("shop");

  return (
    <div className='nav-bar'>
      <div className="nav-logo">
        <img src={logo} alt=''/>
        <p>LIQUOR SHOP</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}> <Link style={{textDecoration:'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("gin")}}> <Link style={{textDecoration:'none'}} to='/gin'>Gin</Link>{menu==="gin"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("rum")}}> <Link style={{textDecoration:'none'}} to='/rum'>Rum</Link>{menu==="rum"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("vodka")}}> <Link style={{textDecoration:'none'}} to='/vodka'>Vodka</Link>{menu==="vodka"?<hr/>:<></>} </li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
      <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
