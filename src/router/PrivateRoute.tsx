import { useNavigate } from "react-router-dom";
import { Loader } from "../components/ui/Loader";
import { useUser } from "../hooks/useUser";
import { RouteConfig, ROUTES } from "./routeConfigs";
import { useEffect } from "react";

export const PrivateRoute = ({ Component }: RouteConfig) => {
  // check for login and on boarding and redirect on it's basis till then show loading
  const { user, loadingFirebaseUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loadingFirebaseUser) {
      navigate(ROUTES.LOGIN);
    }
  }, [user, loadingFirebaseUser, navigate]);

  if (loadingFirebaseUser) {
    return <Loader fill="full" />;
  }
  if (user) {
    return <Component />;
  }
  return <></>;
};
