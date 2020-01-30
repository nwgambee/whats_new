import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = (props) => {
  let articles = props.currentNews.map(article => {
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
