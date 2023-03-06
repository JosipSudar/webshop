import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cartslice";

const SingleProducts = (props) => {
  const cart = useSelector((state) => state.cart);
    const [seleted,seSelected]=useState(props.product.images[0])
  let { product } = props;
  
  const array=product.images

  const Dispatch=useDispatch();


  return (
    <div className=" rounded-sm bg-gray-100">
      <div className="m-3 flex ">
        <div>
        <h1 className="text-6xl text-left mb-4 font-bold">{product.title}</h1>
          <img
            className=" rounded-md"
            style={{ height: "400px", width: "450px" }}
            src={seleted}
          />
             <div className="flex overflow-x-auto my-2 py-2">
            {array.map((val,index)=>(
                <img key={index} onClick={()=>seSelected(val)} className="w-20 mr-1" src={val}/>
            ))}
        </div>
        </div>
        <div className="ml-10 mt-12">
            <span className="text-left text-3xl font-medium mb-4">Brand: {product.brand}</span>
            <p className="text-left text-2xl font-medium mb-4 mt-4">Descripition:{product.description}</p>
            <p className="text-left text-xl font-medium mb-4">Rating:{product.rating}</p>
            <p className="text-left text-xl font-medium mb-4">In stock:{product.stock}</p>
            <p className="text-left text-xl font-medium mb-4">Price: ${product.price}</p>
            <button className='rounded-full text-sm left-0 bg-slate-700 mt-3 text-white' style={{width:"40%", height:"10%"}} onClick={(e)=>Dispatch(addToCart(product))}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
export async function getServerSideProps(context) {
  const id = context.query.id;
  const data = await axios.get("https://dummyjson.com/products/" + id);
  
  return {
    props: {
      product: data.data,
    }, // will be passed to the page component as props
  };
}
