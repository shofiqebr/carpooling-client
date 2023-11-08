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
import NotFound from "../pages/NotFound";
import AllServices from "../pages/AllServices";
import PrivateRoute from './../provider/PrivateRoute';
import SingleService from './../pages/SingleService';

  const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFound/>,
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
          element: <PrivateRoute><Service></Service></PrivateRoute>
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
        {
          path: 'allservices',
          element: <AllServices></AllServices>
        },
        {
          path: 'singleservice/:id',
          element: <SingleService></SingleService>,
          loader: ({params}) =>fetch(`http://localhost:5000/services/${params.id}`)
        },
       
      ],
    },
  ]);
export default Route;