import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className='px-4 lg:p-14 max-w-screen-2xl mx-auto bg-neutralSilver' id='testimonal'>
        <div className='flex flex-col items-center justify-center lg:w-2/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>Our store nearby</h2>
            </div>
            <div className='flex items-center justify-between gap-8'>
                <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>
                    See on maps<span className='inline-block pl-3'><FaArrowRight className='text-white'/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter