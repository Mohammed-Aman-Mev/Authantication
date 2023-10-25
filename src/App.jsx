import React from "react";
import Navbar from "./components/AppBar";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/authStore";

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      <ToastContainer />
    </Provider>
  );
};

export default App;
