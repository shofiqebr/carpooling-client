import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Service from "../pages/Service";
import Dashboard from "../pages/Dashboard";
import AddServices from "../pages/AddServices";
import MyServices from "../pages/MyServices";
import MyShedules from "../pages/MyShedules";

  const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'service',
          element: <Service></Service>
        },
        {
          path:'dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: 'addservices',
          element: <AddServices></AddServices>
        },
        {
          path: 'myservices',
          element: <MyServices></MyServices>
        },
        {
          path: 'myshedules',
          element: <MyShedules></MyShedules>
        },
       
      ],
    },
  ]);
export default Route;