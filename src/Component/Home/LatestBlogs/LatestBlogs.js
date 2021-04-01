import React, { useState } from 'react';
import LatestBlogsData from '../FakeData/LatestBlogsData';
import LatestBlogsCard from '../LatestBlogsCard/LatestBlogsCard';
import './LatestBlogs.css';

const LatestBlogs = () => {
    const [ blogNews, setBlogNews ] = useState(LatestBlogsData);
    return (
        <div className="latest-blogs-part">
            <div className="container">
                <div className="section-heading">
                    <p>Recent News</p>
                    <h1>Latest From Blog</h1>
                </div>
                <div>
                    <div className="row">
                        {
                            blogNews.map(blogNews => <LatestBlogsCard key={blogNews.id} blogNews={blogNews}></LatestBlogsCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlogs;