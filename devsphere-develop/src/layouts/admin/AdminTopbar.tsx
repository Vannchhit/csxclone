import AdminOverlapSidebar from "./AdminOverlapSidebar";
import { useAuthStore } from "@src/zustand/auth";

const AdminTopbar = () => {
  const authStore = useAuthStore();
  const handleLogout = () => {
    authStore.logout();
  };

  return (
    <div className="absolute top-0 w-full flex items-center justify-between xl:justify-end py-2 px-5 xl:py-5 xl:px-8 z-30 bg-white">
      <AdminOverlapSidebar />
      <div className="flex flex-cols gap-6 text-gray-600">
        <button type="button">
          <i className="pi pi-lock text-xl h-6 w-6" />
        </button>
        <button type="button">
          <i className="pi pi-language text-xl h-6 w-6" />
        </button>
        <button type="button">
          <i className="pi pi-user text-xl h-6 w-6" />
        </button>
        <button type="button" onClick={handleLogout}>
          <i className="pi pi-sign-out text-xl h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default AdminTopbar;
