import React from 'react';

const BlogCard = ({ blog, setBlogDetails }) => {
    const { title, image, description, uploadDate } = blog
    return (
        <div class="card mt-3" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src={image} class="img-fluid rounded-start" alt={title} />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title fw-bold fs-4">{title}</h5>
                        <p class="card-text">{description.slice(0, 200)}</p>
                        <p class="card-text"><small class="text-muted">Uploaded at {uploadDate}</small></p>
                        <button onClick={() => setBlogDetails(blog)} type="button" class="btn btn-success rounded-0 px-5" data-bs-toggle="modal" data-bs-target="#blogModal" >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;