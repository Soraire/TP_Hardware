import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import Title from './Title';
//import Contactos from './Contactos';
import HoraTemperatura from './HoraTemperatura';
import Identificacion from './Identificacion';
import NroEmergencia from './NroEmergencia';
import About from './About'

const HomeScreen = ({ navigation }) => {
  const icons = [
    { name: 'Title', component: 'Title', source: "https://cdn-icons-png.flaticon.com/512/5973/5973800.png" },
    { name: 'Contactos', component: 'Contactos', source: "contactosIcon" },
    { name: 'HoraTemperatura', component: 'HoraTemperatura', source: "horaTemperaturaIcon" },
    { name: 'Identificacion', component: 'Identificacion', source: "identificacionIcon" },
    { name: 'NroEmergencia', component: 'NroEmergencia', source: "nroEmergenciaIcon" },
    { name: 'About', component: 'About', source: "aboutIcon" },
  ];

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          style={styles.icon}
          onPress={() => navigation.navigate(icon.component)}
        >
          {/* Use the Image component to display the icon */}
          <Image source={{ uri: icon.source }} style={{ width: 50, height: 50 }} />
         <Text>{icon.name}</Text>
        </TouchableOpacity>
      ))}
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
});

export default HomeScreen;
