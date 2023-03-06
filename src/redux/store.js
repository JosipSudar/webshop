import { applyMiddleware, configureStore, createSlice } from '@reduxjs/toolkit';
import { cartReducer } from './cartslice';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
const composeEnhancers= composeWithDevTools({})

function saveToLocalStorage(state){
  try{
const seralizedState= JSON.stringify(state)
sessionStorage.setItem("state",seralizedState)
  }catch(e){
    console.log(e)
  }
}
function loadFromLocalStorage(){
  try{
    const seralizedState=sessionStorage.getItem("state")
    if(seralizedState===null) return undefined
    return JSON.parse(seralizedState)

  }catch(e){
    console.log(e)
  }
}
const presistedState= loadFromLocalStorage()

const reducer = {
  cart: cartReducer,
};

const store = configureStore(
{reducer},presistedState,composeEnhancers(applyMiddleware(thunk))
);
store.subscribe(()=>saveToLocalStorage(store.getState()))
export default store;