import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Verify() {
    const token = localStorage.getItem('token')
    const [message, setMessage] = useState()
    const navigate = useNavigate()

    const verifysms = async () => {
        console.log(token);
        
        try {
            const response = await axios.put("http://192.168.1.181:8000/api/user_login/", null , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        verifysms()
    },[])

    const checkSms = async () => {
        try {
            const response = await axios.post("http://192.168.1.181:8000/api/check_sms_code/", 
            {
                sms_code:message
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            if(response.status===200){
                navigate('/login')
            }else{
                console.log('adasdasd');
            }
            
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container d-flex justify-content-center align-items-center py-5">
            <div className="card w-50">
                <div className="card-header bg-primary text-light"><h2>Sms-verification</h2></div>
                <div className="card-body">
                    <input value={message} onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder="12345" type="text" />
                </div>
                <div className="card-footer bg-primary">
                    <button onClick={checkSms} className="btn btn-light float-end">ok</button>
                </div>
            </div>
        </div>
    )
}

export default Verify