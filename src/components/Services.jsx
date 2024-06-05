import React from 'react'
import shurbs from '../assets/shurbs.jpg';
import herbs from '../assets/herbs.jpg';
import creepers from '../assets/creepers.jpg'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'

const Services = () => {
    const services=[
        {id:1,title:"One-to-One Interaction",description:"Details of the plant/tree given beforehand",image:img1},
        {id:2,title:"Visit to the plantation",description:"Free visit to our plantaion",image:img2},
        {id:3,title:"Free sappling",description:"Each sappling will be planted on your visit in our plantation",image:img3}
    ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id="service">
        <div className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our categories</h2>
            <p className='text-neutralDGrey'>Providing 15+ categories</p>
        </div>
        {/* <div className='md:flex md:flex-wrap md:justify-between md:items-center flex flex-col'> */}
        <div className='flex flex-col gap-12 items-center md:flex-row md:flex-wrap md:justify-between'>
            <img src={shurbs} alt='shurbs' className='w-[200px] h-[150px]'/>
            <img src={herbs} alt='herbs' className='w-[200px] h-[150px]'/>
            <img src='https://plantura.garden/uk/wp-content/uploads/sites/2/2021/10/evergreen-climbers.jpg' alt='climber' className='w-[200px] h-[150px]'/>
            <img src={creepers} alt='creepers' className='w-[200px] h-[150px]' />
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIjB9Jq2OrGJPcAf5qCJgcq7-28l05WId6w&s' alt='may more..'/>
        </div>
        <div className='mt-20 md:w=1/2 mx-auto text-center'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Our Services</h2>
            <p className='text-neutralDGrey'>Providing 15+ categories</p>
        </div>
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 '>
            {
                services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center h-full'>
                    <div>
                        <div className='bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                            <img src={service.image} alt='no image' className='ml-5 w-[150px]'/>
                        </div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-neutralGrey'>{service.description}</p>
                    </div>
                    </div>
            )}
        </div>
    </div>
  )
}

export default Services