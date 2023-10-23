import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return <div>
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  </div>;
};

export default App;
