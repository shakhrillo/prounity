import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const pageItem = 2;

  const getPatients = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.163:8000/v1/api/user_group_patient_views/?page=${currentPage}&limit=${pageItem}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      setPatients(jsonData.results);
      setTotalPages(Math.ceil(jsonData.length / pageItem));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPatients();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
      <div className="w-100 p-3 bg-light rounded">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active breadcrumb-fs" aria-current="page">
              Patients
            </li>
          </ol>
        </nav>
        <div className="card p-3 mb-3">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic outline example">
                      <Link className="btn btn-outline-primary btn-sm" to={`/patient-detail/${item.id}`}>
                        view history
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default Patients;
