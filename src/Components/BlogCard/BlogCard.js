import React from 'react';

const BlogCard = ({ blog, setBlogDetails }) => {
    const { title, image, description, uploadDate } = blog
    return (
        <div className="card mt-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt={title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-4">{title}</h5>
                        <p className="card-text">{description.slice(0, 200)}</p>
                        <p className="card-text"><small className="text-muted">Uploaded at {uploadDate}</small></p>
                        <button onClick={() => setBlogDetails(blog)} type="button" className="btn btn-success rounded-0 px-5" data-bs-toggle="modal" data-bs-target="#blogModal" >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;