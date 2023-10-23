import { Outlet ,Link} from "react-router-dom"

function Navbar(){
    return( 
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav d-flex gap-2">
                        <Link>
                            <li><button className="btn btn-outline-primary btn-sm">sign-up</button></li>
                       </Link>
                       <Link to={'/login'}>
                            <li><button className="btn btn-outline-primary btn-sm">sign-in</button></li>
                       </Link> 
                    </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Navbar