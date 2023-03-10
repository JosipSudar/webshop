import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { Token } from "./token";
export function useAuth() {
  const router = useRouter();
  const [auth, setAuth] = useState();
  const [user, setUserId] = useState();
  const tokenCheck = async () => {
    const token = window.localStorage.getItem("token");
    const data = await Token(token);
    if (!data) {
      setAuth(false);
    } else {
      setAuth(true);

      setUserId(data.roleId);
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [router]);

  return {
    auth: auth,
    userId: user,
  };
}
