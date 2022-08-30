import React from 'react';
import '../../Sass/Book.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';


function Book({img, url}) {
  return (
    <div className="book">
      <div className="img-container">
        <img src={img} alt="" className="image"/>
        <div class="middle">
          <div class="text">READ MORE</div>
        </div>
      </div>
      <a href={url} target="_blank" without rel="noreferrer">
      <button className="AmazonButton">
        <FontAwesomeIcon icon={faAmazon} color={"#E4A951"}  /> Browse on Amazon
      </button>
      </a>
    </div>
  )
}

export default Book