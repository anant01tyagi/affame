import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {AppTheme} from '../themes/AppTheme';
import FONTS from '../assets/fonts/Fonts';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const cart = require('../assets/icons/cart.png');
  const acc = require('../assets/icons/account.png');
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Image source={acc} style={styles.img}></Image>
      </TouchableOpacity>
      <Text style={styles.txt}>Affamé</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Image source={cart} style={styles.img}></Image>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: AppTheme.Colors.POP,
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 10,
    elevation: 8,
  },
  img: {
    width: 30,
    height: 30,
  },
  txt: {
    fontFamily: FONTS.CAFE,
    color: AppTheme.Colors.PRIMARY,
    fontSize: 20,
  },
});

export default Header;
