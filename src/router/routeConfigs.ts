import Home from "../modules/home/Home";
import { Dashboard } from "../modules/dashboard/Dashboard";
import SignUp from "../modules/signUp/SignUp";
import Login from "../modules/login/Login";

export type RouteConfig = {
  id: number;
  path: string;
  Component: React.FunctionComponent;
  isPublic?: boolean;
  isPrivate?: boolean;
};

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  SIGNUP: "/sign-up",
  LOGIN: "/login",
};

export const routerConfiguration: RouteConfig[] = [
  {
    id: 1,
    path: ROUTES.HOME,
    Component: Home,
    isPrivate: true,
  },
  {
    id: 2,
    path: ROUTES.DASHBOARD,
    Component: Dashboard,
    isPrivate: true,
  },
  {
    id: 3,
    path: ROUTES.SIGNUP,
    Component: SignUp,
    isPublic: true,
  },
  {
    id: 4,
    path: ROUTES.LOGIN,
    Component: Login,
    isPublic: true,
  },
];
