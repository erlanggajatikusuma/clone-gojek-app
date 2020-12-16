import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const GoNews = () => {
  return (
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/dummy/sepak-bola.jpg')}
          style={styles.imgNews}
        />
        <View style={styles.opacity} />
        <View style={styles.imgWrapper}>
          <Image
            source={require('../../../assets/logo/white.png')}
            style={styles.imgLogo}
          />
        </View>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textTitle}>GO-NEWS</Text>
        <Text style={styles.textInfo}>
          Dimas Drajat selamatkan penalti, Timnas U-23 kalah
        </Text>
        <TouchableOpacity style={styles.btnWrapper}>
          <Text style={styles.btn}>READ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoNews;

const styles = StyleSheet.create({
  imgNews: {
    height: 170,
    width: '100%',
    borderRadius: 6,
  },
  imgLogo: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  textWrapper: {
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  textInfo: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7A7A7A',
    marginBottom: 11,
  },
  btnWrapper: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
  btn: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  opacity: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.2,
    borderRadius: 6,
  },
  imgWrapper: {
    height: 15,
    width: 60,
    position: 'absolute',
    top: 16,
    left: 16,
  },
});
