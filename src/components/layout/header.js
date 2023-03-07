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
      <img className='' style={{height:"30px", width:"30px"}} src='./slike/cart.png'/>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/products">Products</Link></li>
        {Object.keys(cart).length>0?(<li><Link href="/checkout"><img src="./slike/animatedcart.gif"/></Link></li>): (<li><Link href="/checkout"><img src="./slike/nonanimatedcart.png"/></Link></li>)}
        {Object.keys(cart).length}
        {localStorage.getItem("auth")? (<li onClick={()=>logout()}>Logout</li>): ""}
        {localStorage.getItem("auth")?"":(<li><Link href="./login">Login/Signup</Link></li>)}
      </ul>
    </div>
  )
}

export default Header