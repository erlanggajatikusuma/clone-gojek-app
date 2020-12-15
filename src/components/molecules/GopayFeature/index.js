import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const GopayFeature = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={props.img} />
      <Text style={styles.textTitle}>{props.title}</Text>
    </View>
  );
};

export default GopayFeature;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
  },
});
