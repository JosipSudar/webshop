import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);
const router= useRouter()
  const logout=()=>{
   window.localStorage.removeItem("auth")
   router.reload()
  }
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
        <li onClick={()=>logout()}>Logout</li>
      </ul>
    </div>
  )
}

export default Header