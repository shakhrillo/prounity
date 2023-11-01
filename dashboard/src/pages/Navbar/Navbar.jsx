

const Navbar = () => {
    return(
        <div className="w-100 py-2 pe-2">
            <nav className="navbar navbar-light bg-light rounded">
            <div className="container-fluid ">
                <form className="d-flex ">
                    <div class="input-group mb-3 d-flex justify-content-start align-items-center">
                        <input type="text" class="form-control" placeholder="search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button class="btn btn-outline-dark" type="button" id="button-addon2">seerch</button>
                    </div>
                </form>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
                    <label className="btn btn-outline-dark" for="btnradio1">Card</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                    <label className="btn btn-outline-dark" for="btnradio3">List</label>
                </div>
            </div>
            </nav>
        </div>
        
    )
}

export default Navbar