import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import csxLogo from "@src/assets/logos/csx_logo.png";
import { AdminMenuItem } from "@src/types/admin/menu";
import useMenu from "@src/hooks/useMenu";
import useMenuStore from "@src/zustand/menu";

export default function AdminOverlapSidebar() {
  const menuItems = useMenu();
  const { activeMenu, setActiveMenu } = useMenuStore();
  const [visible, setVisible] = useState<boolean>(false);

  function onSelectMenu(item: AdminMenuItem) {
    item.command();
    setVisible(false);
    setActiveMenu(item?.name);
  }

  return (
    <div className="flex justify-center xl:hidden">
      <Button
        type="button"
        icon="pi pi-bars text-lg py-0"
        severity="secondary"
        text
        className="px-2 py-1 w-fit"
        onClick={() => setVisible(true)}
      />

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        content={({ hide }) => (
          <div className="min-h-screen flex relative lg:static">
            <div className="h-screen block shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none w-full p-2">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-4 pt-3 shrink-0">
                  <div className="inline-flex items-center gap-2">
                    <a href="/" target="_blank">
                      <img
                        alt="logo"
                        className="max-h-7 min-w-12"
                        src={csxLogo}
                      ></img>
                    </a>
                    <span className="font-semibold text-csx-color-3">
                      Administrator
                    </span>
                  </div>
                  <Button
                    type="button"
                    icon="pi pi-times py-0"
                    severity="secondary"
                    text
                    className="px-2 py-1 w-fit"
                    onClick={(e) => hide(e)}
                  />
                </div>

                <div className="overflow-y-auto">
                  <ul className="list-none p-3 m-0">
                    {menuItems.map((item, index) => (
                      <li
                        key={index}
                        className={`${
                          activeMenu === item?.name
                            ? "bg-blue-100"
                            : "hover:bg-gray-100"
                        } flex rounded-md transform duration-300 text-gray-600`}
                        onClick={() => onSelectMenu(item)}
                      >
                        <a className="p-ripple flex items-center cursor-pointer p-3 border-round hover:surface-100 transition-duration-150 transition-colors w-full">
                          <div className="h-full mr-2">{item?.icon}</div>
                          <span className="font-medium">{item?.label}</span>
                        </a>
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
                    <span className="font-semibold">Amy Elsner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </div>
  );
}
