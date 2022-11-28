import React from 'react';

const BlogModal = ({ blogDetails }) => {
    return (
        <div class="modal fade" id="blogModal" tabIndex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="blogModalLabel">{blogDetails?.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

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