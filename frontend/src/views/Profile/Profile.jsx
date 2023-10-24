import UserImg from '../../images/user1.png'
import {Link} from "react-router-dom"

function Profile(){

    const user = [
        {username:"Davlatshoh01", first_name: "Davlatshoh", last_name: "Naimov", password:"12345678" }
    ]

    return(
        <div>
            <div className="container py-5 w-75">
                <div class="row">
                    <div class="col">
                        <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3 mb-4">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">User</a></li>
                            <li class="breadcrumb-item active" aria-current="page">User Profile</li>
                        </ol>
                        </nav>
                    </div>
                </div>
                <div className="row ">
                    <div class="col-lg-2 ">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src={UserImg} alt=""/>
                                <h5 class="my-3">Davatshoh</h5>
                                <div class="d-flex justify-content-center mb-2">
                                
                                <Link to={'/edit-profile'}>
                                    <button className="btn btn-outline-success">Edit</button>
                                </Link> 
                                <Link to={'/delete-profile'}>
                                    <button type="button" class="btn btn-outline-danger ms-1">delete</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10">
                        <div class="card mb-4">
                            <div class="card-body">
                                {user.map(item=>
                                    <div class="row py-3">
                                    <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                        <p class="mb-0 w-50">Username</p>
                                        <input className='form-control' value={item.username} type="text" />
                                    </div>
                                    <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                        <p class="mb-0 w-50">Firstname</p>
                                        <input className='form-control' value={item.first_name} type="text" />
                                    </div>
                                    <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                        <p class="mb-0 w-50">Lastname</p>
                                        <input className='form-control' value={item.last_name} type="text" />
                                    </div>
                                    <div class="col-sm-12 d-flex justify-content-between align-items-center gap-2 mb-2">
                                        <p class="mb-0 w-50">Password</p>
                                        <input className='form-control' value={item.password} />
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