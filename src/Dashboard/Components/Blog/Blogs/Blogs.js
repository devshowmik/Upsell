import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Blogs = () => {
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await fetch(`https://upsell-server-devshowmik.vercel.app/blogs`);
            const data = await res.json();
            return data;
        }
    })

    const handleBlogDlete = id => {
        fetch(`https://upsell-server-devshowmik.vercel.app/blogs/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('item Deleted Successfully');
                    refetch();
                }
            })
    }
    return (
        <>
            <table className="table text-capitalize">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Image</th>
                        <th scope="col">Product Title</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map((blog, i) => <tr key={blog._id}>
                            <th scope="row">{i + 1}</th>
                            <td><img src={blog.image} alt="" className='rounded' width='50' /></td>
                            <td>{blog.title}</td>
                            <td><Link to={`/dashboard/blog/update/${blog._id}`} className=' btn btn-warning'>Edit</Link> <span onClick={() => handleBlogDlete(blog._id)} className=' btn btn-danger'>Delete</span></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </>
    );
};

export default Blogs;