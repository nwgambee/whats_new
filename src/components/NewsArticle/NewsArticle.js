import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className='NewsArticle'>
      <img src={props.img}/>
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
      <a href={props.url}>Read More</a>
    </div>
  )
}

export default NewsArticle;
