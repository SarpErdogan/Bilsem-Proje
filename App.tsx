import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { reset, connected } from './src/store/counterSlice';
import RNBluetoothClassic from 'react-native-bluetooth-classic';

const MainPageButtons = (props: any): any => {
  const handlePress = async () => {
    switch (props.name) {
      case "Cihaza Bağlan":
        await connectionFunction();
        break;

      default:
        console.log("Tanımsız buton:", props.name);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const connectionFunction = async () => {
  try {
    const devices: any = await (RNBluetoothClassic as any).list();
    const hc05: any = devices.find((device: any) => device.name === "HC-05");

    if (hc05) {
      const connected: any = await hc05.connect();
      if (connected) {
        await hc05.write("Hello HC-05");
        const data = await hc05.read();
        console.log("HC-05 den veri:", data);
      }
    } else {
      console.log("HC-05 bulunamadı.");
    }
  } catch (err) {
    console.error("Bluetooth bağlantı hatası:", err);
  }
};

export default function App():any {
  return (
  <View style= {styles.container}>
    <MainPageButtons name = "Cihaza Bağlan"/>
    <MainPageButtons name = "Cihazı Başlat"/>
    <MainPageButtons name = "Cihazı Durdur"/>
    <MainPageButtons name = "Fotoğraf Çek"/>
    <MainPageButtons name = "Kayıtları incele"/>
  </View>
  );
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",       
    paddingTop: 30,       
    backgroundColor: "#f5f5f5",
  },
  button: {
    width: 200,
    height: 60,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#d5d9d9",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 14,
    color: "#0f1111",
    fontFamily: "sans-serif",
  },
});
