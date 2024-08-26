import Login from "../pages/auth/Login";
import AuthLayout from "@src/layouts/auth/AuthLayout";
import AdminLayout from "@src/layouts/admin/AdminLayout";
import Dashboard from "@src/pages/admin/dashboard/Dashboard";

import LanguageLayout from "@src/layouts/LanguageLayout";
import SiteLayout from "@src/layouts/site/SiteLayout";
import NavigateComponent from "@src/components/NavigateComponent";
import Home from "@src/pages/site/home/Home";
import Contact from "@src/pages/site/contact";
import SiteDetailLayout from "@src/layouts/site/SiteDetailLayout";

export const routes = [
  {
    element: <LanguageLayout />,
    children: [
      {
        element: <SiteLayout />,
        errorElement: <div>Error</div>,
        children: [
          {
            path: "/",
            element: <NavigateComponent to="" />,
          },
          {
            path: "/:lng",
            element: <Home />,
          },
          {
            element: <SiteDetailLayout />,
            children: [
              {
                index: true,
                path: "/:lng/contact",
                element: <Contact />,
              },
            ],
          },
        ],
      },
      /// PROTECTED ROUTES
      // {
      //   element: <ProtectedRoute />,
      //   children: [
      //     {
      //       path: "/admin",
      //       element: <AdminLayout />,
      //       children: [
      //         {
      //           index: true,
      //           path: "/admin",
      //           element: <Dashboard />,
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          {
            index: true,
            path: "/admin",
            element: <Dashboard />,
          },
        ],
      },
      /// AUTH ROUTES
      {
        path: "/login",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
        ],
      },
      /// ROUTE NOT FOUND
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
];
