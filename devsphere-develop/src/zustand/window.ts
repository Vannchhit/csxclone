import { create } from "zustand";

type WidowType = { width: number; height: number };

// Define the state type
type WindowState = {
  window: WidowType;
  setWindow: (window: WidowType) => void;
};

// Create the store with defined types
const useWindowStore = create<WindowState>((set) => ({
  window: {
    width: window.innerWidth,
    height: window.innerHeight,
  },
  setWindow: (window) => set({ window }),
}));

export default useWindowStore;
