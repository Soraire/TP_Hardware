import { Video, ResizeMode } from 'expo-av';
import React from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Asegúrate de importar AsyncStorage

const VideoPlayer = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [videoLink, setVideoLink] = React.useState('');

  const handleVideoSubmit = async () => {
    try {
      await AsyncStorage.setItem('videoLink', videoLink);
      console.log('Enlace del video guardado con éxito');
    } catch (error) {
      console.error('Error al guardar el enlace del video:', error);
    }
  };

  const handlePlayPause = () => {
    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
  };

  return (
    <View style={styles.container}>
      <Text />
      <Text />
      <Text />
      <Text />
      <TextInput
        style={styles.input}
        placeholder="Enter Video Link"
        value={videoLink}
      />
      <Button title="Submit" onPress={handleVideoSubmit} />

      <View style={styles.videoContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: videoLink, // Usar el enlace que ingresó el usuario
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={handlePlayPause}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
  },
  video: {
    width: 300,
    height: 200,
  },
  buttons: {
    marginTop: 10,
  },
});

export default VideoPlayer;
