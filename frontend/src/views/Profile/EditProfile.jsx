import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate ,useParams} from "react-router-dom"
import axios from "axios"


function EditProfile(){

    const {id} = useParams()
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOjEyNDA3LCJleHAiOjE2OTgzOTAwODJ9.AetegqJtXJyMErb2vmo-IruLmL6zyPJXFHo7ADJrjyc'
        
        axios.get(`http://192.168.1.174:8000/user/${id}`,{
            headers:{
                "x-access-tokens":token
            }
        })
        .then(res=>setData(res.data.msg[0]))
        .catch(err=> console.log(err))
    },[])
    function handleSubmit(event){
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOjEyNDA3LCJleHAiOjE2OTgzOTAwODJ9.AetegqJtXJyMErb2vmo-IruLmL6zyPJXFHo7ADJrjyc'
        event.preventDefault()
        axios.put(`http://192.168.1.174:8000/user/${id}`, data, {
            headers:{
                "x-access-tokens":token
            }
        })
        .then(res=>{
            navigate('/profile-user')
        })
    }
    return(
        <div>
            <div className="container py-5 w-50">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card mb-4">
                            <div className="card-body"> 
                            <h3>Edit-Profile</h3>
                                <form  className="row py-3">
                                <div className="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p className="mb-0 w-50">Username</p>
                                    <input defaultValue={data.username} className='form-control'  type="text"
                                    onChange={e=>setData({...data, username: e.target.value})}
                                    />
                                </div>
                                <div className="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p className="mb-0 w-50">Firstname</p>
                                    <input defaultValue={data.first_name} className='form-control'  type="text" 
                                    onChange={e=>setData({...data, first_name: e.target.value})}
                                    />
                                </div>
                                <div className="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p className="mb-0 w-50">Lastname</p>
                                    <input defaultValue={data.last_name} className='form-control'  type="text" 
                                    onChange={e=>setData({...data, last_name: e.target.value})}
                                    />
                                </div>
                                    <div className="d-flex gap-2 justify-content-end">
                                        <Link to={'/profile-user'}>
                                            <button className="btn btn-secondary">cancel</button>
                                        </Link>
                                        <Link to={'/profile-user'}>
                                            <button onClick={handleSubmit} className="btn btn-outline-success">save</button>
                                        </Link>
                                    </div>
                                </form>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditProfile