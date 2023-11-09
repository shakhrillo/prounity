import { useEffect, useState } from "react";
import { BaseURL } from "../../../utils/Base-url";
import { PuText } from "react-library";

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
const AllCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  console.log(courses);
  useEffect(() => {
    fetch(`${BaseURL}course/api/course_views/`)
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
  }, []);
  return (
    <div className="component">
      <PuText className="component-title">
        <h1>All Courses</h1>
      </PuText>
      <table className="table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Author</th>
            <th>Сategory Name</th>
            <th>Categry Image</th>
            <th>Content</th>
            <th>Course Logo</th>
            <th>Summ Course</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course?.id}>
              <td>{course?.name}</td>
              <td>
                {course?.author_id?.first_name} <br />{" "}
                {course?.author_id?.last_name}
              </td>
              <td>{course?.category_id?.name}</td>
              <td>
                <img
                  src={BaseURL + course?.category_id?.img}
                  alt="category"
                  width="50"
                  height="50"
                />
              </td>
              <td>{course?.content}</td>
              <td>
                <img
                  src={BaseURL + course?.course_logo}
                  alt="Course"
                  width="50"
                  height="50"
                />
              </td>
              <td align="center">{course?.summ_course} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCourses;
