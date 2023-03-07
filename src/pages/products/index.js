import ProductItem from "@/components/Product/ProductItem";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Products = (props) => {
  const router = useRouter()
  const [items, setItems] = useState([""]);
  const query=router.query
  let { products ,categories} = props;
  console.log(products)
  const filterCat=(val)=>{
    router.push(  { pathname: 'products', query: { cat_name:val } })
  }
  return (
    <div>
      <div className="m-3 mt-10 pt-5 bg-gray-400 flex flex-row justify-between">
            <div className=" flex flex-col justify-center">
            <h1 className="pl-3 text-left text-2xl">Nulla magna nisi duis pariatur esse anim quis.</h1>
            <button className="ml-3 pl-3 left-0 rounded-full ">BUY NOW</button>
            </div>
            <div className="mb-0 pb-0">
                <img src="./slike/man.png"/>
            </div>
       </div>
       <div className="block m-2 text-sm font-medium text-gray-900 dark:text-white">
        <h5 className=" text-base font-bold">Please select products from selection of categories</h5>
       <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>filterCat(e.target.value) } >
        <option key="22"value={""}>All</option>
        {categories.map((i,index)=>(
          <option value={i} key={index}>{i}</option>
        ))}
        </select>
      </div>
      <div className="">
        <h1 className=" ml-3 text-left text-3xl my-8 capitalize">{query.cat_name} for you</h1>
        <h5 className="m-2 text-left text-sm ">Products found: <span>{products? Object.keys(products.products).length:0}</span></h5>
        <div className="grid grid-cols-3 grid-flow-row gap-4">
          {products.products != null ? (
            products.products?.map((item, index) => (
              <ProductItem data={item} key={item.id} />
            ))
          ) : (
            <h1>Nema proizvoda!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
export async function getServerSideProps(context) {
  const cat_alias= context.query.cat_name
const link = cat_alias?"category/"+cat_alias:""
  const data = await axios.get(
    "https://dummyjson.com/products/"+link
  );
  const cat= await axios.get("https://dummyjson.com/products/categories")
  return {
    props: {
      products: data.data,
      categories:cat.data
    }, // will be passed to the page component as props
  };
}
