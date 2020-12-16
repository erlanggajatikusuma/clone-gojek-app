import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/GoInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {/* Search Bar */}
          <SearchFeature />
          {/* Gopay */}
          <HomeGoPay />
          {/* Main Feature */}
          <HomeMainFeature />
          {/* Line */}
          <View
            style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}
          />
          {/* News Section */}
          <GoNews
            onPress={() => this.props.navigation.navigate('NewsDetail')}
          />
          {/* Internal Information Section */}
          <GoInfo />
          {/* Go Food Banner Section */}
          <GoBanner />
          {/* Nearby GO Food Section */}
          <ScrollableProducts />
        </ScrollView>
        {/* Navbar */}
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 15,
  },
});

export default Home;
