import { createBrowserRouter } from "react-router";

import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import LoginPage from "../pages/authPages/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage";
import ErrorPage from "../pages/ErrorPage";
import ReviewReceipt from "../pages/ReviewReceipt";
import MainLayout from "../components/layout/mainLayout/MainLayout";
import AuthLayout from "../components/layout/authLayout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthLayout,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, Component: LoginPage },
      { path: "register", Component: RegisterPage },
    ],
  },
  {
    path: "/app",
    Component: MainLayout,
    errorElement:<ErrorPage/>,
    children: [
      { index: true, Component: Dashboard, handle:{title:"Dashboard",subtitle:"Welcome Back"} },
      {path:"review-receipt", Component: ReviewReceipt, handle:{title:"Review Receipt",subtitle:"Verify and edit extracted data"}},
      { path: "expenses", Component: Expenses, handle:{title:"Expenses",subtitle:"Manage and track all your expenses"} },
    ],
  },
]);
