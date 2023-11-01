import "./App.css";
import Login from "./pages/login";
import Sidebar from "./pages/sidebar/Sidebar";
import Navbar from "./pages/Navbar/Navbar";
import Table from "./pages/Table/Table";
import { Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors/Doctors";
import Clients from "./pages/Clients/Clients";
import News from "./pages/News/News";
import Patients from "./pages/Patients/Patients";
import PatientDetail from './pages/Patients/PatientDetail'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/dashboard" element={<Table />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/blogs" element={<News />} />
        <Route path="/patients" element={<Patients />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
