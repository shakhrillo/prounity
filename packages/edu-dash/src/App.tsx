import "./App.css";

import { defineCustomElements } from "react-library";
import { Login } from "./pages";
defineCustomElements();

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
