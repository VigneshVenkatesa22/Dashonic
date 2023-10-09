import { Navigate } from "react-router-dom";

//Sales
import Sales from "../pages/Sales";

import CreateConnection from "src/pages/CreateConnection";
//profile
import UserProfile from "../pages/Authentication/user-profile"

//Authentication pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword"

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const userRoutes: Array<RouteProps> = [
  //dashboard
  { path: "/sales", component: <Sales /> },

  // //profile
  { path: "/profile", component: <UserProfile/> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/sales" />,
  },
  {path:"/create-connection",component :<CreateConnection/>},
  { path: "*", component: <Navigate to="/sales" /> },
  
];

const authRoutes: Array<RouteProps> = [
  //Authentication pages
  { path: "/login", component: <Login/> },
  { path: "/logout", component: <Logout/> },
  { path: "/register", component: <Register/> },
  { path: "/forgot-password", component: <ForgetPwd/> },
];

export { userRoutes, authRoutes };
