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
  currentScreen: 'home' | 'records';
  setScreen: (screen: 'home' | 'records') => void;
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

