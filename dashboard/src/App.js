import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import Sidebar from "./pages/sidebar/Sidebar";
import Navbar from "./pages/Navbar/Navbar";
import Table from "./pages/Table/Table";


function App() {
  return (
    <div className="App d-flex">
        <Sidebar />
      <div className="w-100">
        <Navbar/>
        <Table />
      </div>
    </div>
  );
}

export default App;
