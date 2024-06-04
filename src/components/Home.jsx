import { Carousel } from 'flowbite-react'
import React from 'react'
import '../App.css'

const Home = () => {
  return (
    <div id='home' className='bg-neutralSilver'>
        <div className='px-4 lg:px-14 max-w-screen-2xl max-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
            <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div><img src="https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.jpg?s=612x612&w=0&k=20&c=kip26_08vy0zT90x2bA9frWUD6ZEuzPkw8_9uv8cfrw=" className='w-[800px] h-[500px]'/></div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>"Planting trees is planting hope."<br/><span className=' text-xl text-brandPrimary leading-snug '>— Wangari Maathai</span></h1>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Register</button>
                </div>
            </div>
            <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div><img src="https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.jpg?s=612x612&w=0&k=20&c=kip26_08vy0zT90x2bA9frWUD6ZEuzPkw8_9uv8cfrw=" className='w-[800px] h-[500px]'/></div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>"Planting trees is planting hope."<br/><span className=' text-xl text-brandPrimary leading-snug'>— Wangari Maathai</span></h1>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Register</button>
                </div>
            </div>
            <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                <div><img src="https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.jpg?s=612x612&w=0&k=20&c=kip26_08vy0zT90x2bA9frWUD6ZEuzPkw8_9uv8cfrw=" className='w-[800px] h-[500px]'/></div>
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>"Planting trees is planting hope."<br/><span className=' text-xl text-brandPrimary leading-snug'>— Wangari Maathai</span></h1>
                    <button className='px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4'>Register</button>
                </div>
            </div>
        </Carousel>
        </div>
    </div>
  )
}

export default Home