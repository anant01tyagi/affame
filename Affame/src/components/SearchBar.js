import React from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import {AppTheme} from '../themes/AppTheme';
import FONTS from '../assets/fonts/Fonts';
const SearchBar = () => {
  const searchImg = require('../assets/icons/search_icon.png');
  return (
    <View style={styles.containerSearch}>
      <Image source={searchImg} style={styles.imgSearch}></Image>
      <TextInput
        style={styles.txtInputSearch}
        placeholder="What would you like to have?"></TextInput>
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
    borderRadius: 18,
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
export default SearchBar;
