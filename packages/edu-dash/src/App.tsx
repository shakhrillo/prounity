import { defineCustomElements } from "react-library";
import { Route, Routes } from "react-router-dom";
import {
  AllCourses,
  Category,
  Login,
  NewCourses,
  NewCoursesDetails,
  Users,
} from "./pages";
import { Sidebar } from "./components";
defineCustomElements();

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/user_teachers_views" element={<Users />} />
          <Route path="/user_student_views" element={<Users />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/new-courses" element={<NewCourses />} />
          <Route path="/new-courses/:id" element={<NewCoursesDetails />} />
          <Route path="/category" element={<Category />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
