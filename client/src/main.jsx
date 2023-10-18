import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import News from './components/News/News.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Contact_us from './components/contact_us/contact_us.jsx'
import Blog from './components/blog/Blog.jsx'
import Shop from './components/shop/Shop.jsx'


import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"News",
    element: <News />
  },
  {
    path:"Shop",
    element: <Shop />
  },
  {
    path:"Blog",
    element: <Blog />
  },
  {
    path:"Login",
    element: <Login />
  },
  {
    path:"Register",
    element: <Register />
  },
  {
    path:"Contact",
    element: <Contact_us />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
