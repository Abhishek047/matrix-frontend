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
  hideAfterLogin: boolean;
};

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  SIGN_UP: "/sign-up",
  LOGIN: "/login",
};

export const routerConfiguration: RouteConfig[] = [
  {
    id: 1,
    path: ROUTES.HOME,
    Component: Home,
    isPrivate: true,
    hideAfterLogin: false,
  },
  {
    id: 2,
    path: ROUTES.DASHBOARD,
    Component: Dashboard,
    isPrivate: true,
    hideAfterLogin: false,
  },
  {
    id: 3,
    path: ROUTES.SIGN_UP,
    Component: SignUp,
    isPublic: true,
    hideAfterLogin: true,
  },
  {
    id: 4,
    path: ROUTES.LOGIN,
    Component: Login,
    isPublic: true,
    hideAfterLogin: true,
  },
];
