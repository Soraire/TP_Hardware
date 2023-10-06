import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/Funcionalidades/Title';
import Contactos from './src/Funcionalidades/Contactos';
import HoraTemperatura from './src/Funcionalidades/HoraTemperatura';
import Identificacion from './src/Funcionalidades/Identificacion';
import NroEmergencia from './src/Funcionalidades/NroEmergencia';
import About from './src/Funcionalidades/About'

export default function App() {
  return (
  <div id="container">
    <div class="app">
      <Image/>
      <h3>App 1</h3>
    </div>
    <div class="app">
      <Image/>
      <h3>App 2</h3>
    </div>
    <div class="app">
      <Image/>
      <h3>App 3</h3>
    </div>
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Title" component={Title} /> 
          <Stack.Screen name="Contacts" component={Contactos} /> 
          <Stack.Screen name="Identification" component={Identificacion} />
          <Stack.Screen name="HoraTemperatura" component={HoraTemperatura} />
          <Stack.Screen name="Emergencia" component={NroEmergencia} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    padding: '20px',
  },
  app: {
    textAlign: 'center',
    overflow: 'hidden',
    transition: 'transform 0.2s ease-in-out',
  },
  appHover: {
    transform: 'scale(1.05)',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  h3: {
    marginTop: '10px',
    fontSize: '16px',
  },
});
