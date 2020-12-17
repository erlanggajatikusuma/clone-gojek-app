import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import NavBar from '../../organisms/NavBar';

const Orders = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Orders Page</Text>
        <Button
          title="Go to Detail"
          onPress={() => props.navigation.navigate('OrderDetail')}
        />
      </View>
      <NavBar />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
