import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RouteConfig, routerConfiguration } from "./routeConfigs";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const Provider = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route>
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
