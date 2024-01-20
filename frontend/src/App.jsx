import { RouterProvider } from "react-router-dom"
import "./assets/index.css"
import "./assets/App.css"
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from "./routers/AllRoutes.jsx"
function App() {
  return (
    <>
      <RouterProvider router={Routes} />
    </>
  )
}

export default App
