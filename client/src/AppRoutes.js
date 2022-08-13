import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<Navigate to="/properties/1" />} />
        <Route path="/properties/:propertyId" element={<PropertiesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
