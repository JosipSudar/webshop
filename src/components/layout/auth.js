import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartslice";
import { useRouter } from "next/router";
import axios from "axios";
const AuthContainer = ({ children, Auth }) => {
  const [is_authenticate, set_auth] = useState();
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
      if (res.status === 200) {
        set_auth(true);
        Auth(true);
      }
    } catch (e) {
      set_auth(false);
      Auth(false);
      localStorage.removeItem("token");
    }
  };
  const check = () => {
    if (is_authenticate === false && router.asPath === "/checkout") {
      router.replace("/login");
    } else {
    }
  };
  useEffect(() => {
    const auth_key = window.localStorage.getItem("token");
    tokenCheck(auth_key);
    set_auth_loading(false);
    check();
  }, [router.asPath]);
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
