import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ScrollableItem = (props) => {
  return (
    <View style={{marginRight: 16}}>
      <View style={{width: 150, height: 150, borderRadius: 10}}>
        <Image source={props.img} style={styles.imgStyle} />
      </View>
      <Text style={styles.textTitle}>{props.title}</Text>
    </View>
  );
};

export default ScrollableItem;

const styles = StyleSheet.create({
  imgStyle: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    borderRadius: 4,
    flex: 1,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 12,
  },
});
