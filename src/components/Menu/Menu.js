import React from 'react';
import './Menu.css'

const Menu = ({changeSource}) => {
  return (
    <div className='Menu'>
      <button className='news-src-btn' onClick={changeSource} name='entertainment'>Entertainment</button>
      <button className='news-src-btn' onClick={changeSource} name='health'>Health</button>
      <button className='news-src-btn' onClick={changeSource} name='local'>Local</button>
      <button className='news-src-btn' onClick={changeSource} name='science'>Science</button>
      <button className='news-src-btn' onClick={changeSource} name='technology'>Technology</button>
    </div>
  )
}

export default Menu;
