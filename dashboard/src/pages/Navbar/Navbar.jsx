const Navbar = () => {
  return (
    <div className="w-100 py-2 pe-2">
      <nav className="navbar navbar-light bg-light rounded">
        <div className="container-fluid ">
          <form className="d-flex ">
            <div className="input-group mb-3 d-flex justify-content-start align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="search..."
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-dark"
                type="button"
                id="button-addon2"
              >
                seerch
              </button>
            </div>
          </form>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              defaultChecked
            />
            <label className="btn btn-outline-dark" htmlFor="btnradio1">
              Card
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
            />
            <label className="btn btn-outline-dark" htmlFor="btnradio3">
              List
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
