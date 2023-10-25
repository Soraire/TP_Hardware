/*
NEEDS
ASYNC
STORAGE
https://react-native-async-storage.github.io/async-storage/docs/install
*/
import React, { useRef } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = ({ videoLink }) => {
  const videoRef = useRef(null);

  const playPauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.presentFullscreenPlayer();
    }
  };

  return (<>
    <TextInput
    placeholder="Enter Video Link"
    value={userVideoLink}
    onChangeText={(text) => setUserVideoLink(text)}
  />
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: videoLink }}
        style={styles.video}
        controls={true}
        paused={true}
        resizeMode="contain"
      />
      <Button title="Play Video" onPress={playPauseVideo} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
  },
});
//hay que juntarlos
return (
  <View>

    <Button title="Load Video" onPress={() => {}} />
    <VideoPlayer videoLink={userVideoLink} />
  </View>
);