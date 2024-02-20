import React from "react";
import { motion } from "framer-motion";
import "../Sass/About.scss";
import Raven from "../img/Raven.png";

function About() {
  // Motion Transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="a-wrapper" id="about">
      <div className="a-background">
        <motion.img
          initial={{ top: "6.5rem", left: "-8rem" }}
          whileInView={{ top: "6.5rem", left: "0rem" }}
          transition={transition}
          src={Raven}
          alt=""
        />
      </div>
      <div className="a-main">
        <div className="a-top">
          <div className="a-titles">
            <span>ABOUT THE AUTHOR</span>
            <span>BRIAN BAYNTON</span>
          </div>
        </div>
        <div className="a-bottom">
          <span>
            I remember the exact moment I first became interested in learning
            more about the wars that took place in the Eastern forests of North
            America throughout the 1700’s, and which culminated with the War of
            1812. I was in grade five at Winston Churchill Public School in
            Chatham Ontario. My sister who was three years ahead of me, was
            studying the War of 1812 in her history class. When she would do her
            homework at our kitchen table, she would tell of what she learned
            that day about the war and its various battles. The Battle of the
            Thames was fought in and around Chatham as the British Army and
            their Native allies retreated from Fort Malden in Amherstburg. The
            retreating British followed the Thames River which runs through the
            heart of Chatham attempting to find refuge with the main British
            forces in far off Burlington Heights. The Shawnee war chief Tecumseh
            and his followers fought a rearguard action at the location of
            Tecumseh Park in what is now the centre of Chatham, looking to slow
            up the American’s pursuit. The two armies and Tecumseh’s followers
            would meet again at Moraviantown, where Tecumseh would meet his end.
            That summer, my sister and I were walking along the Thames when she
            came upon on an old and very beat up braided belt. She posed the
            question, “what if this belt belonged to Tecumseh?” The retreat of
            Tecumseh’s followers and the British forces on that October day in
            1813 would have taken them along the bank where the belt lay.
            <br />
            <br />
            Her question fired my imagination and caused me to read all I could
            about the Shawnee chief, and the more I read the more I learned how
            the War of 1812, at least from a Native perspective, was perhaps the
            final battle in a war against white expansion that had spanned a
            century and a half or more. Most of my reading focused on the French
            and Indian War (1754-1760). Most Canadian students (me included)
            would learn about Montcalm and Wolfe and the battle for Quebec, but
            it was the war at the forest level that most intrigued me – the
            Native alliances with each other and with which ever European power
            they were supporting – to me that is where the real war was fought.
            <br />
            <br />
            Also, at some point, I decided I would someday write a book, though
            when I would think about doing the writing, I had no idea what it
            should be about. I wanted to write only one, just so I could tell
            myself that I had written a book. That book turned out the be ‘The
            Heron’s Song’ the first book in what was to become the Liam Hicks
            Series. The main character ‘Liam’ is a frontiersman and woods
            runner, who scouts for the British army in the Champlain Valley
            during the French and Indian War. ‘The Heron’s Song’ is set in the
            time of Pontiac’s War at Detroit, three years after the French
            surrender at Montreal. The positive feedback for ‘The Heron’s Song’
            encouraged me to write three more books in the Liam Hicks Series –
            ‘Song of the Blue Jay’, ‘The Raven Calls’ and the recently published
            ‘Trickster Raven and the Trail to Gitchee-Gami’. You can find more
            about each book by clicking on their image on this page.
            <br />
            <br />
            I currently reside in Southern Ontario with my wife Janice and our
            three black and white Spinger Spaniels. Our three grown children all
            live in Western Canada with respective spouses and significant
            others.
            <br />
            <br />
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
