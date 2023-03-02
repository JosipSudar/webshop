import React from 'react'

const Header = () => {
  return (
    <div className='header'>
            <img style={{height:"50px", width:"50px"}} src='https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png'/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="./about">About</a></li>
                <li><a href="./products">Products</a></li>
                <li><a href="./checkout">Checkout</a></li>
            </ul>
    </div>
  )
}

export default Header