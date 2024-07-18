import { useNavigate } from "react-router-dom";
import { Loader } from "../components/ui/Loader";
import { useUser } from "../hooks/useUser";
import { RouteConfig, ROUTES } from "./routeConfigs";
import { useEffect } from "react";

export const PrivateRoute = ({ Component }: RouteConfig) => {
  // check for login and on boarding and redirect on it's basis till then show loading
  const { user, isLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    navigate(ROUTES.LOGIN);
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return <Loader fill="full" />;
  }
  if (user) {
    return <Component />;
  }
};
