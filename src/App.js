import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavbarComponent from "./Components/Navbar";
import RegisterContainer from "./Containers/RegisterContainer";
import LoginContainer from "./Containers/LoginContainer";
import HomeContainer from "./Containers/HomeContainer";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    token && setAuth(true);
  }, [auth]);

  return (
    <div className="App">
      <Router>
        <NavbarComponent auth={auth} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route
            path="/register"
            element={<RegisterContainer setAuth={setAuth} />}
          />
          <Route path="/login" element={<LoginContainer setAuth={setAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
