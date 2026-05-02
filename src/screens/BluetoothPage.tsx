import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import DeviceItem from '../backend/bluetooth/DeviceItem';
import {
  requestBluetoothPermissions,
  getPairedDevices,
  connectToDevice,
} from '../backend/bluetooth/bluetooth';
import { BluetoothDevice } from 'react-native-bluetooth-classic';
import { useScreenStore } from '../store/store';


const Bluetooth = () => {
  const { currentScreen, setScreen } = useScreenStore();
  const [devices, setDevices] = useState<BluetoothDevice[]>([]);

  useEffect(() => {
    const load = async () => {
      await requestBluetoothPermissions();
      const paired = await getPairedDevices();
      setDevices(paired);
    };
    load();
  }, []);

  const handleSelect = async (device: BluetoothDevice) => {
    const connected = await connectToDevice(device);
    setScreen("home");
  };
 
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
        Eşleştirilmiş Cihazlar
      </Text>

      <FlatList
        data={devices}
        keyExtractor={(item) => item.address}
        renderItem={({ item }) => (
          <DeviceItem device={item} onPress={handleSelect} />
        )}
      />
      <TouchableOpacity style={styles.homeButton} onPress ={()=> {setScreen("home")}}>
        <Text style={styles.homeButtonText}>◀</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    homeButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: '#222',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 12,
        elevation: 6, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    homeButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
  },
});

export default Bluetooth;