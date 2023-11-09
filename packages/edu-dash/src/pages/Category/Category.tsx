import { useEffect, useState } from "react";
import { PuText } from "react-library";
import { BaseURL } from "../../utils/Base-url";
import AddCategory from "./Add-category";

interface Course {
  id: number;
  name: "string";
  img: "string";
}
const Category = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const getData = () => {
    fetch(`${BaseURL}course/api/categories_course_views/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP xato, so'rov bajarilmadi");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data.data);
      })
      .catch((error) => {
        console.error("Xato:", error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="component">
      <div className="component-head">
        <PuText className="component-title">
          <h1>All Category</h1>
        </PuText>
        <AddCategory getdata={getData} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Category Image</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course?.id}>
              <td>{course?.name}</td>
              <td>
                <img
                  src={BaseURL + course?.img}
                  alt="Course"
                  width="50"
                  height="50"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
