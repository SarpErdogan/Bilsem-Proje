import { create } from "zustand";

interface deviceState {
  device: any;
  setDevice: (value: any) => void;
}


export const useDeviceStore = create<deviceState>((set) => 
({
  device: "",
  setDevice: (value) => set({ device: value }),
}));

