/*
NEEDS
ASYNC
STORAGE
https://react-native-async-storage.github.io/async-storage/docs/install
*/
// VideoPlayer.js
// VideoPlayer.tsx
import React, { useRef } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
//import Video from 'react-native-video';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Video Link"
        value={videoLink}
        onChangeText={(text) => onPlayPause(text)}
      />
      <View style={styles.videoContainer}>
        <Button title="Play Video" onPress={() => onPlayPause(videoLink)} />
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
