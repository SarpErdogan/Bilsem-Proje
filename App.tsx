import React from 'react';
import { View, Text, Button } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState, AppDispatch } from './src/store';
import { reset, connected } from './src/store/counterSlice';
const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useDispatch<AppDispatch>();
const ConnectButton = ():any => 
{
  return (
    <Button
    title = "Cihaza Bağlan"
    onPress = {()=>{dispatch(reset)}}></Button>
  );
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
const Main = () =>
{
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
      <Main />
    </Provider>
  );
}