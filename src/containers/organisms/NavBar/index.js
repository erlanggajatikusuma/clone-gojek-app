import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import NavBarIcon from '../../../components/molecules/NavBarIcon';
import iconHome from '../../../assets/icon/home-active.png';
import iconOrder from '../../../assets/icon/order.png';
import iconHelp from '../../../assets/icon/help.png';
import iconInbox from '../../../assets/icon/inbox.png';
import iconAccount from '../../../assets/icon/account.png';

export class NavBar extends Component {
  render() {
    return (
      <View style={styles.bottom}>
        <NavBarIcon title="Home" img={iconHome} active />
        <NavBarIcon title="Orders" img={iconOrder} />
        <NavBarIcon title="Help" img={iconHelp} />
        <NavBarIcon title="Inbox" img={iconInbox} />
        <NavBarIcon title="Account" img={iconAccount} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    height: 54,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
});

export default NavBar;
