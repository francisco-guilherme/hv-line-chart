import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

/* INJECT_IMPORTS */
const Chart = lazy(() => import("pages/Chart"));

const NotFound = lazy(() => import("pages/NotFound"));

const AppRoutes = () => (
  <Routes>
    {/* INJECT_ROUTES */}
    <Route path="/chart" element={<Chart />} />

    <Route path="/*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
