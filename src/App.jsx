import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
 

  return (
    <>
      <Header />

      <Routes>

        <Route path='/' element={ <Home />}/>
        <Route path='/cart' element={ <Cart />}/>
        <Route path='/whislist' element={ <Wishlist />}/>

      </Routes>

      <Footer />
     
      
     
    </>
  )
}

export default App
