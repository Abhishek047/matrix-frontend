import { useEffect } from "react";
import { RouteConfig } from "./routeConfigs";

export const PrivateRoute = ({ Component }: RouteConfig) => {
  useEffect(() => {
    console.log("isPrivate");
  }, []);
  return <Component />;
};
