import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

//pages
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/404"));

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      children: [
        { element: <Home />, index: true },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
  ]);

  return routes;
}
