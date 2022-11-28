import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BlogCard from '../../Components/BlogCard/BlogCard';
import BlogModal from '../../Components/BlogModal/BlogModal';

const Blog = () => {
    const [blogDetails, setBlogDetails] = useState(null);
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://upsell-server-devshowmik.vercel.app/blogs`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <>
            <div className='blog container mb-3'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog} setBlogDetails={setBlogDetails} />)
                }
            </div>
            <BlogModal blogDetails={blogDetails} />
        </>

    );
};

export default Blog;