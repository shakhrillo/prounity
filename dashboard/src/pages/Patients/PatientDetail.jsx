import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";
import User from "../../assets/images/user1.png";

const PatientDetail = () => {
  const { id } = useParams();
  const [patientDetails, setPatientDetails] = useState([]);
  const items = [
    {
      title: "Ashurov Jobir(Lor)",
      doctor_message: "hello",
      patient_message: "hello123",
    },
    {
      title: "Ashurov Jobir(Lor)",
      doctor_message: "hello",
      patient_message: "hello123",
    },
    {
      title: "Ashurov Jobir(Lor)",
      doctor_message: "hello",
      patient_message: "hello123",
    },
    {
      title: "Ashurov Jobir(Lor)",
      doctor_message: "hello",
      patient_message: "hello123",
    },
    {
      title: "Ashurov Jobir(Lor)",
      doctor_message: "hello",
      patient_message: "hello123",
    },
    {
      title: "Ashurov Jobir(Lor)",
      doctor_message: "hello",
      patient_message: "hello123",
    },
    {
      title: "Ashurov Jobir(Lor)",
      doctor_message: "hello",
      patient_message: "hello123",
    },
    {
      title: "Ashurov Jobir(Lor)",
      doctor_message: "hello",
      patient_message: "hello123",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const getPatientDetails = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.163:8000/v1/consultation/consultation_history_list/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      setPatientDetails(jsonData.history);
      console.log(jsonData.history);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPatientDetails();
  });

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-100 p-3 bg-light rounded">
      <div className="row justify-content-between mb-3">
        <div className="card  p-4 col-4">
          <div className="row card-body d-flex align-items-center justify-content-around">
            <img
              className="col-2"
              style={{ width: "100px", width: "100px", borderRadius: "50%" }}
              src={User}
              alt=""
            />
            <div>
              <ul class="list-group">
                <li class="list-group-item">Firstname : Amirbek</li>
                <li class="list-group-item">Lastname : Azimov</li>
                <li class="list-group-item">Username : Amirbek123</li>
                <li class="list-group-item">Last seen : 14:03</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="card p-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li
                  className="breadcrumb-item active breadcrumb-fs"
                  aria-current="page"
                >
                  Patients
                </li>
              </ol>
            </nav>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">N</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">Appoint_date</th>
                  <th scope="col">Appoint_time</th>
                  <th scope="col">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="col">1</td>
                  <td scope="col">Ravshan</td>
                  <td scope="col">Qahramonov</td>
                  <td scope="col">2023.10.14</td>
                  <td scope="col">15:05</td>
                  <td scope="col">Lor</td>
                </tr>
                <tr>
                  <td scope="col">2</td>
                  <td scope="col">Ravshan</td>
                  <td scope="col">Qahramonov</td>
                  <td scope="col">2023.10.14</td>
                  <td scope="col">15:05</td>
                  <td scope="col">Lor</td>
                </tr>
                <tr>
                  <td scope="col">2</td>
                  <td scope="col">Ravshan</td>
                  <td scope="col">Qahramonov</td>
                  <td scope="col">2023.10.14</td>
                  <td scope="col">15:05</td>
                  <td scope="col">Lor</td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" tabindex="-1">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="row justify-content-between mb-3">
        <div className="card  p-4 col-4">
          <div style={{ height: "350px" }} className="overflow-auto ">
            {items.map((item, index) => (
              <div key={index}>
                <button
                  className="btn btn-light text-start my-2 w-100"
                  onClick={() => handleToggle(index)}
                >
                  {item.title}
                </button>
                {openIndex === index && (
                  <div
                    style={{ height: "300px" }}
                    className="collapse show overflow-auto bg-light p-2"
                  >
                    <div className="bg-warning w-50 p-2 rounded text-light mb-2">
                      {item.doctor_message}
                    </div>
                    <div className="bg-success w-50 p-2 rounded text-light float-end mb-2">
                      {item.patient_message}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <nav className="py-4" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li
                className="breadcrumb-item active breadcrumb-fs"
                aria-current="page"
              >
                Chat history
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-8">
          <div className="card p-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li
                  className="breadcrumb-item active breadcrumb-fs"
                  aria-current="page"
                >
                  Drugs history
                </li>
              </ol>
            </nav>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">N</th>
                  <th scope="col">Name of Drugs</th>
                  <th scope="col">Price of Drugs</th>
                  <th scope="col">Image of Drugs</th>
                  <th scope="col">Total price</th>
                  <th scope="col">Date / Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-middle">
                  <td>1</td>
                  <td>
                    <p>Parasetamol</p>
                    <p>Parasetamol</p>
                  </td>
                  <td>
                    <p>20$</p>
                    <p>20$</p>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <img
                        className="my-1 rounded"
                        style={{
                          width: "70px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                        src={User}
                        alt="error"
                      />
                    </div>
                  </td>
                  <td>20$</td>
                  <td>2023.10.13 / 20:10</td>
                </tr>
                <tr className="align-middle">
                  <td>1</td>
                  <td>
                    <p>Parasetamol</p>
                    <p>Parasetamol</p>
                  </td>
                  <td>
                    <p>20$</p>
                    <p>20$</p>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <img
                        className="my-1 rounded"
                        style={{
                          width: "70px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                        src={User}
                        alt="error"
                      />
                    </div>
                  </td>
                  <td>20$</td>
                  <td>2023.10.13 / 20:10</td>
                </tr>
                <tr className="align-middle">
                  <td>1</td>
                  <td>
                    <p>Parasetamol</p>
                    <p>Parasetamol</p>
                  </td>
                  <td>
                    <p>20$</p>
                    <p>20$</p>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <img
                        className="my-1 rounded"
                        style={{
                          width: "70px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                        src={User}
                        alt="error"
                      />
                    </div>
                  </td>
                  <td>20$</td>
                  <td>2023.10.13 / 20:10</td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" tabindex="-1">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetail;
