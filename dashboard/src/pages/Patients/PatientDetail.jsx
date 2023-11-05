import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import User from '../../assets/images/user1.png'
import DeleteItem from "../DeleteItem/DeleteItem"

const PatientDetail = () => {

    const {id} = useParams()
    const [patientDetails, setPatientDetails] = useState([])
    const [message, setMessage] = useState([])
    const [apply, setApply] = useState([])
    const [patientHistory, setPatientHistory] = useState([]);

    const [openIndex, setOpenIndex] = useState(null);
    const getPatientDetails = async () => {
        try {
            const response = await fetch(
                `http://192.168.1.163:8000/v1/api/user_details_views/${id}/`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const jsonData = await response.json();
            setPatientDetails(jsonData)
        } catch (error) {
            console.error(error);
        }   
    }

    const getMessage = async () => {
        try {
            const response = await fetch(
                `http://192.168.1.163:8000/v1/chat/patient_conversation/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            const jsonData = await response.json();
            setMessage(jsonData)
        } catch (error) {
            console.error(error);
        }   
    }

    const getApply = async () => {
        try {
          const response = await fetch(
            `http://192.168.1.163:8000/v1/consultation/consultation_history_list/${id}/`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          const jsonData = await response.json();
          setApply(jsonData.history);
          console.log(jsonData.history);
        } catch (error) {
          console.error(error);
        }
      };

    const getPatientHistory = async () => {
        try {
          const response = await fetch(
            `http://192.168.1.163:8000/v1/shop_news/history_bay_drugs_list_views/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          const jsonData = await response.json();
          setPatientHistory(jsonData);
        } catch (error) {
          console.error(error);
        }
      };

      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
        return formattedDate;
      };

    useEffect(()=>{
        getPatientDetails()
        getMessage()
        getPatientHistory();
        getApply()
    },[])

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        // getMessage()
      };



    return(
            <div className="w-100 p-3 bg-light rounded">
                <div className="row justify-content-between mb-3">
                    <div className="card  p-4 col-4">
                        <div className="row card-body d-flex align-items-center justify-content-around">
                            <img className="col-2" style={{width:"100px",width:"100px", borderRadius:"50%"}} src={User} alt="" />
                            <div className="col-8">
                                    <ul class="list-group">
                                    <li class="list-group-item">Firstname : {patientDetails.first_name}</li>
                                    <li class="list-group-item">Lastname : {patientDetails.last_name}</li>
                                    <li class="list-group-item">Username :  {patientDetails.username}</li>
                                    <li class="list-group-item">Last seen : 14:03</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                <div className="col-8">
                    <div className="card p-4">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active breadcrumb-fs" aria-current="page">Patients</li>
                        </ol>
                    </nav>
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
                                {apply.map((item,index)=>
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{item.doctor_id.first_name}</td>
                                        <td>{item.doctor_id.last_name}</td>
                                        <td>{item.appoint_date}</td>
                                        <td>{item.appoint_time}</td>
                                        <td>{item.doctor_id.categories_id.name}</td>

                                    </tr>
                                )}
                            </tbody>
                        </table>
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
                </div>
                </div>
                <div className="row justify-content-between mb-3">
                    <div className="card  p-4 col-4">
                        <div style={{height:"350px"}} className="overflow-auto ">
                            {message.map((item, index) => (   
                                <div key={index}>
                                <button
                                    className="btn btn-light text-start my-2 w-100"
                                    onClick={() => handleToggle(index)}
                                >
                                    {item.receiver.first_name + " "} 
                                    {item.receiver.last_name}
                                    <p className="float-end p-0 m-0">{item.receiver.categories_id.name}</p>
                                </button>
                                {openIndex === index && (
                                    <div style={{height:"300px"}} className="collapse show overflow-auto bg-light p-2">
                                    <div className="bg-warning w-50  rounded text-light text-start mb-2 d-flex align-items-center justify-content-between">{item.message_set.map(i=> <>{i.sender.groups.map(g=><>{g.name == "Doctor" ? <div className="d-flex align-items-center justify-content-between px-1"><div className=" w-75">{i.text}</div> <DeleteItem get_data={getMessage} url={`v1/chat/message_delete/${i.id}/`}/></div>:""}</>)}</>)}</div>
                                    <div className="bg-success w-50  text-start rounded text-light float-end mb-2 ">{item.message_set.map(i=> <>{i.sender.groups.map(g=><>{g.name == "Patient" ? <div className="d-flex align-items-center justify-content-between px-1"><div className=" w-75">{i.text}</div> <DeleteItem  get_data={getMessage} url={`v1/chat/message_delete/${i.id}/`}/></div>:""}</>)}</>)}</div>
                                    </div>
                                )}
                                
                                </div>
                            ))}
                        </div>
                        <nav className="py-4" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active breadcrumb-fs" aria-current="page">Chat history</li>
                        </ol>
                    </nav>
                    </div>
                <div className="col-8">
                    <div className="card p-4">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active breadcrumb-fs" aria-current="page">Drugs history</li>
                        </ol>
                    </nav>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">N</th>
                            <th scope="col">Name of Drugs</th>
                            <th scope="col">Price of Drugs</th>
                            <th scope="col">Image of Drugs</th>
                            <th scope="col">Total price</th>
                            <th scope="col">Date / Time</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {patientHistory.map((item,index) => (
                                <tr className="align-middle" key={index}>
                                    <td>{index+1}</td>

                                    <td>
                                    {item.drugs_id.map((i, index) => (
                                        <p key={index}>{i.name}</p>
                                    ))}
                                    </td>
                                    <td>
                                    {item.drugs_id.map((i, index) => (
                                        <p key={index}>{i.price}$</p>
                                    ))}
                                    </td>
                                    <td>
                                    <div className="d-flex flex-column">
                                        {item.drugs_id.map((i, index) => (
                                        <img key={index}
                                            className="my-1 rounded"
                                            style={{ width: "70px", height: "50px", objectFit: "cover" }}
                                            src={`http://192.168.1.163:8000${i.img}`}
                                            alt="error"
                                        />
                                        ))}
                                    </div>
                                    </td>
                                    <td>{item.price}$</td>
                                    <td>{formatDate(item.date)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
                </div>
                </div>
            </div>
    )
};

export default PatientDetail;
