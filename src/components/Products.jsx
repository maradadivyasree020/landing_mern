import React from 'react'
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpeg';
import { FaArrowRight } from "react-icons/fa";

const Products = () => {
  return (
    <div id='products'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8  mt-[100px]'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <img src={img5} alt="no image" className='w-[200px] lg:w-[350px] '/>
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 mdLw-4/5'>Building a Picturesque Garden Paradise: A Guide</h2>
                    <p className='md:w-3/4 txet-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque, enim impedit eum maxime qui aliquam maiores eos asperiores eligendi dignissimos quo magni sapiente laborum consectetur, esse assumenda! Iure, harum.</p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Read More</button>
                </div>
            </div>
        </div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16 mt-[100px]'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                {/* <div className='md:w-1/3'>
                    <img src={img6} alt='noimage' className='w-[200px] md:w-[400px]'/>
                </div> */}
                <div className='md:w-2/3 mx-auto'>
                    <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus velit harum a accusamus, enim officia! Dolor nemo deserunt explicabo debitis libero cumque at ratione tenetur molestias eaque, porro assumenda? Repellat quidem sunt similique aut? Suscipit fugit alias itaque repellendus, sint dolor provident possimus laborum magnam obcaecati dolorem, repellat deleniti illum totam amet odio tempora nihil quas recusandae ullam! Facilis non in a voluptatum alias expedita!</p>
                    <h5 className='text-brandPrimary text-xl font-semibold mb-2'>Tim Smith</h5>
                    <p>UK plantation Association</p>
                    <div>
                        <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700 pr-[5px]">Meet more customers</a>
                        <FaArrowRight className='text-brandPrimary inline-block'/>
                    </div>
                </div>
                <div className='md:w-1/3'>
                    <img src={img6} alt='noimage' className='w-[200px] md:w-[400px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products