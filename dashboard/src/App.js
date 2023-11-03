import "./App.css";
import { Routes, Route } from "react-router-dom";
import Doctors from "./pages/Doctors/Doctors";
import Category from "./pages/Category/category";
import EditCategory from "./pages/Category/Edit-category";
import Patients from "./pages/Patients/Patients";
import PatientDetail from "./pages/Patients/PatientDetail";
import CardHistory from "./pages/Card/Card-history";
import Login from "./pages/login";
import News from "./pages/News/News";
import CurrentNews from "./pages/News/CurrentNews";
import Shop from "./pages/Shop/Shop";
import Sidebar from "./pages/Sidebar/Sidebar";
import DeletedShop from "./pages/Shop/Deleted-shop";
import DeletedCategory from "./pages/Category/Deleted-category";
import DeletedDoctors from "./pages/Doctors/DeletedDoctors";
import DoctorDetails from "./pages/Doctors/DoctorDetails";

function App() {
  return (
    <div className="App d-flex">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/deleted-doctors" element={<DeletedDoctors />} />
          <Route path="/doctor-details" element={<DoctorDetails />} />
          <Route path="/blogs" element={<News />} />
          <Route path="/current-news/:id" element={<CurrentNews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category/:id" element={<EditCategory />} />
          <Route path="/category-deleted" element={<DeletedCategory />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="patient-detail/:id" element={<PatientDetail />} />
          <Route path="/card-history" element={<CardHistory />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-deleted" element={<DeletedShop />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
