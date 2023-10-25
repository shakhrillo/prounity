import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = useState({
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        password2: '',
    });
    const navigate = useNavigate()


    const registerUser = async (e) => {
        e.preventDefault();
        if (user.password !== user.password2) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://192.168.1.174:8000/register', {
                username: user.username,
                first_name: user.firstname,
                last_name: user.lastname,
                password: user.password
            });
            if (response.status === 200) {
                navigate('/login')
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    return <div>
        <div className="card w-50 m-auto">
            <div className="card-header">
                <h3>Register</h3>
            </div>
            <div className="card-body">
                <form className="m-auto" onSubmit={registerUser}>
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
                    <div className="form-group mt-2">
                        <label htmlFor="password">Confirm password</label>
                        <input
                            required
                            type="password"
                            className="form-control"
                            id="password2"
                            name="password2"
                            placeholder="Confirm password"
                            value={user.password2}
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
