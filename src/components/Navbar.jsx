import React from 'react';
import { Link } from 'react-router-dom';
import '../Sass/Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'


function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name"><Link style={{textDecoration: 'none'}} to="/">Brian Baynton</Link></div>
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <li>Books</li>
            <li>About the Author</li>
          </ul>
        </div>
      </div>

      <div className="n-right">
        <div className="n-icons">
          <a href="https://twitter.com/brian_baynton13" target="_blank" without rel="noreferrer">
          <FontAwesomeIcon icon={faSquareTwitter} size="xl" />
          </a>
          <a href="https://www.facebook.com/D.BrianBaynton" target="_blank" without rel="noreferrer">
          <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
          </a>
          <a href="https://www.linkedin.com/in/brian-baynton-81ba0912/" target="_blank" without rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar