import Home from "../modules/Home/Home";
import { Dashboard } from "../modules/Dashboard/Dashboard";

export type RouteConfig = {
  id: number;
  path: string;
  Component: React.FunctionComponent;
  isPublic?: boolean;
  isPrivate?: boolean;
};

export const routerConfiguration: RouteConfig[] = [
  {
    id: 1,
    path: "/",
    Component: Home,
    isPublic: true,
  },
  {
    id: 2,
    path: "/dashboard",
    Component: Dashboard,
    isPrivate: true,
  },
];
