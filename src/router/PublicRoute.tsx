import { useEffect } from "react";
import { RouteConfig } from "./routeConfigs";

export const PublicRoute = ({ Component }: RouteConfig) => {
  useEffect(() => {
    console.log("isPublic");
  }, []);
  return <Component />;
};
