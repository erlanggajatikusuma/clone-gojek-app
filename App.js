import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import GopayFeature from './src/components/molecules/GopayFeature';
import iconHome from './src/assets/icon/home-active.png';
import iconOrder from './src/assets/icon/order.png';
import iconHelp from './src/assets/icon/help.png';
import iconInbox from './src/assets/icon/inbox.png';
import iconAccount from './src/assets/icon/account.png';
import iconSearch from './src/assets/icon/search.png';
import iconPromo from './src/assets/icon/promo.png';
import gopay from './src/assets/icon/gopay.png';
import iconPay from './src/assets/icon/pay.png';
import iconNearby from './src/assets/icon/nearby.png';
import iconTopUp from './src/assets/icon/topup.png';
import iconMore from './src/assets/icon/more.png';
import iconGoRide from './src/assets/icon/go-ride.png';
import iconGoCar from './src/assets/icon/go-car.png';
import iconGoBluebird from './src/assets/icon/go-bluebird.png';
import iconGoSend from './src/assets/icon/go-send.png';
import iconGoDeals from './src/assets/icon/go-deals.png';
import iconGoPulsa from './src/assets/icon/go-pulsa.png';
import iconGoFood from './src/assets/icon/go-food.png';
import iconGoMore from './src/assets/icon/go-more.png';
import MainFeature from './src/components/molecules/MainFeature';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Search Bar */}
        <View style={{marginHorizontal: 17, flexDirection: 'row'}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="What do you want to eat ?"
              style={{
                paddingLeft: 45,
                paddingRight: 20,
                borderWidth: 1,
                borderColor: '#E8E8E8',
                borderRadius: 25,
                height: 40,
                fontSize: 13,
                backgroundColor: 'white',
                marginRight: 18,
              }}
            />
            <Image
              source={iconSearch}
              style={{position: 'absolute', top: 5, left: 12}}
            />
          </View>
          <View
            style={{
              width: 35,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={iconPromo} />
          </View>
        </View>
        {/* Gopay */}
        <View style={{marginHorizontal: 17, marginTop: 18}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#2C5FBB',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              padding: 14,
            }}>
            <Image source={gopay} />
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
              Rp 50.000
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2F65BD',
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}>
            <GopayFeature title="Pay" img={iconPay} />
            <GopayFeature title="Nearby" img={iconNearby} />
            <GopayFeature title="Top Up" img={iconTopUp} />
            <GopayFeature title="More" img={iconMore} />
          </View>
        </View>
        {/* Main Feature */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 18,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              flexWrap: 'wrap',
            }}>
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
        {/* Line */}
        <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}} />
        {/* News Section */}
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('./src/assets/dummy/sepak-bola.jpg')}
              style={{height: 170, width: '100%', borderRadius: 6}}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'black',
                opacity: 0.2,
                borderRadius: 6,
              }}
            />
            <View
              style={{
                height: 15,
                width: 60,
                position: 'absolute',
                top: 16,
                left: 16,
              }}>
              <Image
                source={require('./src/assets/logo/white.png')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'contain',
                  flex: 1,
                }}
              />
            </View>
          </View>
          <View
            style={{
              paddingTop: 16,
              paddingBottom: 20,
              borderBottomColor: '#E8E9ED',
              borderBottomWidth: 1,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>
              GO-NEWS
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'normal',
                color: '#7A7A7A',
                marginBottom: 11,
              }}>
              Dimas Drajat selamatkan penalti, Timnas U-23 kalah
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#61A756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'flex-end',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                READ
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Internal Information Section */}
        <View style={{padding: 16, paddingBottom: 0}}>
          <View style={{height: 15, width: 60, marginLeft: -4}}>
            <Image
              source={require('./src/assets/logo/gojek.png')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>
          <Text
            style={{
              marginTop: 15,
              marginBottom: 20,
              fontSize: 17,
              fontWeight: 'bold',
              color: '#1C1C1C',
            }}>
            Complete Your Profile
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 16}}>
            <View>
              <Image
                source={require('./src/assets/dummy/facebook-connect.png')}
              />
            </View>
            <View style={{marginLeft: 16, flex: 1}}>
              <Text
                style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>
                Connect with Facebook
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'normal',
                  color: '#4A4A4A',
                  width: '70%',
                }}>
                Login faster without verification code
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#61A756',
              paddingHorizontal: 12,
              paddingVertical: 11,
              alignSelf: 'flex-end',
              borderRadius: 4,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
              CONNECT
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderBottomColor: '#E8E9ED',
              borderBottomWidth: 1,
              marginTop: 16,
            }}
          />
        </View>
        {/* Go Food Banner Section */}
        <View style={{padding: 16}}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('./src/assets/dummy/food-banner.jpg')}
              style={{height: 170, width: '100%', borderRadius: 6}}
            />
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: 'black',
                opacity: 0.15,
                borderRadius: 6,
              }}
            />
            <View
              style={{
                height: 15,
                width: 60,
                position: 'absolute',
                top: 16,
                left: 16,
              }}>
              <Image
                source={require('./src/assets/logo/white.png')}
                style={{
                  width: undefined,
                  height: undefined,
                  resizeMode: 'contain',
                  flex: 1,
                }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingBottom: 16,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: 8,
                  }}>
                  Free GO-FOOD Voucher
                </Text>
                <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
                  Quick, before they run out!
                </Text>
              </View>
              <View style={{flex: 1, paddingLeft: 12}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#61A756',
                    paddingHorizontal: 12,
                    paddingVertical: 11,
                    alignSelf: 'stretch',
                    borderRadius: 4,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    GET VOUCHER
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: '#E8E9ED',
              borderBottomWidth: 1,
              marginTop: 16,
            }}
          />
        </View>
        {/* Nearby GO Food Section */}
        <View>
          <View style={{height: 15, width: 60, marginLeft: 16}}>
            <Image
              source={require('./src/assets/logo/go-food.png')}
              style={{
                width: undefined,
                height: undefined,
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
              paddingHorizontal: 16,
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
              Nearby Restaurant
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
              See All
            </Text>
          </View>
          <ScrollView
            horizontal
            style={{flexDirection: 'row', paddingLeft: 16, marginBottom: 30}}>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image
                  source={require('./src/assets/dummy/go-food-kfc.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    borderRadius: 4,
                    flex: 1,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 12,
                }}>
                KFC Aeon Mall
              </Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image
                  source={require('./src/assets/dummy/go-food-gm.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    borderRadius: 4,
                    flex: 1,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 12,
                }}>
                Bakmi GM
              </Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image
                  source={require('./src/assets/dummy/go-food-orins.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    borderRadius: 4,
                    flex: 1,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 12,
                }}>
                Martabak Orins
              </Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image
                  source={require('./src/assets/dummy/go-food-banka.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    borderRadius: 4,
                    flex: 1,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 12,
                }}>
                Martabak Banka
              </Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{width: 150, height: 150, borderRadius: 10}}>
                <Image
                  source={require('./src/assets/dummy/go-food-pak-boss.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    borderRadius: 4,
                    flex: 1,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#1C1C1C',
                  marginTop: 12,
                }}>
                Ayam Bakar Pak Boss
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      {/* <View
        style={{
          borderBottomWidth: 1,
          marginTop: 16,
          marginHorizontal: 16,
          marginBottom: 20,
        }}
      /> */}
      <View style={styles.bottom}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={iconHome} />
          <Text style={{fontSize: 10, marginTop: 4, color: '#43AB4A'}}>
            Home
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={iconOrder} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Order
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={iconHelp} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={iconInbox} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{width: 26, height: 26}} source={iconAccount} />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
  },
  bottom: {
    height: 54,
    flexDirection: 'row',
  },
});

export default App;
