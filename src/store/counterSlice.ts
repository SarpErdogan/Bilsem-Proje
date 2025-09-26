import { createSlice } from '@reduxjs/toolkit';

type CounterState = { 
  value: boolean 
};
const initialState: CounterState = { 
  value: false
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    connected: (state) => { state.value = true; },
    reset: (state) => { state.value = false; },
  },
});

export const { connected, reset } = counterSlice.actions;
export default counterSlice.reducer; 