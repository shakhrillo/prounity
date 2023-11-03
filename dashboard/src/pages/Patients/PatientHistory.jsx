import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { Link } from "react-router-dom";

const PatientHistory = () => {
  const { id } = useParams();
  const [patientHistory, setPatientHistory] = useState([]);

  const getPatientHistory = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.163:8000/v1/shop_news/history_bay_drugs_list_views/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const jsonData = await response.json();
      setPatientHistory(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPatientHistory();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDate;
  };

  return (
    <Layout>
      <div className="w-100 p-3 bg-light rounded">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item breadcrumb-fs">
              <Link to={"/patients"}>
                <a href="#">Doctors list</a>
              </Link>
            </li>
            <li className="breadcrumb-item active breadcrumb-fs" aria-current="page">
              History
            </li>
          </ol>
        </nav>
        {patientHistory.map((item) => (
          <div className="d-flex gap-2">
            <h5 key={item.id}>{item.user_id.first_name}</h5>
            <h5 key={item.id}>{item.user_id.last_name}</h5>
          </div>
        ))}
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
            {patientHistory.map((item,index) => (
              <tr className="align-middle" key={index}>
                <td>{index+1}</td>

                <td>
                  {item.drugs_id.map((i, index) => (
                    <p key={index}>{i.name}</p>
                  ))}
                </td>
                <td>
                  {item.drugs_id.map((i, index) => (
                    <p key={index}>{i.price}$</p>
                  ))}
                </td>
                <td>
                  <div className="d-flex flex-column">
                    {item.drugs_id.map((i, index) => (
                      <img key={index}
                        className="my-1 rounded"
                        style={{ width: "70px", height: "50px", objectFit: "cover" }}
                        src={`http://192.168.1.163:8000${i.img}`}
                        alt="error"
                      />
                    ))}
                  </div>
                </td>
                <td>{item.price}$</td>
                <td>{formatDate(item.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default PatientHistory;