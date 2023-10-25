import React from "react";

const ChangePassword = () => {
    return <div>
        <div className="card w-50 m-auto">
            <div className="card-header">
                <h3>Change Password</h3>
            </div>
            <div className="card-body">
                <form className="m-auto">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter New Password</label>
                        <input
                            required type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter new password" />
                    </div>
                    <div className="form-group mt-1">
                        <label htmlFor="exampleInputEmail1">Confirm New Password</label>
                        <input
                            required type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Confirm new password" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Save</button>
                </form>
            </div>
        </div>
    </div>;
};

export default ChangePassword;
