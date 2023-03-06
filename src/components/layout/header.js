import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className='header'>
      <img style={{height:"50px", width:"50px"}} src='./slike/cart.png'/>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><Link href="/checkout">Cart</Link></li>
        <li>{Object.keys(cart).length}</li>
        <li><Link href="./login">Login/Signup</Link></li>
      </ul>
    </div>
  )
}

export default Header