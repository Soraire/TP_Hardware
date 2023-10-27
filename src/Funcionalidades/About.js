import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';

function ScannerScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scannedData, setScannedData] = useState('');

  const miembros = 'Simon, Santi'; 
  const handleScan = ({ data }) => {
    setScannedData(data);
    setIsModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal visible={isModalVisible} transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Integrantes de la App Escaneada:</Text>
            <Text>{miembros}</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ScannerScreen;
