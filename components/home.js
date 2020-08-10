import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Text style={styles.helloText}>Simple Helloworld App </Text>
      <Button
        title="Go to Data Table"
        onPress={() => navigation.navigate('DataTable')}
      />
    </View>
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
