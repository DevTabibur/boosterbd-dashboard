import NotFound from "../components/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Test from "../pages/Test";
import Register from '../pages/Register/Register'
import Login from "../pages/Login/Login";
import { Dashboard } from "../pages";

export const publicRoutes = [
  { path: "/", name: Dashboard, Component: Dashboard },
  { path: "/home", name: Home, Component: Home },
  { path: "/test", name: Test, Component: Test },
  { path: "/register", name: Register, Component: Register },
  { path: "/login", name: Login, Component: Login },
  { path: "*", name: NotFound, Component: NotFound },
];

export default publicRoutes;