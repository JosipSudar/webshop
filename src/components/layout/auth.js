import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartslice";
import { useRouter } from "next/router";
import axios from "axios";
const AuthContainer = ({ children }) => {
  const [is_authenticate, set_auth] = useState(false);
  const [authLoading, set_auth_loading] = useState(true);
  const router = useRouter();
  const tokenCheck = async (token) => {
    try {
      console.log(token);
      const res = await axios.get(
        "http://localhost:8080/api/users/check-auth",
        {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status == 200) {
        set_auth(true);
        localStorage.setItem("loggedin", "true");
      } else {
        console.log(res.data);
        set_auth(false);
        if (router.asPath === "/checkout") {
          router.push("/login");
          set_auth_loading(false);
        }
        localStorage.setItem("loggedin", "no");
      }
    } catch (e) {
      console.log(e);
      set_auth(false);

      localStorage.setItem("loggedin", "no");
    }
  };
  useEffect(() => {
    const auth_key = window.localStorage.getItem("token");
    tokenCheck(auth_key);

    set_auth_loading(false);
  }, [router.asPath, tokenCheck]);
  if (authLoading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <>
      <div>{children}</div>
    </>
  );
};
export default AuthContainer;
