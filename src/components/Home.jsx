import React from 'react'
import FeaturedProducts from './FeaturedProducts'

export const Home = () => {
  return (
    <div className='p-2 container'>
      <header className='text-center'>
        <h1 className='text-primary'>Welcome to our Online Store</h1>
        <p>Discover our featured products and find the perfect items for you.</p>
      </header>
      <main className='text-center p-2 '>
        <h2 className='text-primary'>Featured Products</h2>
        <div 
          className="container"
          style={{background: 'linear-gradient(to bottom, #3498db, #2ecc71)', maxWidth:'800px'}}
        >
          <FeaturedProducts />
        </div>
      </main>
      <footer className='border-top border-black'>
        <p className='d-flex justify-content-center'>2023 Our Online Store. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home