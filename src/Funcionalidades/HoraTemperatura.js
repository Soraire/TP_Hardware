import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const getTemperature = async () => {
  try {
    const response = await axios.get('https://api.example.com/weather');
    return response.data.temperature;
  } catch (error) {
    console.error('Error fetching temperature:', error);
    return null;
  }
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString();
};

const App = () => {
  const [temperature, setTemperature] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    getTemperature().then((temp) => {
      setTemperature(temp);
    });

    setTime(getCurrentTime());
  }, []);

  return (
    <View>
      <Text>Temperatura: {temperature !== null ? `${temperature} °C` : 'Cargando...'}</Text>
      <Text>Hora actual: {time}</Text>
    </View>
  );
};

export default App;