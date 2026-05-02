import React from 'react';
import { View } from 'react-native';

import { useScreenStore } from './src/store/store';
import HomeScreen from './src/screens/HomePage';
import Bluetooth from './src/screens/BluetoothPage';
import RecordsPage from './src/screens/RecordsPage';

export default function App() {
  const { currentScreen, setScreen } = useScreenStore();

  const screens = {
    home: <HomeScreen />,
    bluetooth: <Bluetooth />,
    records: <RecordsPage />,
  };

  return (
      <View style={{ flex: 1 }}>
        {screens[currentScreen]}
    </View>
  );
}
