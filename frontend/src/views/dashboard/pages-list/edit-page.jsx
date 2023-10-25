import { Link, useParams } from "react-router-dom";
import Layout from "../../../layout/layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { token } from "./add-page";

const EditPage = () => {
  const { id } = useParams();
  const [page, setPage] = useState({
    title: "",
    description: "",
    image: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.174:8000/file-upload/${id}`,
          {
            headers: {
              "x-access-tokens": token,
            },
          }
        );

        setPage(response.data.users[0].msg);
      } catch (error) {
        console.log("Ma'lumotlarni olishda xatolik yuz berdi: ", error);
      }
    };

    fetchData();
  }, [id]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "image") {
      setPage({
        ...page,
        [name]: e.target.files[0],
      });
    } else {
      setPage({
        ...page,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", page.title);
      formData.append("description", page.description);
      formData.append("image", page.image);

      const response = await axios.put(
        `http://192.168.1.174:8000/file-upload/${id}`,
        formData,
        {
          headers: {
            "x-access-tokens": token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="d-flex h-100 justify-content-center align-items-center">
        <form className="w-50 border p-3" onSubmit={handleSubmit}>
          <h2 className="text-center">Edit Page</h2>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={page.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={page.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
            <Link to={"/pages-list/"} className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditPage;
