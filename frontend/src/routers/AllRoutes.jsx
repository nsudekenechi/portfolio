import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../pages/admin/Login";
import { Protected } from "../pages/admin/Protected";
import { Dashboard } from "../pages/admin/Dashboard";
import { DashboardContainer } from "../pages/admin/DashboardContainer";
import { HomeContainer } from "../pages/HomeContainer";
import { Home } from "../pages/Home";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeContainer />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]

    },
    {
        path: "/admin/login",
        element: <Login />
    },
    {
        path: "/admin/dashboard",
        element: <Protected><DashboardContainer /></Protected>,
        children: [
            {
                path: "",
                element: <Dashboard />
            }
        ]

    }
])