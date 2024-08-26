import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { routes } from "./Routes";

const RouteProvider = () => {
  const browserRoutes: RouteObject[] = routes;

  const browserRouter = createBrowserRouter(browserRoutes);

  return (
    <div>
      <RouterProvider router={browserRouter}></RouterProvider>
    </div>
  );
};

export default RouteProvider;
