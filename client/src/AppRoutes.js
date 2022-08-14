import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "pages/HomePage";
import PropertiesPage from "pages/PropertiesPage";
import PropertyPage from "pages/PropertyPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/properties" element={<Navigate to="/properties/1" />} />
        <Route
          path="/properties/:propertiesPage"
          element={<PropertiesPage />}
        />
        <Route path="/property/:propertyId" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
