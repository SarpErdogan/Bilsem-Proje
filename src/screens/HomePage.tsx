import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useScreenStore } from '../store/store';

const HomePage = () => {
    const { currentScreen, setScreen } = useScreenStore();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setScreen('bluetooth')} style={{ padding: 20, backgroundColor: 'lightblue', borderRadius: 10 }}>
                <Text>CİHAZA BAĞLAN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{ padding: 20, backgroundColor: 'lightblue', borderRadius: 10 }}>
                <Text>CİHAZI BAŞLAT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{ padding: 20, backgroundColor: 'lightblue', borderRadius: 10 }}>
                <Text>CİHAZI DURDUR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={{ padding: 20, backgroundColor: 'lightblue', borderRadius: 10 }}>
                <Text>FOTOĞRAF ÇEK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setScreen('records')} style={{ padding: 20, backgroundColor: 'lightblue', borderRadius: 10 }}>
                <Text>KAYITLARI İNCELE</Text>
            </TouchableOpacity>
        </View>
    );
}

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

export default HomePage;