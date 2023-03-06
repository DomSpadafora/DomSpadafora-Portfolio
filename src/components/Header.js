import React from 'react';

const Nav = () => {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <div style={linkStyle}>
          <a href="home">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="about-me">About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="resume">Resume</a>
        </div>
        <div style={linkStyle}>
          <a href="projects">Projects</a>
        </div>
        <div style={linkStyle}>
          <a href="contact">Contact</a>
        </div>
      </section>
    </nav>
  );
}

export default Nav