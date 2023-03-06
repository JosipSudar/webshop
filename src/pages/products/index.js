import ProductItem from "@/components/Product/ProductItem";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = (props) => {
  const [items, setItems] = useState([""]);

  let { products } = props;
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
      <div className="">
        <h1 className=" ml-3 text-left text-3xl my-8">Smartphones for you</h1>
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
  const data = await axios.get(
    "https://dummyjson.com/products/category/smartphones"
  );
  return {
    props: {
      products: data.data,
    }, // will be passed to the page component as props
  };
}
