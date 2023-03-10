import React, { useEffect } from "react";

import { useRouter } from "next/router";

import { Token } from "./token";
export function AuthContainer() {
  const router = useRouter();
  const tokenCheck = async () => {
    const token = window.localStorage.getItem("token");
    const data = await Token(token);
    if (!data) {
      router.push("/login");
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [router]);

  return null;
}
