import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import NewsLetter from './components/NewsLetter'
import Foter from './components/Foter'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>    
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <NewsLetter/>
      <Foter/>
    </>
  )
}

export default App