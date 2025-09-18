import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { increment, decrement } from '../store/counterSlice';

export default function Counter() {
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
