import React from 'react';
import '../Sass/Navbar.scss';

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Brian Baynton</div>
        <div className="n-list">
          <ul style={{listStyleType: 'none'}}>
            <li>Books</li>
            <li>Biography</li>
          </ul>
        </div>
      </div>

      <div className="n-right">
        <div className="n-icons">
          <span>ICONS</span>
          <span>ICONS</span>
          <span>ICONS</span>
          <span>ICONS</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar