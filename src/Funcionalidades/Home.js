import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import Contactos from './Contactos';
import HoraTemperatura from './HoraTemperatura';
import Identificacion from './Identificacion';  
import NroEmergencia from './VideoPlayer';
import About from './About'
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

const HomeScreen = ({ navigation }) => {
  const icons = [
    { name: 'Contactos', component: 'Contactos', source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png" },
    {/* name: 'HoraTemperatura', component: 'HoraTemperatura', source: "https://cdn-icons-png.flaticon.com/512/4158/4158502.png" */},
    { name: 'About', component: 'About', source: "https://www.freeiconspng.com/thumbs/about-us-icon/information-about-us-icon-16.png" },
    { name: 'VideoPlayer', component: 'VideoPlayer', source: "https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png" },{/*
  { name: 'About', component: 'About', source: "https://www.freeiconspng.com/thumbs/about-us-icon/information-about-us-icon-16.png" },*/}
  ];
/*hay q mover el hora temp a home */
  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <>
        <TouchableOpacity
          key={index}
          style={styles.icon}
          onPress={() => navigation.navigate(icon.component)}
        >
          <Image source={{ uri: icon.source }} style={{ width: 50, height: 50 }} />
        <Text>{icon.name}</Text>
        </TouchableOpacity>
        
        </>
        
      ))}
      
    {HoraTemperatura()}
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
