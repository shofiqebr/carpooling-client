import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Service from "../pages/Service";
import Dashboard from "../pages/Dashboard";
import MyServices from "../pages/MyServices";
import MyShedules from "../pages/MyShedules";
import NotFound from "../pages/NotFound";
import AllServices from "../pages/AllServices";
import PrivateRoute from './../provider/PrivateRoute';
import SingleService from './../pages/SingleService';
import ManageService from "../pages/ManageService";
import AddProduct from "../pages/AddProduct";

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
          path: 'addproduct',
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: 'myservices',
          element: <MyServices></MyServices>
        },
        {
         
          path: 'myshedules',
          element:  <PrivateRoute>
            <MyShedules></MyShedules>
          </PrivateRoute> 
          
        },
        {
          path: 'allservices',
          element: <AllServices></AllServices>
        },
        {
          path: 'singleservice/:id',
          element:  <PrivateRoute><SingleService></SingleService></PrivateRoute>,
          loader: ({params}) =>fetch(`https://carpooling-and-ride-sharing-service-server.vercel.app/services/${params.id}`)
        },
        {
          path:'manageservice',
          element:<PrivateRoute>
<ManageService></ManageService>
          </PrivateRoute>,
          loader: () =>fetch('https://carpooling-and-ride-sharing-service-server.vercel.app/services') 
        }
       
      ],
    },
  ]);
export default Route;