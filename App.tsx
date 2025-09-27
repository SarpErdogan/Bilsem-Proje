import React from 'react';
import { View, Text, Button } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState, AppDispatch } from './src/store';
import { reset, connected } from './src/store/counterSlice';
import RNBluetoothClassic from 'react-native-bluetooth-classic';

const MainPageButtons = () => 
{
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const ConnectButton = ():any => 
  {
    return (
      <Button
      title = "Cihaza Bağlan"
      onPress = {()=>{dispatch(reset())}}></Button>
    );
  }
  const ConnectionFunction = async () => 
  {
    const devices:any = await (RNBluetoothClassic as any).list();

    const hc05:any = devices.find((device:any) => device.name === 'HC-05');

    if (hc05) {
      const connected:any = await hc05.connect();
      if (connected) {
        await hc05.write('Hello HC-05');
        const data = await hc05.read();
      }
    }
  }

  const StartButton = ():any => 
  {
    return (
      <Button
      title = "Cihazı Başlat"></Button>
    );
  }
  const StopButton = ():any => 
  {
    return (
      <Button
      title = "Cihazı Durdur"></Button>
    );
  }
  const PhotoButton = ():any => 
  {
    return (
      <Button
      title = "Fotoğraf Çek"></Button>
    );
  }
  const SeeRecordsButton = ():any => 
  {
    return(
      <Button
      title = "Kayıtları İncele"></Button>
    );
  }
  return (
    <View>
      <ConnectButton/>
      <StartButton/>
      <StopButton/>
      <PhotoButton/>
      <SeeRecordsButton/>
    </View>
  );
}

export default function App() 
{
  return (
    <Provider store={store}>
      <MainPageButtons />
    </Provider>
  );
}