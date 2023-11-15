import { Video, ResizeMode } from 'expo-av';
import React from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VideoPlayer = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [videoLink, setVideoLink] = React.useState('');

  const getVideoLinkFromStorage = async () => {
    try {
      const storedVideoLink = await AsyncStorage.getItem('videoLink');
      if (storedVideoLink !== null) {
        setVideoLink(storedVideoLink);
        console.log('Enlace del video recuperado con éxito');
      }
    } catch (error) {
      console.error('Error al recuperar el enlace del video:', error);
    }
  };

  React.useEffect(() => {
    getVideoLinkFromStorage();
  }, []); 

  const handleVideoSubmit = async () => {
    try {
      await AsyncStorage.setItem('videoLink', videoLink);
      console.log('Enlace del video guardado con éxito');
      
      console.log('Attempting to load video:', videoLink);
      await video.current.loadAsync({ uri: videoLink });
      
      // Update status after loading the video
      setStatus(await video.current.getStatusAsync());
      console.log('Video loaded successfully:', status);
    } catch (error) {
      console.error('Error al guardar o cargar el enlace del video:', error);
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
        onChangeText={setVideoLink}
      />
      <Button title="Submit" onPress={handleVideoSubmit} />

      <View style={styles.videoContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: videoLink,
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(status)}
        />
        <View style={styles.controls}>
          <Button title={status.isPlaying ? 'Pause' : 'Play'} onPress={handlePlayPause} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginBottom: 20,
  },
  videoContainer: {
    width: '80%',
    height: 200,
    marginTop: 20,
  },
  video: {
    flex: 1,
  },
  controls: {
    marginTop: 10,
  },
});

export default VideoPlayer;
