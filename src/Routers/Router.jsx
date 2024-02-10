import { createBrowserRouter } from "react-router-dom";
import Mainlayouts from "../Layouts/Mainlayouts";
import Users from "../Pages/Users";
import UserDetails from "../Pages/UserDetails";
import AddUser from "../Pages/AddUser";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayouts></Mainlayouts>,
    children: [
      { path: "/", element: <Users></Users> },
      { path: "/user-details/:id", element: <UserDetails></UserDetails> },
      { path: "/add-user", element: <AddUser></AddUser> }
    ],
  },
]);

export default routers;
