import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import MainOurMenu from "../Pages/OurMenu/MainOurMenu";
import MainOurShop from "../Pages/OurShop/MainOurShop";
import SinIn from "../Pages/SignInPage/SinIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminHome from "../Admin_DashBoard/AdminHome";
import AddItem from "../Admin_DashBoard/AddItem";
import DashBoardLayout from "../Layout/DashBoardLayout";
import ManageItem from "../Admin_DashBoard/ManageItem";
import ManageBooking from "../Admin_DashBoard/ManageBooking";
import AllUsers from "../Admin_DashBoard/AllUsers";
import MyCart from "../Pages/MyCart";
import UserHome from "../User_Dashboard/UserHome";
import Reservation from "../User_Dashboard/Reservation";
import Payment from "../User_Dashboard/Payment";
import PaymentHistory from "../User_Dashboard/PaymentHistory";
import AddReview from "../User_Dashboard/AddReview";
import MyBooking from "../User_Dashboard/MyBooking";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: <MainOurMenu></MainOurMenu>,
      },
      {
        path: "/ourShop",
        element:<MainOurShop></MainOurShop>,
      },
      {
        path: "/cart",
        element:<MyCart></MyCart>,
      },
      
    ],
  },
  {path:'/login',element:<SinIn></SinIn>},
  {path:'/signUp',element:<SignUp></SignUp>},

  // Dashboard Route 

  {
    path:'dashboard',
    element:<DashBoardLayout></DashBoardLayout>,
    children:[
      {
        index:true,
        element:<AdminHome></AdminHome>
      },
      {
        path:'dashboard/additems',
        element:<AddItem></AddItem>
      },
      {
        path:'dashboard/manageitem',
        element:<ManageItem></ManageItem>
      },
      {
        path:'dashboard/managebooking',
        element:<ManageBooking></ManageBooking>
      },
      {
        path:'dashboard/allusers',
        element:<AllUsers></AllUsers>
      },
      {
        path: "userhome",
        element:<UserHome></UserHome>,
      },
      {
        path: "reservation",
        element:<Reservation></Reservation>,
      },
      {
        path: "payment",
        element:<Payment></Payment>,
      },
      {
        path: "paymenthistory",
        element:<PaymentHistory></PaymentHistory>,
      },
      {
        path: "addreview",
        element:<AddReview></AddReview>,
      },
      {
        path: "mybooking",
        element:<MyBooking></MyBooking>,
      },
    ]

  }
]);
export default Router;
