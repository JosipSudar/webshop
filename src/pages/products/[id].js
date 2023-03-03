
import axios from 'axios'
import React from 'react'


const SingleProducts = (props) => {
 
  
let{product}= props
  return (
    
    

    <div>
    
        <div className=' container '>
          {JSON.stringify(product)}

        </div>
     
    </div>
  )
}

export default SingleProducts;
export async function getServerSideProps(context) {
const id = context.query.id
  const data = await axios.get("https://dummyjson.com/products/"+id)
  return {
    props: {
      product:data.data
    }, // will be passed to the page component as props
  }
}
