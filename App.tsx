import React from 'react';
import { View } from 'react-native';

import { useScreenStore } from './src/store/store';
import HomeScreen from './src/screens/HomePage';
import RecordsPage from './src/screens/RecordsPage';

export default function App() {
  const { currentScreen, setScreen } = useScreenStore();

  const screens = {
    home: <HomeScreen />,
    records: <RecordsPage />,
  };

  return (
      <View style={{ flex: 1 }}>
        {screens[currentScreen]}
    </View>
  );
}
