import "./App.css";
import Login from "./pages/login";
import Sidebar from "./pages/sidebar/Sidebar";
import Navbar from "./pages/Navbar/Navbar";
import Table from "./pages/Table/Table";
import { Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors/Doctors";
import Clients from "./pages/Clients/Clients";
import Blogs from "./pages/Blogs/Blogs";
import Category from "./pages/Category/category";
import EditCategory from "./pages/Category/Edit-category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" element={<Table />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<EditCategory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
