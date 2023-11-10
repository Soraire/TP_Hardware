import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

const About = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleScan = ({ data }) => {
    // Aquí puedes manejar la lógica cuando se escanea un código QR
    // Extraer la información del código QR, como los nombres de los integrantes.
    // Mostrar esta información en un modal o pantalla de resultados.
    alert(`Código QR escaneado:\n${data}`);
  };

  const navigateToScanner = () => {
    navigation.navigate('Scanner'); // Ajusta esto según la configuración de tu navegación
  };

  if (hasPermission === null) {
    return <Text>Esperando permisos de la cámara...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No tienes permisos para acceder a la cámara.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de la Aplicación</Text>
      {/* Aquí puedes agregar información sobre tu aplicación */}
      
      {/* Código QR */}
      <BarCodeScanner
        onBarCodeScanned={handleScan}
        style={styles.qrScanner}
      />
      
      {/* Botón para escanear otra aplicación */}
      <TouchableOpacity onPress={navigateToScanner} style={styles.button}>
        <Text style={styles.buttonText}>Escanear Otra Aplicación</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrScanner: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default About;
