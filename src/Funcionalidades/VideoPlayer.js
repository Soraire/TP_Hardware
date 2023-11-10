/*
NEEDS
ASYNC
STORAGE
https://react-native-async-storage.github.io/async-storage/docs/install
*/
import { Video, ResizeMode } from 'expo-av';
import React from 'react';
import { View, StyleSheet, Button, TextInput, Text } from 'react-native';

const VideoPlayer = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Text/><Text/><Text/><Text/>
      <TextInput
        style={styles.input}
        placeholder="Enter Video Link"
        value={video} 
         onSubmit 
         
      />
      <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: video,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
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
});

export default VideoPlayer;
