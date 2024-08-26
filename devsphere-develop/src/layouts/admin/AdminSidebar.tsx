import csxLogo from "@src/assets/logos/csx_logo.png";
import { Avatar } from "primereact/avatar";
import { useEffect, useState } from "react";
import useWindowStore from "@src/zustand/window";
import { AdminMenuItem } from "@src/types/admin/menu";
import { SCREEN_2XL } from "@src/constant/admin/constant";
import useMenu from "@src/hooks/useMenu";
import useMenuStore from "@src/zustand/menu";

const AdminSidebar = () => {
  const menuItems = useMenu();
  const { activeMenu, setActiveMenu } = useMenuStore();
  const { window } = useWindowStore();
  const [visible, setVisible] = useState<boolean>(true);

  function onSelectMenu(item: AdminMenuItem) {
    item.command();
    setActiveMenu(item?.name);
  }

  useEffect(() => {
    window?.width <= SCREEN_2XL ? setVisible(false) : setVisible(true);
  }, [window]);

  return (
    <div className="relative hidden xl:block">
      <button
        className="absolute top-4 p-1 z-50 -right-3 transform duration-300"
        onClick={() => setVisible(!visible)}
      >
        <i
          className={`pi pi-angle-left bg-gray-300 p-1 text-sm rounded-full transform duration-500 ${
            !visible && "rotate-180"
          }`}
        />
      </button>

      <div className={`transform duration-500 ${visible ? "w-64" : "w-24"}`}>
        <div className="flex flex-col h-screen shadow-lg">
          <div className="flex items-center justify-between p-6 shrink-0">
            <div className="inline-flex items-center gap-2">
              <a href="/" target="_blank">
                <img
                  alt="logo"
                  className="max-h-7 min-w-12"
                  src={csxLogo}
                ></img>
              </a>
              <span
                className={`font-semibold text-csx-color-3 transform duration-700 ${
                  visible ? "block" : "hidden"
                }`}
              >
                Administrator
              </span>
            </div>
          </div>

          <div className="overflow-y-auto overflow-x-hidden">
            <ul className="flex flex-col justify-center gap-y-2 px-6 py-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    activeMenu === item?.name
                      ? "bg-blue-100"
                      : "hover:bg-gray-100"
                  } ${
                    visible ? "" : "justify-center"
                  } flex p-2 rounded-md transform duration-300 text-gray-600`}
                  onClick={() => onSelectMenu(item)}
                >
                  <div className="h-full">{item?.icon}</div>
                  <span
                    className={`font-medium whitespace-nowrap transform duration-700 ${
                      visible ? "block pl-2" : "hidden"
                    }`}
                  >
                    {item?.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <div className="m-3 flex items-center cursor-pointer p-3 gap-2 border-round hover:bg-slate-100 transition-duration-150 transition-colors p-ripple">
              <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
              />
              <span
                className={`font-semibold whitespace-nowrap transform duration-700 ${
                  visible ? "block" : "hidden"
                }`}
              >
                Amy Elsner
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
