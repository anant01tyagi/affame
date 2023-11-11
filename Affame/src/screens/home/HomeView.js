import React from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import FONTS from '../../assets/fonts/Fonts';
import {AppTheme} from '../../themes/AppTheme';
import SearchBar from '../../components/SearchBar';
import Categories from './components/Categories';
import Restaurants from './components/Restaurants';
const HomeView = () => {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Categories></Categories>
      <Restaurants></Restaurants>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppTheme.Colors.PRIMARY,
    width: '100%',
    height: '100%',
  },
  containerSearch: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    alignContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    backgroundColor: AppTheme.Colors.WHITE,
    elevation: 6,
    marginVertical: 20,
    borderColor: AppTheme.Colors.SECONDARY,
  },
  imgSearch: {
    width: '10%',
    height: 20,
    resizeMode: 'contain',
  },
  txtInputSearch: {
    width: '90%',
    fontFamily: FONTS.CAFE,
    color: AppTheme.Colors.SECONDARY,
  },
});
export default HomeView;
