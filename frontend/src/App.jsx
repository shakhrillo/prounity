import { Route, Routes } from "react-router-dom";
import "./App.scss";
import UserList from "./views/dashboard/user-list/user-list";
import AddUser from "./views/dashboard/user-list/add-user";
import EditUser from "./views/dashboard/user-list/edit-user";
import PagesList from "./views/dashboard/pages-list/pages-list";
import AddPage from "./views/dashboard/pages-list/add-page";
import EditPage from "./views/dashboard/pages-list/edit-page";
import DeleteUser from "./views/dashboard/user-list/delete-user";
import ViewUser from "./views/dashboard/user-list/view-user";
import DeletePage from "./views/dashboard/pages-list/delete-page";
import ViewPage from "./views/dashboard/pages-list/view-page";
import Info from "./views/dashboard/info/info";
import Profile from "./views/Profile/Profile";
import EditProfile from "./views/Profile/EditProfile";
import DeleteProfile from "./views/Profile/DeleteProfile";
import Register from "./views/register/Register";
import Navbar from "./views/navbar/Navbar";
import ForgotPassword from "./views/forgot-password/ForgotPassword";
import SmsVerify from "./views/sms-verify/SmsVerify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user-list/add-user/" element={<AddUser />} />
        <Route path="/user-list/edit-user/:id/" element={<EditUser />} />
        <Route path="/user-list/delete-user/:id/" element={<DeleteUser />} />
        <Route path="/user-list/view-user/:id/" element={<ViewUser />} />
        {/* Page-list */}
        <Route path="/pages-list/" element={<PagesList />} />
        <Route path="/pages-list/add-page/" element={<AddPage />} />
        <Route path="/pages-list/edit-page/:id/" element={<EditPage />} />
        <Route path="/pages-list/delete-page/:id/" element={<DeletePage />} />
        <Route path="/pages-list/view-page/:id/" element={<ViewPage />} />
        {/* Info */}
        <Route path="/info" element={<Info />} />
        {/*  */}
        <Route path="/" element={<Navbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sms-verify" element={<SmsVerify />} />
        </Route>
        <Route path="/profile-user" element={<Profile />} />
        <Route path="/edit-profile/:id" element={<EditProfile />} />
        <Route path="/delete-profile/:id" element={<DeleteProfile />} />
      </Routes>
    </>
  );
}

export default App;
