import Login  from "./components/Login";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import ForgottenPassword from "./components/ForgottenPassword";
import Settings from "./components/Settings";
import MyAccount from "./components/MyAccount";
import { useRecoilValue } from "recoil";
import { userState } from "./state/GlobalState";

const user = useRecoilValue(userState);

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
    path: `/${user.username}/settings`,
    element: <Settings />
  },
  {
    path: `/${user.username}/MyAccount`,
    element: <MyAccount />
  }
];

export default AppRoutes;
