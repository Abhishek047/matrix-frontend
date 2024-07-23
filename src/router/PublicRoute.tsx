import { RouteConfig, ROUTES } from "./routeConfigs";
import { useUser } from "../hooks/useUser";
import { Loader } from "../components/ui/Loader";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const PublicRoute = ({ Component, hideAfterLogin }: RouteConfig) => {
  const { user, loadingFirebaseUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loadingFirebaseUser && hideAfterLogin) {
      navigate(ROUTES.HOME);
    }
  }, [loadingFirebaseUser, user, navigate, hideAfterLogin]);

  if (loadingFirebaseUser) {
    return <Loader fill="full" />;
  }

  return <Component />;
};
