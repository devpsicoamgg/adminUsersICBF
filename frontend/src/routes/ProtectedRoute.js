import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, isAllowed, fallbackPath, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAllowed ? <Component /> : <Navigate to={fallbackPath} replace />}
    />
  );
};

export default ProtectedRoute;
