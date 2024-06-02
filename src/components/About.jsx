import React from 'react'
import img4 from '../assets/img4.jpeg'

const About = () => {
  return (
    <div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <img src={img4} alt="no image"/>
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 mdLw-4/5'>The story of our plantation</h2>
                    <p className='md:w-3/4 txet-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque, enim impedit eum maxime qui aliquam maiores eos asperiores eligendi dignissimos quo magni sapiente laborum consectetur, esse assumenda! Iure, harum.</p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About