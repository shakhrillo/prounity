import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "../../Layout/Layout"
import { Link } from "react-router-dom"

const PatientDetail = () => {

    const {id} = useParams()
    const [patientDetails, setPatientDetails] = useState([])
    const getPatientDetails = async () => {
        try {
            const response = await fetch(
                `http://192.168.1.163:8000/v1/consultation/consultation_history_list/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const jsonData = await response.json();
            setPatientDetails(jsonData.history)
            console.log(jsonData.history)
        } catch (error) {
            console.error(error);
        }   
    }

    useEffect(()=>{
        getPatientDetails()
    })

    return(

        <Layout>
            <div className="w-100 p-3 bg-light rounded">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item breadcrumb-fs"><Link to={'/patients'}><a href="#">Patients</a></Link></li>
                <li class="breadcrumb-item active breadcrumb-fs" aria-current="page">Apply Doctors</li>
            </ol>
            </nav>
                {patientDetails.map(item=>
                    <div className="d-flex gap-2">
                        <h5 key={item.id}>{item.user_id.first_name}</h5>
                        <h5 key={item.id}>{item.user_id.last_name}</h5>
                    </div>
                )}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">N</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Appoint_date</th>
                            <th scope="col">Appoint_time</th>
                            <th scope="col">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientDetails.map((item,index)=>
                        <tr>
                            <td scope="col">{index+1}</td>
                            <td scope="col">{item.doctor_id.first_name}</td>
                            <td scope="col">{item.doctor_id.last_name}</td>
                            <td scope="col">{item.appoint_date}</td>
                            <td scope="col">{item.appoint_time}</td>
                            <td scope="col">{item.doctor_id.categories_id.name}</td>
                        </tr>    
                        )}
                    </tbody>
                </table> 
        </div>
        </Layout>
    )
}

export default PatientDetail