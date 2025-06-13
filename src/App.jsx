import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import JobDetails from "./Components/JobDetails";
import Profile from "./Components/Profile";
import Topcompanies from "./Pages/Topcompanies";
const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Topcompanies" element={<Topcompanies />} />
        </Routes>
    </div>
  );
};

export default App;
