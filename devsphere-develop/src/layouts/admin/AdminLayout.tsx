import { Outlet } from "react-router-dom";
import AdminTopbar from "./AdminTopbar";
import AdminSidebar from "./AdminSidebar";
import AdminFooter from "./AdminFooter";
import { useResizeListener } from "primereact/hooks";
import { useEffect } from "react";
import useWindowStore from "@src/zustand/window";

const AdminLayout = () => {
  const { setWindow } = useWindowStore();

  const [bindWindowResizeListener, unbindWindowResizeListener] =
    useResizeListener({
      listener: () => {
        setWindow({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      },
    });

  useEffect(() => {
    bindWindowResizeListener();
    return () => {
      unbindWindowResizeListener();
    };
  }, [bindWindowResizeListener, unbindWindowResizeListener]);

  return (
    <div className="flex min-h-screen">
      <div className="flex-none">
        <AdminSidebar />
      </div>

      <div className="relative w-full grow gap-6">
        <AdminTopbar />
        <div className="bg-gray-200 w-full h-full pt-20 z-0 p-5 overflow-auto">
          <Outlet />
        </div>
        <AdminFooter />
      </div>
    </div>
  );
};

export default AdminLayout;
