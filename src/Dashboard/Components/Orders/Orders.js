import React from 'react';

const Orders = () => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-title pr">
                        <h4>All Expense</h4>

                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table student-data-table m-t-20">
                                <thead>
                                    <tr>
                                        <th><label><input type="checkbox" value="" /></label>ID</th>
                                        <th>Expense Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td><label><input type="checkbox" value="" /></label>#2901</td>
                                        <td>
                                            Salary
                                        </td>
                                        <td>
                                            $2000
                                        </td>
                                        <td>
                                            <span className="badge badge-primary">Paid</span>
                                        </td>
                                        <td>
                                            edumin@gmail.com
                                        </td>
                                        <td>
                                            10/05/2017
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;