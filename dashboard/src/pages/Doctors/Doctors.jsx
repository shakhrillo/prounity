import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";


const Doctors = () => {
    const [modal, setModal] = useState(false)
    const [doctors, setDoctors] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [editingDoctorId, setEditingDoctorId] = useState(null);
    const BASE_URL = 'http://192.168.1.163:8000'

    useEffect(() => {
        getDoctors();
    }, []);

    const getDoctors = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/v1/api/user_group_doctor_views/`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const jsonData = await response.json();
            setDoctors(jsonData)
        } catch (error) {
            console.error(error);
        }
    }

    const postData = async () => {
        const url = `${BASE_URL}/v1/api/user_create_views/`;
        const data = {
            username,
            first_name: firstName,
            last_name: lastName,
            password: password,
            password2: password,
            price,
            description,
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
        setModal(false)
        clearInputs()
    };

    const deleteDoctor = async (id) => {
        const url = `${BASE_URL}/v1/api/user_details_views/${id}/`;
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",

            },
        };
        try {
            const response = await fetch(url, requestOptions);
            const responseData = await response.json();
        } catch (error) {
            console.error(error);
        }
        getDoctors()
    }

    const editDoctor = (id) => {
        const doctor = doctors.find((doctor) => doctor.id === id);
        if (doctor) {
            setEditingDoctorId(id);
            setModal(true);
            setUsername(doctor.username);
            setFirstName(doctor.first_name);
            setLastName(doctor.last_name);
            setDescription(doctor.description);
            setPrice(doctor.price);
        }
    };

    const updateDoctor = async () => {
        const url = `${BASE_URL}/v1/api/user_details_views/${editingDoctorId}/`;
        const data = {
            username,
            first_name: firstName,
            last_name: lastName,
            price,
            description,
            groups: [1],
        };

        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch(url, requestOptions);
            const responseData = await response.json();
        } catch (error) {
            console.error(error);
        }
        getDoctors();
        setEditingDoctorId(null);
        setModal(false);
        clearInputs()
    };

    const clearInputs = () => {
        setUsername("");
        setFirstName("");
        setLastName("");
        setDescription("");
        setPrice(0);
        setPassword("");
    };

    return <>
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
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{doctor.username}</td>
                                <td>{doctor.first_name}</td>
                                <td>{doctor.last_name}</td>
                                <td>{doctor.description}</td>
                                <td>{doctor.price}</td>
                                <td>
                                    <button onClick={() => editDoctor(doctor.id)} className="btn btn-warning">Edit</button>
                                    <button onClick={() => deleteDoctor(doctor.id)} className="btn btn-danger">Delete</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={`${modal ? "d-flex modal-box justify-content-center align-items-center w-100" : "d-none"}`}>
                <div className="card w-50">
                    <div className="card-header d-flex justify-content-between align-items-center bg-dark text-light">
                        <h3>{editingDoctorId ? "Edit Doctor" : "Add Doctor"}</h3>
                        <button onClick={() => { setModal(!modal); setEditingDoctorId(null) }} className="btn-close bg-light"></button>
                    </div>
                    <div className="card-body">
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control mb-2"
                            placeholder="username"
                            type="text"
                        />
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-control mb-2"
                            placeholder="first name"
                            type="text"
                        />
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="form-control mb-2"
                            placeholder="last name"
                            type="text"
                        />
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="form-control mb-2"
                            placeholder="description"
                            type="text"
                        />
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="form-control mb-2"
                            placeholder="price"
                            type="number"
                        />
                        {!editingDoctorId && (
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control mb-2"
                                placeholder="password"
                                type="text"
                            />
                        )}
                        {editingDoctorId ? (
                            <button onClick={updateDoctor} className="btn btn-dark">
                                Update
                            </button>
                        ) : (
                            <button onClick={postData} className="btn btn-dark">
                                Add
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </>

};

export default Doctors;
