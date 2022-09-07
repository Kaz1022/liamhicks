import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import '../Sass/Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <div className="f-content">
        <span><FontAwesomeIcon icon={faCopyright} size="s" /> Brian Baynton</span>
        <div className="f-icons">
          <a href="https://twitter.com/brian_baynton13" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareTwitter} size="xl" />
          </a>
          <a href="https://www.facebook.com/D.BrianBaynton" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
          </a>
          <a href="https://www.linkedin.com/in/brian-baynton-81ba0912/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer