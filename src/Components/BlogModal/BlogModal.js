import React from 'react';

const BlogModal = ({ blogDetails }) => {
    return (
        <div className="modal fade" id="blogModal" tabIndex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="blogModalLabel">{blogDetails?.title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <div className="img">
                            <img src={blogDetails?.image} alt={blogDetails?.title} className=' img-fluid' />
                        </div>
                        {blogDetails?.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;