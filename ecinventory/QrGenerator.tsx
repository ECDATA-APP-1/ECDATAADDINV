import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import QRCode from 'react-native-qrcode-svg';
import { styles } from './QrGenerator.styles.ts';

const QRGenerator = () => {
  const [hasCameraPermission, setCameraPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [uniqueCode, setUniqueCode] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setCameraPermission(status === 'granted');
    })();
  }, []);

  const generateUniqueCode = () => {
    const randomString = Math.random().toString(36).substring(2, 8);
    const timestamp = Date.now().toString();
    const uniqueCode = `${randomString}-${timestamp}`;
    setUniqueCode(uniqueCode);
  };

  const handleBarCodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScanned(true);
    alert(`Scanned QR code:\nType: ${type}\nData: ${data}`);
  };

  if (hasCameraPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!uniqueCode ? (
        <>
          <Button title="Generate QR Code" onPress={generateUniqueCode} />
          <Text style={styles.instructions}>Tap the button to generate a unique QR code</Text>
        </>
      ) : (
        <>
          <QRCode value={uniqueCode} size={250} />
          <Text style={styles.code}>{uniqueCode}</Text>
        </>
      )}

      {scanned && (
        <Button title="Scan again" onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

export default QRGenerator;
