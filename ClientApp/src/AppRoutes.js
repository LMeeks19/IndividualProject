import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { CreateAccount } from "./components/CreateAccount";
import { ForgottenPassword } from "./components/ForgottenPassword";

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
  }

];

export default AppRoutes;
