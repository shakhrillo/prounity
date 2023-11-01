import { useState } from "react"
const Table = () => {
    const [modal, setModal] = useState(true)
    return (
        <div className="p-4 bg-light me-2">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Doctors</h1>
                <button className="btn btn-outline-dark">+Add</button>
            </div>
            <table className="table">
                <tr>
                    <th>N</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Adrian</td>
                    <td>Braham</td>
                </tr>
            </table>

            <div className={`${modal ? "d-flex justify-content-center align-items-center w-100" : "d-none"}`}>
                <div class="card w-50">
                    <div className="card-header bg-dark text-light">
                        <h3>Add Doctor</h3>
                    </div>
                    <div className="card-body">
                        <input className="form-control mb-2" type="text" />
                        <input className="form-control mb-2" type="text" />
                        <button className="btn btn-dark ">add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table