import React from 'react'
import About from './About';
import BooksIntro from './Books/BooksIntro';
import Navbar from './Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <BooksIntro />
        <About />
      </div>
    </>
  )
}

export default Home