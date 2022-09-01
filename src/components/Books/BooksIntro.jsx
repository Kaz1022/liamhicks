import React from 'react';
import { motion } from 'framer-motion';
import '../../Sass/BooksIntro.scss';
import BooksList from './BooksList';
import Bluejay from '../../img/bluejay.png';


function BooksIntro() {

  // Motion Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="bintro-wrapper" id="booksintro">
      <div className="bi-top">
        <h1>Liam Hicks Book Series</h1>
        {/* animation */}
        <div className="bi-background">
            <motion.img 
            initial={{top: '5rem', right:'-18rem'}}
            whileInView={{top: '5rem', right:'-10rem'}}
            transition={transition}
            src={Bluejay} alt="" />
        </div>
      </div>
      <div className="bi-bottom">
        <BooksList />
      </div>
    </div>
  )
}

export default BooksIntro
