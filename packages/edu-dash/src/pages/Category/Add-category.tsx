/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PuButton, PuCard, PuInput } from "react-library";
import { BaseURL } from "../../utils/Base-url";
import { useRef, useState } from "react";
// @ts-ignore
const AddCategory = ({ getdata }) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const imageRef = useRef();
  const nameRef = useRef();

  const handlePost = () => {
    // @ts-ignore
    const name = nameRef.current?.value;
    // @ts-ignore
    const image = imageRef.current?.files[0];
    const formData = new FormData();
    formData.append("name", name);
    formData.append("img", image);

    fetch(`${BaseURL}/course/api/categories_course_views/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP xato, so'rov bajarilmadi");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Ma'lumotlar muvaffaqiyatli yuborildi:", data);
        setModalShow(false);
        getdata();
      })
      .catch((error) => {
        console.error("Xato:", error);
      });
  };

  return (
    <>
      <PuButton onClick={() => setModalShow(true)}>Add Category</PuButton>
      {modalShow && (
        <div className="modal-box">
          <PuCard className="modal-content">
            <h2>Add Category</h2>
            <form>
              <div className="login-inputs">
                {/* @ts-ignore */}
                <PuInput ref={nameRef} label="Category"></PuInput>
                <br />
                {/* @ts-ignore */}
                <input type="file" ref={imageRef} />
              </div>
              <div className="modal-buttons">
                <PuButton onClick={handlePost} className="login-btn">
                  Add Category
                </PuButton>
                <PuButton
                  onClick={() => setModalShow(false)}
                  color="warning"
                  className="login-btn"
                >
                  Cancel
                </PuButton>
              </div>
            </form>
          </PuCard>
        </div>
      )}
    </>
  );
};

export default AddCategory;
