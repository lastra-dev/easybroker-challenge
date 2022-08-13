import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PropertiesPage from "./pages/Properties";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Navigate to="/properties/1" />} />
        <Route path="/properties/:propertyId" element={<PropertiesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
