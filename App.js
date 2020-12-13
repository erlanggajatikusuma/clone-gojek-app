import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.welcome}>Clone Gojek App</Text> */}
      <View style={styles.content} />
      <View style={styles.bottom}>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Home</Text>
        </View>
        <View
          style={{
            backgroundColor: 'green',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Order</Text>
        </View>
        <View
          style={{
            backgroundColor: 'pink',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Help</Text>
        </View>
        <View
          style={{
            backgroundColor: 'orange',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Inbox</Text>
        </View>
        <View
          style={{
            backgroundColor: 'purple',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    backgroundColor: 'blue',
  },
  bottom: {
    height: 54,
    backgroundColor: 'yellow',
    flexDirection: 'row',
  },
});

export default App;
