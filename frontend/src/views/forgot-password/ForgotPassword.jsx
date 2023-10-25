import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();

    const navigateToChangePassword = (e) => {
        e.preventDefault()
        navigate('/change-password')
    }

    return <div>
        <div className="card w-50 m-auto">
            <div className="card-header">
                <h3>Forgot Password</h3>
            </div>
            <div className="card-body">
                <form className="m-auto" onSubmit={(e) => navigateToChangePassword(e)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input
                            required type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter username(phone number) for send sms code" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Send SMS code</button>
                </form>
            </div>
        </div>
    </div>;
};

export default ForgotPassword;
