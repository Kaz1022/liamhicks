import React from "react";
import About from "./About";
import BooksIntro from "./Books/BooksIntro";
import Navbar from "./Navbar";
import Character from "./Character";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <BooksIntro />
        <About />
        <Character />
      </div>
    </>
  );
}

export default Home;
