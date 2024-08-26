import { useAuthStore } from "@src/zustand/auth";
import useMenuStore from "@src/zustand/menu";
import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const authStore = useAuthStore();
  const location = useLocation();
  const { setActiveMenu } = useMenuStore();

  useEffect(() => {
    // eslint-disable-next-line no-useless-escape
    const regex = /\/admin\/([^\/]+)/;
    const match = location?.pathname.match(regex);

    setActiveMenu((match && match[1]) || "dashboard");
  }, [location, setActiveMenu]);

  return authStore.auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
