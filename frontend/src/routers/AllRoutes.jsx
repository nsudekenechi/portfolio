import { createBrowserRouter } from "react-router-dom"
import { Login } from "../pages/admin/Login"

export const Routes = createBrowserRouter([
    {
        path: "/admin/login",
        element: <Login/>
    }
])