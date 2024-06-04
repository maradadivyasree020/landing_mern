import React from 'react'
import img7 from '../assets/img7.jpeg';
import img9 from '../assets/img9.jpeg';
import img10 from '../assets/img10.jpeg';
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const blogs=[
    {id:1,title:"Begin with the Basics",img:img7},
    {id:2,title:"Learn Through Tech",img:img9},
    {id:3,title:"Learn from the Wise",img:img10},
  ]
    return (
    <div id='faq' className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Support from Our Expert Teams</h2>
            <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque, enim impedit eum maxime qui aliquam maiores eos asperiores eligendi dignissimos quo magni sapiente laborum consectetur, esse assumenda! Iure, harum.</p>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map(blog =><div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={blog.img} alt='no img' className='hover:scale-95 transition-all duration-300'/>
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                        <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                        <div className='flex items-center justify-center gap-1'>
                            <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700 pr-[5px]">Read more</a>
                            <FaArrowRight className='text-brandPrimary inline-block'/>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default Blog