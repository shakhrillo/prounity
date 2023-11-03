import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";

const Patients = () => {

    const [patients, setPatients] = useState([])

    const getPatients = async () => {
        try {
            const response = await fetch(
                "http://192.168.1.163:8000/v1/api/user_group_patient_views/",
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const jsonData = await response.json();
            setPatients(jsonData)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getPatients()
    },[])

    return(
        <Layout>
            <div className="w-100 p-3 bg-light rounded">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active breadcrumb-fs" aria-current="page">Patients</li>
            </ol>
            </nav>
            <div className="card p-3 mb-3">
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
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>
                                <div className="btn-group" role="group" aria-label="Basic outline example">
                                    <Link className="btn btn-outline-primary btn-sm" to={`/patient-history/${item.id}`}>view history</Link>
                                </div>
                            </td>
                        </tr>   
                    )}
                </tbody>
            </table> 
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
        </Layout>
    )
}

export default Patients