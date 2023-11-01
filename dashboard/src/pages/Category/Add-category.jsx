import React, { useRef } from "react";

const AddCategory = ({ toggle }) => {
  const nameRef = useRef(null);
  const handleAddCategory = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;

    try {
      const response = await fetch(
        "http://192.168.1.163:8000/v1/api/doctor-categories-list/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ name }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="h-100 modal-box">
        <div className="row justify-content-sm-center align-items-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-4">
                <h1 className="fs-4 card-title text-center fw-bold mb-4">
                  Add Category
                </h1>
                <form
                  method="POST"
                  className="needs-validation"
                  autoComplete="off"
                >
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Category name"
                      ref={nameRef}
                    />
                    <button
                      onClick={handleAddCategory}
                      className="btn btn-success"
                      type="button"
                      id="button-addon2"
                    >
                      Button
                    </button>
                  </div>
                  <button
                    onClick={toggle}
                    className="btn mt-4 float-right btn-secondary "
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
