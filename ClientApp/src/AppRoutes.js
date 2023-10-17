import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { CreateAccount } from "./components/CreateAccount";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/create-account',
    element: <CreateAccount />
  }
];

export default AppRoutes;
