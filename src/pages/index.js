
import HeaderComponent from '@/components/HomeComponents/HeaderComponent'
import { createSlice } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from "@/redux/cartslice";

const index = () => {

  return (
    <>
  <HeaderComponent/>
    </>
  )
}

export default index
