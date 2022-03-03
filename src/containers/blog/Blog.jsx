import React from 'react';
import Article from '../../components/article/Article';
import {div,krish,om} from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">TEAM NTL.IPYNB</h1>
    </div>
    <div className="gpt3__blog-container">
      
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={krish} text="Krish Katyal" github="https://github.com/krishkatyal" />
        <Article imgUrl={om} text="Omprasad Sadavarte" github="https://github.com/OmSadavarte"/>
        <Article imgUrl={div} text="Divyanshu Yadav" github="https://github.com/divyanshu1810"/>
      </div>
    </div>
  </div>
);

export default Blog;
