import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
