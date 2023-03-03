import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import React from 'react'

const About = () => {
  return (
    <div>
       
          <div className='container-lg  p-10 m-8 '>
            <h1 className='text-start'>About</h1>
          </div>
          <div className='container-md my-3 py-4 mx-5'>
            <p className='text-4xl'>Ea dolore quis aute voluptate proident consectetur proident fugiat do elit proident tempor. Dolore ad fugiat ut cupidatat ipsum fugiat duis consectetur voluptate do magna sit labore. Anim nostrud amet tempor aliqua non aliquip eu enim non amet occaecat quis sunt qui. Ullamco tempor cillum anim et enim excepteur mollit adipisicing cillum.</p>
          </div>
          <div className='container-sm my-3 py-4 mx-5'>
            <p className='text-2xl'>Consequat proident non quis laboris magna amet in consequat proident. Aute occaecat aute non minim sit officia. Est dolor esse tempor nisi ut pariatur consequat ea magna. Culpa aliqua ut aliquip ad ea do velit officia eiusmod. Officia deserunt labore exercitation consequat ullamco tempor ullamco pariatur ullamco eiusmod nulla proident. Est laborum Lorem cupidatat nulla.</p>
          </div>
          <div className='product flex flex-row'>
            <img src='https://cdn.pixabay.com/photo/2015/07/01/03/13/shampoo-827141__340.jpg'/>
            <div className="flex items-center flex-row my-5">
              
              <h3 className='text-center my-5'>See our best reviwed product</h3>
              
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
            </div>
          </div> 

    </div>
  )
}

export default About