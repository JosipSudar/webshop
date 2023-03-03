import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <img style={{height:"50px", width:"50px"}} src='https://o.remove.bg/downloads/45c7556f-b183-4bdd-9634-d8de6dac7164/178-1783030_online-shopping-logo-png-transparent-png-removebg-preview.png'/>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/checkout">Checkout</a></li>
      </ul>
      <div className='profile'>
        <Link href="./login">
          <img style={{height:"50px", width:"50px"}} src='https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png'/>
        </Link>
      </div>
    </div>
  )
}

export default Header