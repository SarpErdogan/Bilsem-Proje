import { PermissionsAndroid } from 'react-native';

// Veri çekme fonksiyonu
export const fetchRecords = async (setRecords: (records: any[]) => void, setLoading: (loading: boolean) => void, setError: (error: string | null) => void) => {
  setLoading(true);
  setError(null); // Hata durumunu sıfırla

  try {
    // Konum izni ve Bluetooth izinlerini kontrol et
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
      PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ]);

    if (
      granted['android.permission.BLUETOOTH_SCAN'] !== PermissionsAndroid.RESULTS.GRANTED ||
      granted['android.permission.BLUETOOTH_CONNECT'] !== PermissionsAndroid.RESULTS.GRANTED ||
      granted['android.permission.ACCESS_FINE_LOCATION'] !== PermissionsAndroid.RESULTS.GRANTED
    ) {
      setError('Bluetooth veya konum izinleri verilmedi');
      return;
    }

    // API'den veri çekme
    const response = await fetch('API_URL'); // API URL'ini buraya yaz
    if (!response.ok) {
      throw new Error('Veri çekilemedi');
    }

    const data = await response.json();
    setRecords(data); // Veriyi state'e al
  } catch (error: any) {
    setError(error.message);
  } finally {
    setLoading(false); // Yükleme tamamlandı
  }
};
