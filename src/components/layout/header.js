import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";

const Header = (props) => {
  const [is_authenticate, set_auth] = useState(false);
  const [authLoading, set_auth_loading] = useState(true);
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const tokenCheck = async (token) => {
    try {
      const auth_key = window.localStorage.getItem("token");
      const res = await axios.get(
        "http://localhost:8080/api/users/check-auth",
        {
          headers: {
            "x-access-token": auth_key,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status == 200) {
        set_auth(true);
      } else {
        set_auth(false);
        localStorage.removeItem("token");
      }
    } catch (e) {
      set_auth(false);
      localStorage.removeItem("token");
    }
  };
  useEffect(() => {
    tokenCheck();
  }, []);
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
        {props.logedin ? (
          <li onClick={() => logout()}>Logout</li>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
