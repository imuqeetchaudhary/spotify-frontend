import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarComponent from "./Components/Navbar";
import RegisterContainer from "./Containers/RegisterContainer";
import LoginContainer from "./Containers/LoginContainer";
import HomeContainer from "./Containers/HomeContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
