import { Link, useParams } from "react-router-dom";
import Layout from "../../../layout/layout";
import { token } from "../pages-list/add-page";
import axios from "axios";
import { useEffect, useState } from "react";

const ViewUser = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  const getUser = async () => {
    try {
      const res = await axios.get(`http://192.168.1.174:8000/user/${id}`, {
        headers: {
          "x-access-tokens": token,
        },
      });
      console.log(res.data.msg[0]);
      setUser(res.data.msg[0]);
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
        <div className="card p-2" style={{ width: "25rem" }}>
          <div className="card-body">
            <h3 className="card-title text-center">User Profile</h3>
            <div className="my-4 d-flex justify-content-center align-items-center">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="User Profile"
                width={80}
                className="img-fluid rounded-circle "
              />
            </div>
            <p className="card-text">
              <strong>First Name:</strong> {user?.first_name}
            </p>
            <p className="card-text">
              <strong>Last Name:</strong> {user?.last_name}
            </p>
            <p className="card-text">
              <strong>Username:</strong> {user?.username}
            </p>
            <div className="d-flex justify-content-end gap-2">
              <Link to={"/user-list/"} className="btn btn-danger">
                Cencel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ViewUser;
