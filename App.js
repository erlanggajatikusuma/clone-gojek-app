import React from 'react';
import {View, StyleSheet, Text, Image, TextInput} from 'react-native';
import iconHome from './src/assets/icon/home-active.png';
import iconOrder from './src/assets/icon/order.png';
import iconHelp from './src/assets/icon/help.png';
import iconInbox from './src/assets/icon/inbox.png';
import iconAccount from './src/assets/icon/account.png';
import iconSearch from './src/assets/icon/search.png';
import iconPromo from './src/assets/icon/promo.png';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.welcome}>Clone Gojek App</Text> */}
      <View style={styles.content}>
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
      </View>
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
