import { createBrowserRouter } from "react-router";

import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import LoginPage from "../pages/authPages/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";
import ReviewReceipt from "../pages/ReviewReceipt";
import MainLayout from "../components/layout/mainLayout/MainLayout";
import AuthLayout from "../components/layout/authLayout/AuthLayout";
import ProtectedRoute from "../routes/ProtectedRoute";
import PublicRoute from "../routes/PublicRoute";
import CameraOCR from "../pages/CameraOCR";
import UploadReceipt from "../pages/UploadReceipt";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PublicRoute,
    children: [
      {
        Component: AuthLayout,
        errorElement: <ErrorPage />,
        children: [
          { index: true, Component: LoginPage },
          { path: "register", Component: RegisterPage },
        ],
      },
    ],
  },
  {
    path: "/app",
    Component: ProtectedRoute,
    children: [
      {
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            Component: Dashboard,
            handle: { title: "Dashboard", subtitle: "Welcome Back" },
          },
          {
            path: "review-receipt",
            Component: ReviewReceipt,
            handle: {
              title: "Review Receipt",
              subtitle: "Verify and edit extracted data",
            },
          },
          {
            path: "expenses",
            Component: Expenses,
            handle: {
              title: "Expenses",
              subtitle: "Manage and track all your expenses",
            },
          },
          {
            path: "camera",
            Component: CameraOCR,
            handle: {
              title: "Scan Receipt",
              subtitle: "Capture your receipt using your camera",
            },
          },
          {
            path: "upload-receipt",
            Component: UploadReceipt,
            handle: {
              title: "Upload Receipt",
              subtitle: "Capture your receipt using your camera",
            },
          },
        ],
      },
    ],
  },
]);
