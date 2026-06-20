import { createBrowserRouter } from "react-router";
import AppLayout from "./layout/AppLayout.jsx";
import AdminLayout from "./layout/AdminLayout.jsx";

let router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />
  },
  {
    path: '/admin',
    element: <AdminLayout />
  }
])

export default router;
