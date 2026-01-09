import React, { useState } from 'react';
import {Alert} from 'react-native';
import {useDeviceStore} from '../../store/bluetoothStore';
import BluetoothClassic from 'react-native-bluetooth-classic';


  const {device, setDevice} = useDeviceStore();

  // 📌 Daha önce eşleştirilmiş cihaza bağlan
const connect = async () => {
  try {
    const bonded = await BluetoothClassic.getBondedDevices();

    // Raspberry Pi adını birebir yaz
    const pi = bonded.find(d => d.name === 'raspberrypi');

    if (!pi) {
      Alert.alert('Hata', 'Raspberry Pi bulunamadı');
      return;
    }
    const connected = await pi.connect();
    setDevice(pi);
    Alert.alert('Bağlandı', 'Raspberry Pi ile bağlantı kuruldu');
  } catch (e) {
    Alert.alert('Bağlantı hatası', String(e));
  }
};

const sendText = async (text: string) => {
  if (!device) {
    Alert.alert('Hata', 'Önce bağlan');
    return;
  }
  try {
    await device.write(text + '\n'); // 🔴 satır sonu önemli
  } catch (e) {
    Alert.alert('Gönderme hatası', String(e));
  }
};


export {sendText, connect};