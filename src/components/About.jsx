import React from 'react'
import img4 from '../assets/img4.jpeg'
import { MdPeople } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const About = () => {
  return (
    <div>
        <div id='about' className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div>
                    <img src={img4} alt="no image"/>
                </div>
                <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The story of our plantation</h2>
                    <p className='md:w-3/4 txet-sm text-neutralDGrey mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum eaque, enim impedit eum maxime qui aliquam maiores eos asperiores eligendi dignissimos quo magni sapiente laborum consectetur, esse assumenda! Iure, harum.</p>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Read More</button>
                </div>
            </div>
        </div>
        <div id='product' className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 bg-neutralSilver py-16 mt-[150px]'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Harvest the Garden <br/> <span className='text-brandPrimary'>of Your Dreams</span></h2>
                    <p>Nurture Your Dream Garden at Home at ease</p>
                </div>
                <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <MdPeople className='text-brandPrimary text-3xl'/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>20,025</h4>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <PiPlantFill className='text-brandPrimary text-3xl'/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>1,50,125</h4>
                                <p>Planting Count</p>
                            </div>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div className='flex items-center gap-4'>
                            <FaHandHoldingHeart className='text-brandPrimary text-3xl'/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>20,025</h4>
                                <p>Contributions</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <IoIosPeople className='text-brandPrimary text-3xl'/>
                            <div>
                                <h4 className='text-2xl text-neutralDGrey font-semibold'>20,025</h4>
                                <p>Our Plantation's Visitors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About

{/* <MdPeople /> */}
{/* <PiPlantFill /> */}
{/* <FaHandHoldingHeart /> */}
{/* <IoIosPeople /> */}