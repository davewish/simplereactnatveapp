import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
const HomeScreen = ({navigation}) => {
  const onSwipeLeft = (gestureState) => {
    navigation.navigate('DataTable');
  };

  const onSwipeRight = (gestureState) => {
    console.log('right');
  };
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <GestureRecognizer
      onSwipeLeft={(state) => onSwipeLeft(state)}
      onSwipeRight={(state) => onSwipeRight(state)}
      config={config}
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Text style={styles.helloText}>Hello </Text>
        <Button title="swipe left " />
      </View>
    </GestureRecognizer>
  );
};
const styles = StyleSheet.create({
  helloText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
export default HomeScreen;
