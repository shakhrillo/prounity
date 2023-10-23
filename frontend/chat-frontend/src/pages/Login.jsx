import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login (){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    
    try {
      const { data } = await axios.post(
        "http://192.168.1.181:8000/api/user_login/",
        { username: username, password: password }
      );
      const token = data.token.access
      saveToken('token', token) 
      
      if(token){
        navigate('/verify-sms')
      }
    } catch (error) {
      console.error(error);
    }

    function saveToken(key, value) {
      try {
          localStorage.setItem(key, value);
          console.log(`Data saved to Local Storage: ${key} - ${value}`);
      } catch (error) {
          console.error(error);
      }
    }
  };

  return(
      <div className="container d-flex justify-content-center align-items-center py-5">
          <div className="card w-50">
              <div className="card-header bg-primary text-light"><h2>Login</h2></div>
              <div className="card-body">
                <form>
                  <input required placeholder="number" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control mb-2" type="text" />
                  <input required placeholder="password" value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control mb-2" type="text" />
                </form>
              </div>
              <div className="card-footer bg-primary">
                  <button onClick={handleSubmit} className="btn btn-outline-light float-end">login</button>
              </div>
          </div>
      </div>
  )
}

export default Login