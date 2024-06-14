import { Link, useParams } from "react-router-dom";
import Layout from "../../../layout/layout";
import axios from "axios";
import { token } from "./add-page";
import { useEffect, useState } from "react";

const ViewPage = () => {
  const [pages, setPages] = useState([]);
  const { id } = useParams();
  const getUser = async () => {
    try {
      const res = await axios.get(
        `http://192.168.1.174:8000/file-upload/${id}`,
        {
          headers: {
            "x-access-tokens": token,
          },
        }
      );
      setPages(res?.data?.users[0]?.msg);
    } catch (error) {
      console.log("Serverga ma'lumot yuborishda xatolik yuz berdi: ", error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <Layout>
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="card " style={{ maxWidth: 740 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`http://192.168.1.163:8000/${pages?.image}/`}
                className="img-fluid h-100 rounded-start"
                alt="pages-image"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body mt-3">
                <h5 className="card-title">{pages?.title}</h5>
                <p className="card-text">{pages?.description}</p>
                <div className="d-flex justify-content-end gap-2">
                  <Link to={"/pages-list/"} className="btn btn-danger">
                    Cencel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewPage;
