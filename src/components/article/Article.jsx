import React from 'react';
import './article.css';

const Article = ({ imgUrl,text, github }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3 style={{alignItems:"center", alignSelf:"center",textAlign:"center",justifyContent:"center"}}><a href={github} rel="noreferrer" target="_blank">{text}</a></h3>
      </div>
      <p><a href={github} rel="noreferrer" target="_blank">Github</a></p>
    </div>
  </div>
);

export default Article;
