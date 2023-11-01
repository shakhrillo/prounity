import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Patients = () => {

    // const [patients, setPatients] = useState([])

    const patients = [
        {id: 1, first_name: "davlatshoh", username: "davi123", last_name: "naimov"},
        {id: 2, first_name: "amir", username: "amir123", last_name: "azimov"}
    ]

    // const getPatients = async () => {
    //     try {
    //         const response = await fetch(
    //             "http://192.168.1.163:8000/v1/api/user_group_patient_views/",
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //                 },
    //             }
    //         );
    //         const jsonData = await response.json();
    //         console.log(jsonData);
    //         setPatients(jsonData)
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return(
        <div className="w-100 p-3">
            <h1>Patients</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Username</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map(item=>
                        <tr>
                            <th>{item.id}</th>
                            <th>{item.username}</th>
                            <th>{item.first_name}</th>
                            <th>{item.last_name}</th>
                            <Link to={`/patient-detail/${item.id}`}><th><button className="btn btn-outline-dark btn-sm">view</button></th></Link>
                        </tr>   
                    )}
                </tbody>
            </table> 
        </div>
    )
}

export default Patients