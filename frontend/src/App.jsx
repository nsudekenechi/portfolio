import { RouterProvider } from "react-router-dom"
import "./assets/index.css"
import "./assets/App.css"
import 'react-toastify/dist/ReactToastify.css';
import { Store } from "./context/context.js";
import { Routes } from "./routers/AllRoutes.jsx"
import { useState } from "react";
function App() {
  const [store, setStore] = useState({
    user: sessionStorage.getItem("user") ? sessionStorage.getItem("user") : ""
  })
  return (
    <>
      <Store.Provider value={{ store, setStore }}>
        <RouterProvider router={Routes} />
      </Store.Provider>
    </>
  )
}

export default App
