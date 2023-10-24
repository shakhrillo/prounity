import {Link} from "react-router-dom"


function EditProfile(){

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
                                    <input placeholder={item.username} className='form-control'  type="text" />
                                </div>
                                <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p class="mb-0 w-50">Firstname</p>
                                    <input placeholder={item.first_name} className='form-control'  type="text" />
                                </div>
                                <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p class="mb-0 w-50">Lastname</p>
                                    <input placeholder={item.last_name} className='form-control'  type="text" />
                                </div>
                                <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                    <p class="mb-0 w-50">Password</p>
                                    <input placeholder={item.password} className='form-control'  />
                                </div>
                                    <Link to={'/profile-user'}>
                                    <button className="btn btn-outline-success float-end">save</button>
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
export default EditProfile