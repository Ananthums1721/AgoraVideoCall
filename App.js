import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  const [videoCall, setVideoCall] = useState(false);
  const connectionData = {
    appId: '834d9260395243e982c0df386e8284d8',
    channel: 'test',
  };
  const rtcCallbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall === false ? (
    <View style={styles.container}>
      <Text onPress={() => setVideoCall(true)} style={styles.buttonStyle}>
        Start Call
      </Text>
    </View>
  ) : (
    <AgoraUIKit connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#BF5AE0',
    color: 'white',
    fontWeight: '600',
  },
});
export default App;
