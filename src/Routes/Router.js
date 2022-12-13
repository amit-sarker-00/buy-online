import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddItem from "../Pages/AddItem/AddItem";
import AllItems from "../Pages/AllItems/AllItems";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MyItem from "../Pages/MyItem/MyItem";
import MyOrders from "../Pages/MyOrders/MyOrders";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/myitem",
        element: (
          <PrivateRoute>
            {" "}
            <MyItem></MyItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/allitems",
        element: (
          <PrivateRoute>
            <AllItems></AllItems>
          </PrivateRoute>
        ),
      },
      {
        path: "/additem",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
