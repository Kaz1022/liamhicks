import React from 'react';
import { motion } from 'framer-motion'
import '../Sass/About.scss';
import Raven from '../img/Raven.png';

function About() {

  // Motion Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="a-wrapper" id="about">
      <div className="a-background">
          <motion.img
          initial={{top: '6.5rem', left:'-8rem'}}
          whileInView={{top: '6.5rem', left:'0rem'}}
          transition={transition} 
          src={Raven} alt="" />
      </div>
      <div className="a-main">
        <div className="a-top">
          <div className="a-titles">
            <span>ABOUT THE AUTHOR</span>
            <span >BRIAN BAYNTON</span>
          </div>
        </div>
        <div className="a-bottom">
          <span>
          Brain grew up on Tecumseh Avenue in Chatham, Ontario, named for the famous Shawnee chief. On a summer evening as a child, Brian and one of his older sisters discovered an old, braided leather belt while out on a walk. His sister, who was studying the war of 1812 at the time, posed a question: "What if this belt had belong to Tecumseh?" The river bank they were walking along was on the route that Tecumseh and his warriors would have taken before Maraiviantown.<br/><br/>
          
          The question fired young Brian's imagination, sparking an intense interest in the story of the Shawnee chief and his fight for the Native peoples in North Ameria. Reading books and visiting forts and museums, Brian strove to learn more about the history of his home. Beginning with Tecumseh, Brian's interest continued to migrate backwards in time, to the era of the of the Seven Years War, or the French and Indian War as it was called in North America.<br/><br/>

          In his novels, Brian combines his passion for the history of his country and its people with his love of the land in which he spent his childhood. The Ojibwa town of Aamjiwnaang that provides the backdrop for many of his character's adventures was a real historical location located along the St.Clair river. As a boy, Brian enjoyed many summer days on that river at his grandfather's cottage, and his novels attempt to reflect the natural history, wild beauty and his fond appreciation of the area.<br/><br/>  

          Brian lives with his wife in Ontario, is the father to three adult children and proud owner of three beautiful dogs - one of which is the inspiration for the intrepid 'Pup' featured in the books.<br/><br/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default About