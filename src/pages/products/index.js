import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import ProductItem from '@/components/Product/ProductItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Products = (props) => {
  const [items, setItems]=useState([""])
  
let{products}= props
console.log(products)
  return (
    
    

    <div>
       
        <div className=' container '>
            <div className='grid grid-rows-4 grid-flow-col gap-4'>

       
    {products.products != null?products.products?.map((item,index)=>(
<ProductItem data={item} key={item.id}/>
    )):<h1>Nema proizvoda!</h1>
    }
         </div>
        </div>
 
    </div>
  )
}

export default Products;
export async function getServerSideProps(context) {

  const data = await axios.get("https://dummyjson.com/products/category/smartphones")
  return {
    props: {
      products:data.data
    }, // will be passed to the page component as props
  }
}
