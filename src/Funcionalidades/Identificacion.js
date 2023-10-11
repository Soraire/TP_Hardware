/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function QRScanner() {
  const handleQRCodeScanned = ({ data }) => {
    // Handle the scanned QR code data here
    alert(`Scanned QR Code: ${data}`);
  };

  return (
    <QRCodeScanner
      onRead={handleQRCodeScanned}
      flashMode={RNCamera.Constants.FlashMode.auto}
      topViewStyle={{ flex: 0 }}
      bottomViewStyle={{ flex: 0 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});*/