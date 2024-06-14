import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateRoutes, publishRoutes } from "../router";

function AppRouting() {
  return (
    <Routes>
      {publishRoutes.map((route) => (
        <Route
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/main" replace />} />
      {privateRoutes.map((route) => (
        <Route
          Component={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouting;
