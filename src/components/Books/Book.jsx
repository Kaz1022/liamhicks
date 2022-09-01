import React from 'react';
import { Link } from 'react-router-dom';
import '../../Sass/Book.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon } from '@fortawesome/free-brands-svg-icons';


function Book({img, url, id}) {
  return (
    <div className="book">
      <div className="img-container">
        <img src={img} alt="" className="image"/>
        <div className="middle">
          <div className="text"><Link to="/liamhicks" state={{ clickedIndex: id }} style={{textDecoration: 'none'}}>READ MORE</Link></div>
        </div>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="AmazonButton">
        <FontAwesomeIcon icon={faAmazon} color={"#E4A951"}  /> Browse on Amazon
      </button>
      </a>
    </div>
  )
}

export default Book