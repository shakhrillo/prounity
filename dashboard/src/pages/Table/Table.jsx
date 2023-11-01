const Table = () => {
    return(
        <div className="container py-4 bg-light rounded">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h1>Last Tasks</h1>
                    <p><span>117 Total </span>proceed to resolve them</p>
                </div>
                <div className="d-flex gap-3">
                    <div>
                        <h1>94</h1>
                        <p>Done</p>
                    </div>
                    <div>
                        <h1>23</h1>
                        <p>In Progress</p>
                    </div>
                </div>
            </div>
            <table class="table rounded">
                <thead>
                    <tr>
                    <th><input className="form-check-input" type="checkbox" name="" id="" /></th>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th><input className="form-check-input" type="checkbox" name="" id="" /></th>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th><input className="form-check-input" type="checkbox" name="" id="" /></th>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th><input className="form-check-input" type="checkbox" name="" id="" /></th>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table