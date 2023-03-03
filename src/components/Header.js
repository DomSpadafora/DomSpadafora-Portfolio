import React from 'react'
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a class='current' href='#home'>Home</a></li>
          <li><a class='smoothscroll' href='#about me'>About Me</a></li>
          <li><a class='smoothscroll' href='#resume'>Resume</a></li>
          <li><a class='smoothscroll' href='#projects'>Projects</a></li>
          <li><a class='smoothscroll' href='#contact'>Contact</a></li>
        </ul>
      </nav>
      <h1>Dom Spadafora</h1>
      <p>
        Currently a Full-Stack Web Developer aspiring to create the best opportunities for my family and I. Take a look around to learn more about me.
      </p>
    </header>
  )
}

export default Header

