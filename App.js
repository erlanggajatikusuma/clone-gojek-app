import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/GoInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

const App = () => {
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
        <View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}} />
        {/* News Section */}
        <GoNews />
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
});

export default App;
