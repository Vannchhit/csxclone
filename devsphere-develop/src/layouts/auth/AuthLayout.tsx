import { useAuthStore } from "@src/zustand/auth";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const authStore = useAuthStore();
  return authStore.auth.token ? <Navigate to="/admin" /> : <Outlet />;
};

export default AuthLayout;
