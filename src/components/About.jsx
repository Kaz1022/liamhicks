import React from 'react';
import '../Sass/About.scss';
import Raven from '../img/Raven.png';

function About() {
  return (
    <div className="a-wrapper">
      <div className="a-background">
          <img src={Raven} alt="" />
      </div>
      <div className="a-main">
        <div className="a-top">
          <div className="a-titles">
            <span>AOUT THE AUTHOR</span>
            <span >BRIAN BAYNTON</span>
          </div>
        </div>
        <div className="a-bottom">
          <span>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:
          </span>
        </div>
      </div>
    </div>
  )
}

export default About