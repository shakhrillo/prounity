<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
=======
import { useState } from 'react'
<<<<<<< HEAD
import './App.scss'
import Profile from './views/Profile/Profile'
import EditProfile from './views/Profile/EditProfile'
import DeleteProfile from './views/Profile/DeleteProfile'

import { Route, Routes } from 'react-router-dom'

>>>>>>> e7a069b (user-profile added)

function App() {
=======
import reactLogo from './assets/icons/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Login from './views/login/Login'
import './App.scss'
import Register from './views/register/Register'
import Navbar from './views/navbar/Navbar'
import ForgotPassword from './views/forgot-password/ForgotPassword'
import SmsVerify from './views/sms-verify/SmsVerify'

function App() {
  // const [count, setCount] = useState(0)

>>>>>>> dd6bfc0 (frontend authentication without backend)
  return (
<<<<<<< HEAD
    <>
<<<<<<< HEAD
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
=======
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sms-verify" element={<SmsVerify />} />
        </Route>
      </Routes>
      {/* <div class="container py-4 px-3 mx-auto">
        <header class="d-flex justify-content-between align-items-md-center pb-3 mb-5 border-bottom">
          <h1 class="h4">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bootstrap-fill d-inline-block me-2" viewBox="0 0 16 16">
                <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
              </svg>
              <span>Vite</span>
            </a>
          </h1>
          <a href="https://github.com/twbs/examples/tree/main/vite/" target="_blank" rel="noopener">View on GitHub</a>
        </header>

        <h1>Build Bootstrap with Vite</h1>
        <div class="col-lg-8 px-0">
          <p class="fs-4">You've successfully loaded the Bootstrap + Vite example! It's loaded up with <a href="https://getbootstrap.com/">Bootstrap 5</a> and uses Vite to compile and bundle our Sass and JavaScript.</p>
          <p>If this button appears blue and the link appears purple, you've done it!</p>
        </div>

        <button type="button" class="btn btn-primary me-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">Toggle offcanvas</button>
        <a id="popoverButton" class="text-success" href="#" role="button" data-bs-toggle="popover" title="Custom popover" data-bs-content="This is a Bootstrap popover.">Example popover</a>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <div>
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            </div>
            <div class="dropdown mt-3">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr class="col-1 my-5 mx-0" />

        <h2>Guides</h2>
        <p>Read more detailed instructions and documentation on using or contributing to Bootstrap.</p>
        <ul class="icon-list">
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">Bootstrap quick start guide</a></li>
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/webpack/">Bootstrap Webpack guide</a></li>
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/parcel/">Bootstrap Parcel guide</a></li>
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/vite/">Bootstrap Vite guide</a></li>
          <li><a href="https://getbootstrap.com/docs/5.3/getting-started/contribute/">Contributing to Bootstrap</a></li>
        </ul>

        <hr class="mt-5 mb-4" />

        <p class="text-muted">Created and open sourced by the Bootstrap team. Licensed MIT.</p>
      </div> */}
>>>>>>> dd6bfc0 (frontend authentication without backend)
    </>
  );
=======
    <div>
      <Routes>
        <Route path='/profile-user' element={<Profile/>}/> 
        <Route path='/edit-profile' element={<EditProfile/>}/> 
        <Route path='/delete-profile' element={<DeleteProfile/>}/> 
      </Routes>
    </div>
    
  )
>>>>>>> e7a069b (user-profile added)
}

export default App;
