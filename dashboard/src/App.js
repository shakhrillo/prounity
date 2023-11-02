import "./App.css";
import Login from "./pages/login";
import Sidebar from "./pages/sidebar/Sidebar";
import Navbar from "./pages/Navbar/Navbar";
import Table from "./pages/Table/Table";
import { Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors/Doctors";
import Clients from "./pages/Clients/Clients";
import Category from "./pages/Category/category";
import EditCategory from "./pages/Category/Edit-category";
import News from "./pages/News/News";
import CurrentNews from "./pages/News/CurrentNews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/blogs" element={<News />} />
        <Route path="/current-news/:id" element={<CurrentNews />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<EditCategory />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
