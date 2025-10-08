// src/store.ts
import { create } from "zustand";

interface InputState {
  inputValue: string;
  setInputValue: (value: string) => void;
  clear: () => void;
}

export const useInputStore = create<InputState>((set) => ({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
  clear: () => set({ inputValue: "" }),
}));
