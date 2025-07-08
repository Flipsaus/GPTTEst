import React from 'react';

function Header() {
  return (
    <header className="hero">
      <h1>Jane Doe Portfolio</h1>
      <p className="tagline">Crafting intuitive digital experiences</p>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
