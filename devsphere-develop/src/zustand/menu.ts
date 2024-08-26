import { create } from "zustand";

type MenuState = {
  activeMenu: string;
  setActiveMenu: (activeMenu: string) => void;
};

const useMenuStore = create<MenuState>((set) => ({
  activeMenu: "dashboard",
  setActiveMenu: (activeMenu) => set({ activeMenu }),
}));

export default useMenuStore;
