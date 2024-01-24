import { createBrowserRouter, Navigate } from "react-router-dom";
import { Login } from "../pages/admin/Login";
import { Protected } from "../pages/admin/Protected";
import { Dashboard } from "../pages/admin/Dashboard";
import { DashboardContainer } from "../pages/admin/DashboardContainer";
import { HomeContainer } from "../pages/HomeContainer";
import { Home } from "../pages/Home";
import { Skills } from "../pages/Skills";
import { Projects } from "../pages/Projects";
import { Contact } from "../pages/Contact";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeContainer />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path:"contact",
                element: <Contact/>
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