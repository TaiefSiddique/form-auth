import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Signup from './Signup/Signup.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
      path: "/login",
      element: <Login/>,      
      },
      {
        path: "/signup",
        element: <Signup/>,
      }
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
