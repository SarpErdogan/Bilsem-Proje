import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useScreenStore } from '../store/store';

const RecordsPage = () => {
    const { currentScreen, setScreen } = useScreenStore();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={styles.recordTO} onPress ={()=> {}}>
                <Text style={styles.recordText}>17.05-18.02         28.11.2025</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.recordTO} onPress ={()=> {}}>
                <Text style={styles.recordText}>12.32-12.51         27.11.2025</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.recordTO} onPress ={()=> {}}>
                <Text style={styles.recordText}>14.10-15.20         26.11.2025</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.recordTO} onPress ={()=> {}}>
                <Text style={styles.recordText}>09.05-11.02         25.11.2025</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.recordTO} onPress ={()=> {}}>
                <Text style={styles.recordText}>19.38-21.11         24.11.2025</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.recordTO} onPress ={()=> {}}>
                <Text style={styles.recordText}>22.43-23.50         23.11.2025</Text>
            </TouchableOpacity>  
            <TouchableOpacity style={styles.homeButton} onPress ={()=> {setScreen("home")}}>
                <Text style={styles.homeButtonText}>◀</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    recordTO: {
        flex: 1,                  
        marginHorizontal: 12,       
        marginVertical: 6,         
        borderRadius: 10,
        backgroundColor: '#007AFF', 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 3,
    },
    recordText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
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

export default RecordsPage;