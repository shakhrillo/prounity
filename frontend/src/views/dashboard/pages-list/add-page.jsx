import { Link } from "react-router-dom";
import Layout from "../../../layout/layout";
import { useState } from "react";
import axios from "axios";
export const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwdWJsaWNfaWQiOiI0YzI4YTNhNS1mMjk0LTRkYzQtYWRkNS1lZWViYjI0NTNkMGEiLCJleHAiOjE2OTgzODY2Njl9.l8BrN7-pkBaMll0CFI7K9mbGesaRUd5Eo6UCjUqLstw";

const AddPage = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("title", title);
    formData.append("description", description);
    try {
      const res = await axios.post(
        "http://192.168.1.174:8000/file-upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-tokens": token,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="d-flex h-100  justify-content-center align-items-center">
        <form className="w-50 border p-3" onSubmit={handleSubmit}>
          <h2 className="text-center">Add Page</h2>
          <div className="mb-3">
            <label htmlFor="pages-image" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="pages-image"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="page-title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="page-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="pages-description" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="pages-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button type="submit" className="btn btn-primary">
              Save
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

export default AddPage;
