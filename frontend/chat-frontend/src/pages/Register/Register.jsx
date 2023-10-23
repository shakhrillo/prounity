import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    // const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await axios.post('http://192.168.1.181:8000/api/user_sign_up_views/', {
                username,
                first_name: firstName,
                last_name: lastName,
                password,
                password2: password2
            });

            const token = response.data.msg.access;
            saveToken('token', token);

            if (token) {
                navigateToCabinet();
            }

        } catch (error) {
            console.error(error);
        }
    };

    const navigateToCabinet = () => {
        console.log('navigateToCabinet');
    };

    function saveToken(key, value) {
        try {
            localStorage.setItem(key, value);
            console.log(`Data saved to Local Storage: ${key} - ${value}`);
        } catch (error) {
            console.error(error);
        }
    }

    return <>
        <div className="card mt-5 w-50 m-auto">
            <div className="card-header bg-primary text-white">
                <h3>Register</h3>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <form onSubmit={registerUser}>
                        <input
                            required
                            className="form-control mt-3"
                            placeholder="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            required
                            className="form-control mt-3"
                            placeholder="first_name"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            required
                            className="form-control mt-3"
                            placeholder="last_name"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                            required
                            className="form-control mt-3"
                            placeholder="password"
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            required
                            className="form-control mt-3"
                            placeholder="password confirmation"
                            type="text"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary mt-3">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </>;
};

export default Register;
