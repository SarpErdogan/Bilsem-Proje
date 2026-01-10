import { Alert, PermissionsAndroid, Platform} from 'react-native';
import BluetoothClassic from 'react-native-bluetooth-classic';
import { useDeviceStore } from '../../store/bluetoothStore';


const requestBluetoothPermissions = async () => {
  if (Platform.OS !== 'android') return true;

  if (Platform.Version >= 31) {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    ]);

    return (
      granted['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED
    );
  }


  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  );

  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

const connect = async () => {
  try {
    const hasPermission = await requestBluetoothPermissions();
    if (!hasPermission) {
      Alert.alert('İzin gerekli', 'Bluetooth izinleri verilmedi');
      return;
    } 

    const bonded = await BluetoothClassic.getBondedDevices();
    const pi = bonded.find(d => d.name === 'raspberrypi');

    if (!pi) {
      Alert.alert('Hata', 'Raspberry Pi bulunamadı');
      return;
    }

    await pi.connect();
    useDeviceStore.getState().setDevice(pi);

    const now = new Date();
    const payload =
      `SET_TIME:${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ` +
      `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await sendText(payload + '\n');
    
    Alert.alert('Bağlandı', 'Raspberry Pi ile bağlantı kuruldu');
  } catch (e) {
    Alert.alert('Bağlantı hatası', String(e));
  }
};
const sendText = async (text: string) => {
  const device = useDeviceStore.getState().device;

  if (!device) {
    Alert.alert('Hata', 'Önce bağlan');
    return;
  }

  try {
    await device.write(text + '\n');
  } catch (e) {
    Alert.alert('Gönderme hatası', String(e));
  }
};

export { connect, sendText };
