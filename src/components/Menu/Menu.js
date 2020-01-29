import React from 'react';
import './Menu.css'

// MENU COMPONENT CODE GOES HERE

const Menu = ({changeSource}) => {
  return (
    <div className='Menu'>
      <button className='news-src-btn' onClick={changeSource}>Entertainment</button>
      <button className='news-src-btn' onClick={changeSource}>Health</button>
      <button className='news-src-btn' onClick={changeSource}>Local</button>
      <button className='news-src-btn' onClick={changeSource}>Science</button>
      <button className='news-src-btn' onClick={changeSource}>Technology</button>
    </div>
  )
}

export default Menu;
