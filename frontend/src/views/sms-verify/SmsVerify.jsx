import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const SmsVerify = () => {
    const [smsCode, setSmsCode] = useState('')
    const navigate = useNavigate()

    const handleSmsCode = (e) => {
        setSmsCode(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = JSON.parse(sessionStorage.getItem('token'));
        axios.post('http://192.168.1.174:8000/check-sms', { sms: smsCode }, {
            headers: {
                'x-access-tokens': token
            }
        })
            .then(res => {
                if (res.status === 200) {
                    navigate('/user-list')
                } else {
                    alert('SMS code is not correct')
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    return <>
        <div className="card w-50 m-auto">
            <div className="card-header">
                <h3>SMS Verification</h3>
            </div>
            <div className="card-body">
                <form className="m-auto" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">SMS Code</label>
                        <input
                            onChange={handleSmsCode}
                            value={smsCode} required type="text"
                            className="form-control mt-1"
                            id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter SMS code" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    </>;
};

export default SmsVerify;
