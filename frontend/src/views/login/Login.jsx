import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([
        { username: 'admin', password: '123' },
        { username: 'user', password: 'user' },
        { username: 'user3', password: 'password3' },
    ]);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const matchedUser = users.find(
            (user) => user.username === username && user.password === password
        );

        if (matchedUser) {
            setLoggedIn(true);
        } else {
            alert('Неверное имя пользователя или пароль');
        }

        setUsername('');
        setPassword('');
    };

    if (isLoggedIn) {
        return <div>Вы успешно вошли!</div>;
    }

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
