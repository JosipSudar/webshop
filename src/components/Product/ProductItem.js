import Products from '@/pages/products'
import { useRouter } from 'next/router'
import React from 'react'



const ProductItem = ({data}) => {
    const router= useRouter()
  return (
    
    <div className='text-left'>
         <h1>{data.title}</h1>
         <div>
            <img src={data.thumbnail}/>
         </div>
         <p>{data.description}</p>

         <button onClick={()=>router.push("/products/"+ data.id)}>See product</button>
    </div>
  )
}

export default ProductItem