import { Footer, Header } from 'components'
import Company from 'components/Company'
import NewAbout from 'components/NewAbout/NewAbout'
import Products from 'components/Products/Products'
import Home from 'pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div className='parallax-container'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/product' element={<Products />} />
          <Route path='/blog' element={<NewAbout />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}