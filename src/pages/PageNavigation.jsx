import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Menu from "./Menu";
import Offers from "./Offers";
import Layout from "../Layout";
import MyAccount from "./MyAccount";
import Login from "./Login";
import { ProtectedRoutes } from "../components";

const PageNavigation = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/user",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "account",
            element: <MyAccount />,
          },
          {
            path: "offers",
            element: <Offers />,
          },
        ],
      },
    ],
  },
]);

export default PageNavigation;
