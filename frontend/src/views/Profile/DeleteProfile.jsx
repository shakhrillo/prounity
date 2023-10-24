import {Link} from "react-router-dom"


function DeleteProfile(){

    const user = [
        {username:"Davlatshoh01", first_name: "Davlatshoh", last_name: "Naimov", password:"12345678" }
    ]

    return(
        <div>
        <div className="container py-5 w-50">
            <div className="row">
                <div class="col-lg-12">
                    <div class="card mb-4">
                        <div class="card-body"> 
                        <h3>Edit-Profile</h3>
                            {user.map(item=>
                                <form class="row py-3">
                                <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p class="mb-0 w-50">Username</p>
                                    <input value={item.username} className='form-control'  type="text" />
                                </div>
                                <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p class="mb-0 w-50">Firstname</p>
                                    <input value={item.first_name} className='form-control'  type="text" />
                                </div>
                                <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p class="mb-0 w-50">Lastname</p>
                                    <input value={item.last_name} className='form-control'  type="text" />
                                </div>
                                <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p class="mb-0 w-50">Password</p>
                                    <input value={item.password} className='form-control'  />
                                </div>
                                    <Link to={'/profile-user'}>
                                    <button className="btn btn-outline-danger float-end">delete user</button>
                                    </Link>
                                </form>
                            )}                                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default DeleteProfile