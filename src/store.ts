// src/store.ts
import { create } from "zustand";

interface InputState {
  inputValue: string;
  setInputValue: (value: string) => void;
  clear: () => void;
}

interface TextState {
  text: string;
  setText: (value: string) => void;
}

interface VisibilityState {
  isVisible:boolean;
  setIsVisible: () => void;
}
export const useInputStore = create<InputState>((set) => 
({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
  clear: () => set({ inputValue: "" }),
}));

export const useTextStore = create<TextState>((set) => 
({
  text: "",
  setText: (value) => set({text: value}),
}));

export const useVisibilityStore = create <VisibilityState>((set) => 
({
  isVisible: false,
  setIsVisible: () => set((s) => ({isVisible: !s.isVisible}))
}));
