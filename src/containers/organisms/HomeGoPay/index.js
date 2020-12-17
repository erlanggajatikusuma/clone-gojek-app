import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {withNavigation} from 'react-navigation';
import gopay from '../../../assets/icon/gopay.png';
import iconPay from '../../../assets/icon/pay.png';
import iconNearby from '../../../assets/icon/nearby.png';
import iconTopUp from '../../../assets/icon/topup.png';
import iconMore from '../../../assets/icon/more.png';
import GopayFeature from '../../../components/molecules/GopayFeature';

class HomeGoPay extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 17, marginTop: 18}}>
        <View style={styles.goPayImgWrapper}>
          <Image source={gopay} />
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
            Rp 50.000
          </Text>
        </View>
        <View style={styles.goPayFeatureWrapper}>
          <GopayFeature
            onPress={() => this.props.navigation.navigate('ScanQRCode')}
            title="Pay"
            img={iconPay}
          />
          <GopayFeature title="Nearby" img={iconNearby} />
          <GopayFeature title="Top Up" img={iconTopUp} />
          <GopayFeature title="More" img={iconMore} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  goPayImgWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2C5FBB',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14,
  },
  goPayFeatureWrapper: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: '#2F65BD',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default withNavigation(HomeGoPay);
