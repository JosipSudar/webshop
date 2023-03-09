import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("loggedin");
    router.reload();
  };
  return (
    <div className="header">
      <img
        className=""
        style={{ height: "30px", width: "30px" }}
        src="./slike/cart.png"
      />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        {Object.keys(cart).length > 0 ? (
          <li>
            <Link href="/checkout">
              <HiShoppingCart />
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/checkout">
              <HiOutlineShoppingCart />
            </Link>
          </li>
        )}
        {Object.keys(cart).length}
        {localStorage.getItem("loggedin") == true ? (
          <li onClick={() => logout()}>Logout</li>
        ) : (
          <li>
            {localStorage.getItem("loggedin")}
            <Link href="./login">Login</Link>
          </li>
        )}
      </ul>
      {console.log(localStorage.getItem("loggedin"))}
    </div>
  );
};

export default Header;
