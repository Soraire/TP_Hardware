import React, { useEffect, useState } from 'react';
import axios from 'axios';
/*import Title from './src/Funcionalidades/Title';
import Contactos from './src/Funcionalidades/Contactos';*/
import HoraTemperatura from './src/Funcionalidades/HoraTemperatura';
import Identificacion from './src/Funcionalidades/Identificacion';
/*import ContextProvider from 'your-context-provider'
import NroEmergencia from './src/Funcionalidades/NroEmergencia';
import About from './src/Funcionalidades/About'*/
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const emptyIcons = [
    { name: 'Title', component: 'Title' },
    { name: 'Contactos', component: 'Contactos' },
    { name: 'HoraTemperatura', component: 'HoraTemperatura' },
    { name: 'Identificacion', component: 'Identificacion' },
    { name: 'NroEmergencia', component: 'NroEmergencia' },
    { name: 'About', component: 'About' },
  ];

  return (
    <View style={styles.container}>
      {emptyIcons.map((icon, index) => (
        <TouchableOpacity
          key={index}
          style={styles.icon}
          onPress={() => navigation.navigate(icon.component)}
        >
          {/* You can customize the appearance of your empty icons here */}
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
    width: 80,
    height: 80,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default HomeScreen;