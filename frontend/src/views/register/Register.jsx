import React, { useState } from "react";

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        firstname: '',
        lastname: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({
            username: '',
            firstname: '',
            lastname: '',
            password: '',
        });
        console.log(user);
    };

    return <div>
        <div className="card w-50 m-auto">
            <div className="card-header">
                <h3>Register</h3>
            </div>
            <div className="card-body">
                <form className="m-auto" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Enter username"
                            value={user.username}
                            onChange={handleInputChange}
                        />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">Firstname</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="firstname"
                            name="firstname"
                            placeholder="Enter firstname"
                            value={user.firstname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Lastname</label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="lastname"
                            name="lastname"
                            placeholder="Enter lastname"
                            value={user.lastname}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="password">Password</label>
                        <input
                            required
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            value={user.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn d-flex btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    </div>;
};

export default Register;
