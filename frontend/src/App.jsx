import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ROUTES } from "./helpers/Routes.helper";
import Home from "./components/Home/Home";
import CoordinatorsView from "./components/CoordinatorView/CoordinatorsView";
import AdminView from "./components/AdminView/AdminView";
import Login from "./components/Loging/Login";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import CuentameView from "./components/CuentameView/CuentameView";
import TeachersView from "./components/TeachersView/TeachersView";

const App = () => {
  const userProfile = useSelector((state) => state.user.userProfile);

  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.POLICY} element={<PrivacyPolicy />} />
      <Route path={ROUTES.TERMS} element={<TermsAndConditions />} />

      <Route
        path={decodeURIComponent(ROUTES.HOME)}
        element={
          userProfile  ? (
            <Home />
          ) : (
            <Navigate to={ROUTES.LOGIN} />
          )
        }
      />
      <Route
        path={decodeURIComponent(ROUTES.COORDINATOR)}
        element={
          userProfile === "profileCoordinator" ? (
            <CoordinatorsView />
          ) : (
            <Navigate to={ROUTES.LOGIN} />
          )
        }
      />
      <Route
        path={decodeURIComponent(ROUTES.ADMIN)}
        element={
          userProfile === "profileAdministrative" ? (
            <AdminView />
          ) : (
            <Navigate to={ROUTES.LOGIN} />
          )
        }
      />
      <Route
        path={decodeURIComponent(ROUTES.TEACHERS)}
        element={
          userProfile === "profileTeachers" ? (
            <TeachersView />
          ) : (
            <Navigate to={ROUTES.LOGIN} />
          )
        }
      />
      <Route
        path={decodeURIComponent(ROUTES.CUENTAME)}
        element={
          userProfile === "profileCuentame" ? (
            <CuentameView />
          ) : (
            <Navigate to={ROUTES.LOGIN} />
          )
        }
      />
    </Routes>
  );
};

export default App;
