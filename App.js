import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
/*import Title from './src/Funcionalidades/Title';
import Contactos from './src/Funcionalidades/Contactos';*/
import Home from './src/Funcionalidades/Home';
import HoraTemperatura from './src/Funcionalidades/HoraTemperatura';
import Identificacion from './src/Funcionalidades/Identificacion';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ContextProvider, Context } from './ContextProvider'
/*import ContextProvider from 'your-context-provider'
import NroEmergencia from './src/Funcionalidades/NroEmergencia';
import About from './src/Funcionalidades/About'*/
const Stack = createStackNavigator();
export default function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name = "Home" component={Home}/>
          {/*<Stack.Screen name="Title" component={Title} /> 
          <Stack.Screen name="Contacts" component={Contactos} /> */}
          <Stack.Screen name="HoraTemperatura" component={HoraTemperatura} />
          {/*<Stack.Screen name="Emergencia" component={NroEmergencia} />
          <Stack.Screen name="About" component={About} />*/}
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
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
//  'https://api.weatherapi.com/v1/current.json?q=Buenos%20Aires&key=6d543f6a96974a35852114433231110' \
