import NotFound from "../components/NotFound/NotFound";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Test from "../pages/Test";

export const publicRoutes = [
  { path: "/", name: Home, Component: Home },
  { path: "/home", name: Home, Component: Home },
  { path: "/test", name: Test, Component: Test },
  { path: "/login", name: Login, Component: Login },
  { path: "*", name: NotFound, Component: NotFound },
];

export default publicRoutes;