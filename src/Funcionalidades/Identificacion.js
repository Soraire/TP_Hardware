import React, { useState, useEffect } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function AboutScreen() {
  const [isScannerVisible, setScannerVisible] = useState(false);
  const [scannedData, setScannedData] = useState(null);

  const handleBarCodeScanned = ({ type, data }) => {
    setScannedData(data);
    setScannerVisible(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Integrantes del grupo:</Text>
      <Text>Santiago Min</Text>
      <Text>Simon Chama</Text>

      <QRCode value="Santiago Min, Simon Chama" />

      <Button title="Escanear otro código QR" onPress={() => setScannerVisible(true)} />

      <Modal visible={isScannerVisible} animationType="slide">
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            style={{ flex: 1 }}
          />
          <Button title="Cerrar Scanner" onPress={() => setScannerVisible(false)} />
        </View>
      </Modal>

      {scannedData && (
        <View>
          <Text>Integrantes de la aplicación escaneada:</Text>
          <Text>{scannedData}</Text>
        </View>
      )}
    </View>
  );
}

export default AboutScreen;
