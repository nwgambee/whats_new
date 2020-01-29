import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE

const Menu = () => {
  return (
    <div className='Menu'>
      <button className='news-src-btn'>Entertainment</button>
      <button className='news-src-btn'>Health</button>
      <button className='news-src-btn'>Local</button>
      <button className='news-src-btn'>Science</button>
      <button className='news-src-btn'>Technology</button>
    </div>
  )
}

export default Menu;
