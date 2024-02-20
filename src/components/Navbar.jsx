import { React, useRef } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../Sass/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareFacebook,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <Link style={{ textDecoration: "none" }} to="/" onClick={goTop}>
            Brian Baynton
          </Link>
        </div>
        <div className="n-list" ref={navRef}>
          <ul style={{ listStyleType: "none" }}>
            <ScrollLink
              to="booksintro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={hideNavbar}
            >
              <li>Books</li>
            </ScrollLink>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={hideNavbar}
            >
              <li>Bio</li>
            </ScrollLink>
            <ScrollLink
              to="character"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={hideNavbar}
            >
              <li>Character</li>
            </ScrollLink>
          </ul>
        </div>
        <div className="n-button" onClick={showNavbar}>
          <button className="nav-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      <div className="n-right">
        <div className="n-icons">
          <a
            href="https://twitter.com/brian_baynton13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSquareTwitter} size="xl" />
          </a>
          <a
            href="https://www.facebook.com/D.BrianBaynton"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSquareFacebook} size="xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-baynton-81ba0912/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
