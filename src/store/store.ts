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

type ScreenState = {
  currentScreen: 'home' | 'bluetooth' | 'records';
  setScreen: (screen: 'home' | 'bluetooth' | 'records') => void;
};

export const useScreenStore = create<ScreenState>((set:any) => ({
  currentScreen: 'home',
  setScreen: (screen:any) => set({ currentScreen: screen }),
}));

export const useInputStore = create<InputState>((set) => 
({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
  clear: () => set({ inputValue: "" }),
}));

