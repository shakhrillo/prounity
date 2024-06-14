import UserImg from '../../images/user1.png'
import {Link} from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react'

function Profile(){
    const [user, setUser] = useState([])
    const getData = async () => {
        
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOjEyNDA3LCJleHAiOjE2OTgzOTAwODJ9.AetegqJtXJyMErb2vmo-IruLmL6zyPJXFHo7ADJrjyc'
            localStorage.setItem("token", token)
            const response = await axios.get("http://192.168.1.174:8000/user",{
                headers:{
                    "x-access-tokens":token
                }
            });
            setUser(response.data.msg) 
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div>
            <div className="container py-5 w-75">
                <div className="row">
                    <div className="col-lg-2 ">
                        <div className="card ">
                            <div className="card-body text-center">
                                <img src={UserImg} alt=""/>
                                 {user.map(item=>
                                     <div key={item.public_id} className="d-flex flex-column justify-content-center mb-2">
                                        <h5 className="">{item.first_name}</h5>
                                        <div className="d-flex justify-content-between">
                                        <Link to={`/edit-profile/${item.public_id}`}>
                                            <button className="btn btn-outline-success btn-sm"> <i className="material-icons"></i></button>
                                        </Link> 
                                        <Link to={`/delete-profile/${item.public_id}`}>
                                            <button type="button" className="btn btn-outline-danger btn-sm "><i className="material-icons"></i></button>
                                        </Link>
                                        </div>
                                    </div>
                                )} 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="card mb-4">
                            <div className="card-body">
                                {user.map(item=>
                                    <div key={item.public_id} className="row py-3">
                                    <div className="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                        <p className="mb-0 w-50">Username</p>
                                        <input readOnly className='form-control' value={item.username} type="text" />
                                    </div>
                                    <div className="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                        <p className="mb-0 w-50">Firstname</p>
                                        <input readOnly className='form-control' value={item.first_name} type="text" />
                                    </div>
                                    <div className="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                        <p className="mb-0 w-50">Lastname</p>
                                        <input readOnly className='form-control' value={item.last_name} type="text" />
                                    </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile