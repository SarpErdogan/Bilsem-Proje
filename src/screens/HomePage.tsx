import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useScreenStore } from '../store/store';
import { connect, sendText } from '../backend/bluetooth/bluetooth';

const HomePage = () => {
    const { currentScreen, setScreen } = useScreenStore();

    return (
        <View style={{ flex: 1,flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Text ></Text>
            <TouchableOpacity onPress={() => connect()} style={styles.button}>
                <Text>CİHAZA BAĞLAN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sendText('basla')} style={styles.button}>
                <Text>CİHAZI BAŞLAT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sendText('dur')} style={styles.button}>
                <Text>CİHAZI DURDUR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sendText('foto')} style={styles.button}>
                <Text>FOTOĞRAF ÇEK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setScreen('records')} style={styles.button}>
                <Text>KAYITLARI İNCELE</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex : 1,
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'lightblue',
    },
});

export default HomePage;