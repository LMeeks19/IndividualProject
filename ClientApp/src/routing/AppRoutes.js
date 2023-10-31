import Login  from "../Pages/Login";
import Home from "../Pages/Home";
import CreateAccount from "../Pages/CreateAccount";
import ForgottenPassword from "../Pages/ForgottenPassword";
import Settings from "../Pages/Settings";
import MyAccount from "../Pages/MyAccount";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-account',
    element: <CreateAccount />
  },
  {
    path: '/forgotten-password',
    element: <ForgottenPassword />
  },
  {
    path: `/settings`,
    element: <Settings />
  },
  {
    path: `/myAccount`,
    element: <MyAccount />
  }
];

export default AppRoutes;
