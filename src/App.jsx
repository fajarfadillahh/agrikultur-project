import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// import components
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
