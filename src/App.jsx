import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import JobDetails from "./Components/JobDetails";
import Topcompanies from "./Pages/Topcompanies";
import Registered from "./Pages/Registered/Registered";
import Login from "./Pages/Login/Login";
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/RegisterForm" />} />

      <Route path="/RegisterForm" element={<Registered />} />
      <Route path="/LoginForm" element={<Login />} />

      <Route element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/Topcompanies" element={<Topcompanies />} />
      </Route>
    </Routes>
  );
};

export default App;
