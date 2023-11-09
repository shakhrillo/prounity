import { useEffect, useState } from "react";
import { BaseURL } from "../../../utils/Base-url";
import { PuButton, PuText } from "react-library";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  category_id: {
    id: number;
    name: string;
    img: string;
  };
  author_id: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  };
  name: string;
  content: string;
  course_logo: string;
  summ_course: number;
  verification_course: boolean;
  datetime: string;
}
const NewCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const getData = () => {
    fetch(`${BaseURL}course/api/course_no_acti_views/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP xato, so'rov bajarilmadi");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data?.data);
      })
      .catch((error) => {
        console.error("Xato:", error);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleActive = (id: number) => {
    fetch(`${BaseURL}/course/api/activeate_course_crud_views/${id}/`, {
      method: "PUT",
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
        getData();
      })
      .catch((error) => {
        console.error("Xato:", error);
      });
  };
  return (
    <div className="component">
      <PuText className="component-title">
        <h1>New Courses</h1>
      </PuText>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, i) => (
            <tr key={course?.id}>
              <td>{i + 1}</td>
              <td>{course?.name}</td>
              <td style={{ width: "30%" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Link to={`${course?.id}`}>
                    <PuButton color="warning">View</PuButton>
                  </Link>
                  <PuButton onClick={() => handleActive(course?.id)}>
                    Activation
                  </PuButton>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewCourses;
