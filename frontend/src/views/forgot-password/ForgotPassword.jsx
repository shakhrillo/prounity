import React from "react";

const ForgotPassword = () => {
    return <div>
        <div className="card w-50 m-auto">
            <div className="card-header">
                <h3>Forgot Password</h3>
            </div>
            <div className="card-body">
                <form className="m-auto">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInputPassword1">New password</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="New password" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInputPassword1">Confirm new password</label>
                        <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm new password" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Send SMS For Submit</button>
                </form>
            </div>
        </div>
    </div>;
};

export default ForgotPassword;
