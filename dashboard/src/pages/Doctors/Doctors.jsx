import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";


const Doctors = () => {
    const [modal, setModal] = useState(true)
    const [doctors, setDoctors] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    useEffect(() => {
        getDoctors();
    }, []);

    const getDoctors = async () => {
        try {
            const response = await fetch(
                "http://192.168.1.163:8000/v1/api/user_group_doctor_views/",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const jsonData = await response.json();
            setDoctors(jsonData)
            console.log(jsonData);
        } catch (error) {
            console.error(error);
        }
    }

    const postData = async () => {
        const url = "http://192.168.1.163:8000/v1/api/user_create_views/";
        const data = {
            username,
            first_name: firstName,
            last_name: lastName,
            password,
            password2: password,
            price: 0,
            description: "",
            groups: [1]
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(url, requestOptions);
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error(error);
        }
        getDoctors()
    };

    return <Layout>
        <div className="w-100">
            <div className="p-4 w-100 bg-light me-2">
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Doctors</h1>
                    <button onClick={() => setModal(!modal)}
                        className="btn btn-outline-dark">
                        +Add
                    </button>
                </div>
                <table className="table">
                    <thead className="bg-dark">
                        <tr>
                            <th>N</th>
                            <th>Username</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                        </tr>
                    </thead>

                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{doctor.username}</td>
                                <td>{doctor.first_name}</td>
                                <td>{doctor.last_name}</td>
                                <td>
                                    <button className="btn btn-warning">Edit</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`${modal ? "d-flex  justify-content-center align-items-center w-100" : "d-none"}`}>
                <div className="card w-50">
                    <div className="card-header bg-dark text-light">
                        <h3>Add Doctor</h3>
                    </div>
                    <div className="card-body">
                        <input value={username} onChange={(e) => setUsername(e.target.value)}
                            className="form-control mb-2"
                            placeholder="username"
                            type="text" />
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)}
                            className="form-control mb-2"
                            placeholder="first name"
                            type="text" />
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)}
                            className="form-control mb-2"
                            placeholder="last name"
                            type="text" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                            className="form-control mb-2"
                            placeholder="password"
                            type="text" />
                        <button onClick={postData} className="btn btn-dark ">add</button>
                    </div>
                </div>
            </div>
        </div>;
    </Layout>

};

export default Doctors;
