import "./App.css";
import Table from "./pages/Table/Table";
import { Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors/Doctors";
import Clients from "./pages/Clients/Clients";
import Category from "./pages/Category/Category";
import EditCategory from "./pages/Category/Edit-category";
import Patients from "./pages/Patients/Patients";
import PatientDetail from "./pages/Patients/PatientDetail";
import PatientHistory from "./pages/Patients/PatientHistory";
import CardHistory from "./pages/Card/Card-history";
import Login from "./pages/login";
import News from "./pages/News/News";
import CurrentNews from "./pages/News/CurrentNews";
import Shop from "./pages/Shop/Shop";
import Sidebar from "./pages/sidebar/Sidebar";

function App() {
  return (
    <div className="App d-flex">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="/" element={<Table />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/blogs" element={<News />} />
          <Route path="/current-news/:id" element={<CurrentNews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<EditCategory />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="patient-detail/:id" element={<PatientDetail />} />
          <Route path="patient-history/:id" element={<PatientHistory />} />
          <Route path="/card-history" element={<CardHistory />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
