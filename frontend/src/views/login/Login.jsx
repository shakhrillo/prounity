import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { encode } from 'base-64';
import jwtDecode from 'jwt-decode';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const authHeader = 'Basic ' + encode(username + ':' + password);

            const { data } = await axios.post(
                "http://192.168.1.174:8000/login",
                { username: username, password: password },
                { headers: { Authorization: authHeader } }
            );
            // const token = data.token
            const jwtToken = data.token;
            // const decodedToken = jwtDecode(jwtToken);
            saveToken('token', JSON.stringify(jwtToken))

            if (jwtToken) {
                navigate('/sms-verify')
            }
        } catch (error) {
            console.error(error);
        }
    };

    function saveToken(key, value) {
        try {
            sessionStorage.setItem(key, value);
            console.log(`Data saved to Session Storage: ${key} - ${value}`);
        } catch (error) {
            console.error(error);
        }
    }

    // function saveToken(key, value) {
    //     try {
    //         sessionStorage.setItem(key, value);
    //         console.log(`Data saved to Session Storage: ${key} - ${value}`);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return <div className="container">
        <div className="card w-50 m-auto">
            <div className="card-header">
                <h3>Login</h3>
            </div>
            <div className="card-body">
                <form className="m-auto" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input required value={username} onChange={handleUsernameChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input required value={password} onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
                    </div>
                    <div className="d-flex gap-2">
                        <button type="submit" className="btn btn-primary mt-3 end">Submit</button>
                        <Link to={'/forgot-password'}><button type="button" className="btn btn-warning mt-3">Forgot Password</button></Link>
                    </div>

                </form>
            </div>
        </div>
    </div>;
};

export default Login;
