import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RouteConfig, routerConfiguration } from "./routeConfigs";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Navbar } from "../components/ui/Navbar";
import { Container } from "@chakra-ui/react";
import { useUser } from "../hooks/useUser";

export const Provider = () => {
  const { loadingFirebaseUser } = useUser();
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route
            element={
              <>
                {!loadingFirebaseUser && <Navbar />}
                <Container mt={4}>
                  <Outlet />
                </Container>
              </>
            }
          >
            {routerConfiguration.map((route: RouteConfig) => {
              let RouteWrapper = PublicRoute;
              if (route.isPrivate) {
                RouteWrapper = PrivateRoute;
              }
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={<RouteWrapper {...route} />}
                />
              );
            })}
          </Route>
        )
      )}
    />
  );
};
