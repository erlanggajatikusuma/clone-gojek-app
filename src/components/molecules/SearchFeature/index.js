import React from 'react';
import {StyleSheet, Image, TextInput, View} from 'react-native';
import iconSearch from '../../../assets/icon/search.png';
import iconPromo from '../../../assets/icon/promo.png';

const SearchFeature = () => {
  return (
    <View style={styles.container}>
      <View style={{position: 'relative', flex: 1}}>
        <TextInput
          placeholder="What do you want to eat ?"
          style={styles.inputText}
        />
        <Image
          source={iconSearch}
          style={{position: 'absolute', top: 5, left: 12}}
        />
      </View>
      <View style={styles.promoWrapper}>
        <Image source={iconPromo} />
      </View>
    </View>
  );
};

export default SearchFeature;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 17,
    flexDirection: 'row',
  },
  inputText: {
    paddingLeft: 45,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 25,
    height: 40,
    fontSize: 13,
    backgroundColor: 'white',
    marginRight: 18,
  },
  promoWrapper: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
