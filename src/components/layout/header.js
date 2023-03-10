import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { useAuth } from "./checkauth";

const Header = (props) => {
  const { auth, userId } = useAuth();
  const cart = useSelector((state) => state.cart);
  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("token");
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
        {auth ? (
          <li onClick={() => logout()}>Logout</li>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
        {auth && userId ? <li>Signed in as {userId}</li> : null}
      </ul>
    </div>
  );
};

export default Header;
