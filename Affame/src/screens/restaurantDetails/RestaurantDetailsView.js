import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {AppTheme} from '../../themes/AppTheme';
import FONTS from '../../assets/fonts/Fonts';
import MenuItem from './components/MenuItem';

const RestaurantDetailsView = ({route}) => {
  const details = route.params.item;
  const img = require('../../assets/icons/logo.png');
  const dataArray = Object.entries(details.options[0]);
  console.log('data ', dataArray);
  return (
    <View style={styles.container}>
      <Image source={{uri: details.img}} style={styles.imgCover}></Image>
      <View style={styles.containerDetails}>
        <Text style={styles.txtName}>{details.name}</Text>
        <Text style={styles.txtRating}>{details.rating}</Text>
        <Text style={styles.txtSpecialty}>{details.CategoryName}</Text>
        <Text style={styles.txtAddress}>{details.description}</Text>
        <Text style={styles.txtMenu}>- OPTIONS -</Text>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataArray}
          keyExtractor={item => item[0]}
          renderItem={({item}) => <MenuItem item={item}></MenuItem>}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: AppTheme.Colors.TERTIARY,
  },
  imgCover: {
    height: '35%',
    width: '100%',
    resizeMode: 'contain',
  },
  containerDetails: {
    backgroundColor: AppTheme.Colors.WHITE,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    borderWidth: 1,
    borderColor: AppTheme.Colors.POP,
    marginTop: -15,
  },
  txtName: {
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.SECONDARY,
    fontSize: 20,
  },
  txtRating: {
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.BLACK,
    fontSize: 18,
  },
  txtSpecialty: {
    fontFamily: FONTS.CAFE,
    color: AppTheme.Colors.SECONDARY,
    fontSize: 16,
  },
  txtAddress: {
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.SECONDARY,
    fontSize: 16,
    marginVertical: 10,
  },
  txtMenu: {
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.BLACK,
    fontSize: 16,
    width: '100%',
    textAlign: 'center',
    marginVertical: 20,
    letterSpacing: 8,
  },
});
export default RestaurantDetailsView;
