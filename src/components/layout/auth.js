
import { createSlice } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from "@/redux/cartslice";
import { useRouter } from 'next/router';
const AuthContainer=({children})=>{
    const [is_authenticate,set_auth]=useState(false)
    const [authLoading,set_auth_loading]= useState(true)
    const router= useRouter()
useEffect(()=>{
const auth_key= window.localStorage.getItem("auth")

set_auth(auth_key)
    set_auth_loading(true)
if(is_authenticate != "auth" && router.asPath==="/checkout"){
    router.push("/login")
    set_auth_loading(false)
}
set_auth_loading(false)

},[router.asPath])
    if(authLoading){
        return(
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

return(<>
<div>{children}</div>
</>)
    
}
export default AuthContainer