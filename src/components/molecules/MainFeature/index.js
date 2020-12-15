import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const MainFeature = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={props.img} />
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default MainFeature;

const styles = StyleSheet.create({
  container: {
    width: '25%',
    alignItems: 'center',
    marginBottom: 18,
  },
  imageWrapper: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
});
