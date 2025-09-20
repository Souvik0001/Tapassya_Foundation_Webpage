import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import Root from "./routes/Root.tsx"
import Home from "./routes/Home.tsx"
import Login from "./routes/Login.tsx"
import Admissions from "./routes/Admissions.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },       // / -> Home
      { path: "login", element: <Login /> },
      { path: "admissions", element: <Admissions /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
