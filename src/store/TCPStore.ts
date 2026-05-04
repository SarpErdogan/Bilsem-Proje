import { create } from "zustand";

interface InputState {
  status: string;
  setStatus: (status: string) => string;
}


type ConnectionState = {
  status: 'disconnected' | 'connected' | 'error' | 'off';
  setStatus: (status: 'disconnected' | 'connected' | 'error' | 'off') => string;
};

export const useConnectionStore = create<ConnectionState>((set:any) => ({
  status: 'disconnected',
  setStatus: (status:any) => set({ status }),
}));


