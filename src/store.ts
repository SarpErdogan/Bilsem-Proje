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

export const useInputStore = create<InputState>((set) => ({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
  clear: () => set({ inputValue: "" }),
}));

export const useTextStore = create<TextState>((set) => ({
  text: "",
  setText: (value) => set({text: value}),
}));
