import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'; 
import { FaXmark,FaBars } from 'react-icons/fa6';
const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const[isSticky,setIsSticky]=useState(false)
  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  useEffect(()=>{
    const handleScroll =()=>{
        if(window.scrollY>100)
        setIsSticky(true);
        else
        setIsSticky(false);
      // console.log(window.scrollY,isSticky)
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>{
        window.removeEventListener('scroll',handleScroll)
    }
  })
  const navItems=[
    {link:"Home",path:"home"},
    {link:"Service",path:"service"},
    {link:"About",path:"about"},
    {link:"Product",path:"product"},
    {link:"Testimonal",path:"testimonal"},
    {link:"FAQ",path:"faq"},
  ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>  
        <Router >
          <div className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <Link to={'/'} className='text-2xl font-semibold flex items-center space-x-3'>
                    <img src="data:image/jpeg;base64,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" 
                         alt='logo' className='w-[75px] inline-block items-center'/>
                    <span className='text-[#263238]'>Tiny Seeds</span>
                </Link>
                <ul className='md:flex space-x-12 hidden'>
                    {navItems.map(({link,path},id)=>(
                          <li key={id}>
                            <Link to={path} spy="true" smooth="true" offset={-100} key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>
                          </li>
                    ))}
                </ul>
                <div className='space-x-12 hidden lg:flex items-center'>
                  <Link to={'/'} className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</Link>
                  <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign Up</button>
                </div>
                <div className='md:hidden'>
                  <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500'>{
                    isMenuOpen?
                    (<FaXmark className='h-6 w-6 text-neutralDGrey'/>):
                    (<FaBars className='h-6 w-6 text-neutralDGrey'/>)
                  }</button>
                </div>
            </div>
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
              <ul>
              {navItems.map(({link,path},id)=>(
                <li key={id}>
                  <Link to={path} spy="true" smooth="true" offset={-100} key={path} className='block cursor-pointer text-base text-white hover:text-black first:font-medium'>{link}</Link>
                </li>
              ))}
              </ul>
            </div>
            </div>
        </Router>

    </header>
  )
}

export default Navbar