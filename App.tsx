import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const MainPageButtons = (props:any):any => 
{
  return(
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => Alert.alert(String(props.name) + "a basıldı!")}
      >
        <Text style={styles.text}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );

}


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
    alignItems: "center",       // yatayda ortala
    paddingTop: 150,            // ekranın üstünden 150px boşluk
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
    marginVertical: 4,          // butonlar arası boşluk
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
