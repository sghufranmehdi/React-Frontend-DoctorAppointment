import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Doctors from "../Pages/Doctors/Doctors";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
};

export default Routers;
