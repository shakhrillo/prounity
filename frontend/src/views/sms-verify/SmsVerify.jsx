import React from "react";

const SmsVerify = () => {
    return <div>
        <div className="card w-50 m-auto">
            <div className="card-header">
                <h3>SMS confirmation to reset password</h3>
            </div>
            <div className="card-body">
                <form className="m-auto">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">SMS Code</label>
                        <input required type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter SMS code" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    </div>;
};

export default SmsVerify;
