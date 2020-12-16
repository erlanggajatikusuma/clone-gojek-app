import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import iconGoRide from '../../../assets/icon/go-ride.png';
import iconGoCar from '../../../assets/icon/go-car.png';
import iconGoBluebird from '../../../assets/icon/go-bluebird.png';
import iconGoSend from '../../../assets/icon/go-send.png';
import iconGoDeals from '../../../assets/icon/go-deals.png';
import iconGoPulsa from '../../../assets/icon/go-pulsa.png';
import iconGoFood from '../../../assets/icon/go-food.png';
import iconGoMore from '../../../assets/icon/go-more.png';
import MainFeature from '../../../components/molecules/MainFeature';

export class HomeMainFeature extends Component {
  render() {
    return (
      <View style={styles.mainFeatureWrapper}>
        <View style={styles.mainFeatureContainer}>
          <MainFeature title="GO-RIDE" img={iconGoRide} />
          <MainFeature title="GO-CAR" img={iconGoCar} />
          <MainFeature title="GO-BLUEBIRD" img={iconGoBluebird} />
          <MainFeature title="GO-SEND" img={iconGoSend} />
          <MainFeature title="GO-DEALS" img={iconGoDeals} />
          <MainFeature title="GO-PULSA" img={iconGoPulsa} />
          <MainFeature title="GO-FOOD" img={iconGoFood} />
          <MainFeature title="MORE" img={iconGoMore} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainFeatureWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  mainFeatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
  },
});

export default HomeMainFeature;
