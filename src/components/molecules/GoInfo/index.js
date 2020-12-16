import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const GoInfo = () => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      <View style={{height: 15, width: 60, marginLeft: -4}}>
        <Image
          source={require('../../../assets/logo/gojek.png')}
          style={styles.imgLogo}
        />
      </View>
      <Text style={styles.textTitle}>Complete Your Profile</Text>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <View>
          <Image
            source={require('../../../assets/dummy/facebook-connect.png')}
          />
        </View>
        <View style={{marginLeft: 16, flex: 1}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>
            Connect with Facebook
          </Text>
          <Text style={styles.textInfo}>
            Login faster without verification code
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnWrapper}>
        <Text style={styles.btn}>CONNECT</Text>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
          marginTop: 16,
        }}
      />
    </View>
  );
};

export default GoInfo;

const styles = StyleSheet.create({
  imgLogo: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  textTitle: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  textInfo: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#4A4A4A',
    width: '70%',
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
});
