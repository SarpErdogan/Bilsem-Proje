import React from 'react';
import { View, Text, Button } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState, AppDispatch } from './store';
import { increment, decrement } from './store/counterSlice.ts';

function Main() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ fontSize: 24, textAlign: 'center' }}>{count}</Text>

      <Button title="Arttır" onPress={() => dispatch(increment())} />
      <Button title="Azalt" onPress={() => dispatch(decrement())} />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
