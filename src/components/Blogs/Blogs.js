import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('articles.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center'>Q &#38; A</h1>
            {
                blogs.map(article => <Article key={article.id} article={article}></Article>)
            }
        </div>
    );
};

export default Blogs;