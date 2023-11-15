import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
    alert(`Código QR escaneado:\n${data}`);
  };

  const navigateToScanner = () => {
    navigation.navigate('Identificacion');
  };

  if (hasPermission === null) {
    return <Text>Esperando permisos de la cámara...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No tienes permisos para acceder a la cámara.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simon Chama y Santiago Min</Text>
      <Image source={require('./Qr.png')}></Image>
      <BarCodeScanner
        onBarCodeScanned={handleScan}
        style={styles.qrScanner}/>
      
      <TouchableOpacity onPress={navigateToScanner} style={styles.button}>
        <Text style={styles.buttonText}>Escanear Otra Aplicación</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: 20,
    },
    icon: {
      alignItems: 'center',
      margin: 10,
    },
    img: {
        alignItems: 'center'
    }
  });

export default About;
