import "./App.css";

import Sidebar from "./pages/sidebar/Sidebar";
import Navbar from "./pages/Navbar/Navbar";
import Table from "./pages/Table/Table";
import { Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors/Doctors";
import Clients from "./pages/Clients/Clients";
import Category from "./pages/Category/category";
import EditCategory from "./pages/Category/Edit-category";
import Patients from './pages/Patients/Patients'
import PatientDetail from "./pages/Patients/PatientDetail";
import PatientHistory from "./pages/Patients/PatientHistory";
import CardHistory from "./pages/Card/Card-history";
import Login from './pages/login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category/:id" element={<EditCategory />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="patient-detail/:id" element={<PatientDetail />} />
        <Route path="patient-history/:id" element={<PatientHistory />} />
        <Route path="/card-history" element={<CardHistory />} />
      </Routes>
    </div>
  );
}

export default App;
