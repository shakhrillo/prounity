import React from "react";

const DeletedDoctors = () => {
    return <div className="w-100">
        <div className="p-4 w-100 bg-light me-2">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Deleted Users</h1>
                <button
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
                    {/* {doctors.map((doctor, index) => (
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
                    ))} */}
                </tbody>
            </table>
        </div>
    </div>;
};

export default DeletedDoctors;
