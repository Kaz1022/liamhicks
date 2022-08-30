import React from 'react'
import About from './About';
import BooksIntro from './Books/BooksIntro';

function Home() {
  return (
    <div className="home">
      <BooksIntro />
      <About />
    </div>
  )
}

export default Home