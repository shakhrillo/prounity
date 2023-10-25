import { Link, useParams } from "react-router-dom";
import Layout from "../../../layout/layout";
import { useState, useEffect } from "react";
import axios from "axios";
import { token } from "../pages-list/add-page";

const EditUser = () => {
  const [user, setUser] = useState({
    username: "",
    first_name: "",
    last_name: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.174:8000/user/${id}`,
          {
            headers: {
              "x-access-tokens": token,
            },
          }
        );

        setUser(response.data.msg[0]);
      } catch (error) {
        console.log("Ma'lumotlarni olishda xatolik yuz berdi: ", error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://192.168.1.163:8000/user/${id}`,
        user,
        {
          headers: {
            "x-access-tokens": token,
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log("Serverga ma'lumot yuborishda xatolik yuz berdi: ", error);
    }
  };

  return (
    <Layout>
      <div className="d-flex h-100 justify-content-center align-items-center">
        <form className="w-50 border p-3" onSubmit={handleSubmit}>
          <h2 className="text-center">Edit User</h2>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={user.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={user.first_name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              value={user.last_name}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Save changes
          </button>
          <Link to={"/user-list/"} className="btn btn-secondary mx-2">
            Cancel
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default EditUser;
