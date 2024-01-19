import { RouterProvider } from "react-router-dom"
import "./assets/index.css"
import { Routes } from "./routers/AllRoutes.jsx"
function App() {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
