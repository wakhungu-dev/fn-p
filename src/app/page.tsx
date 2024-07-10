'use client'
import Navbar from '@/components/front-end/Navbar'
import React, { useState } from 'react'
import Cart from '@/components/front-end/Cart'
import Hero from '@/components/front-end/Hero'
import Feature from '@/components/front-end/Feature'


const Home = () => {
  const [showCart, setShowCart] = useState(false)

  return (
    <main>
      <Navbar setShowCart={setShowCart} />
      {showCart && <Cart setShowCart={setShowCart} />}
      <Hero />
      <Feature/>
    </main>
  )
}

export default Home