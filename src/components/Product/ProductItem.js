import { useRouter } from 'next/router'
import React from 'react'

const ProductItem = ({data}) => {
    const router= useRouter()
  return (
    
    <div className='m-3'>
         <div>
            <img className=' rounded-md' style={{height:"300px", width:"500px"}} src={data.thumbnail}/>
         </div>
         <div className=''>
         <h1 className='text-xl text-left'>{data.title}</h1>
         <p className='text-left'>${data.price}</p>
         <button className='rounded-full text-sm left-0' style={{width:"50%"}} onClick={()=>router.push("/products/"+ data.id)}>See product</button>
         </div>
    </div>
  )
}

export default ProductItem