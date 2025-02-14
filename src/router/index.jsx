import { createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../pages";
import { MainLayout } from "../layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "*",
        element: <DashboardPage />,
      }
    ],
  },
]);

export default router;
