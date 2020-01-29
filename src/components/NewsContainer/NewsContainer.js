import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = (props) => {
  console.log(props.currentNews.local);
  let articles = props.currentNews.local.map(article => {
    return <NewsArticle
      headline={article.headline}
      img={article.img}
      description={article.description}
      url={article.url} />
  })
  return (
    <div className='NewsContainer'>
      {articles}
    </div>  
  )
}

export default NewsContainer;
