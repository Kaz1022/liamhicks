import React from 'react';
import '../../Sass/BooksIntro.scss';
import BooksList from './BooksList';
import Bluejay from '../../img/bluejay.png';


function BooksIntro() {
  return (
    <div className="bintro-wrapper">
      <div className="bi-top">
        <h1>Liam Hick's Book Series</h1>
        <div className="bi-background">
          <img src={Bluejay} alt="" />
        </div>
      </div>
      <div className="bi-bottom">
        <BooksList />
      </div>
    </div>
  )
}

export default BooksIntro