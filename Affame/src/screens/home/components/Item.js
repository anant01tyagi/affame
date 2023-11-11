import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AppTheme} from '../../../themes/AppTheme';
import FONTS from '../../../assets/fonts/Fonts';
const Item = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Image style={styles.itemImg} source={item.image}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    elevation: 6,
    backgroundColor: AppTheme.Colors.WHITE,
    margin: 8,
    alignItems: 'center',
  },
  itemImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  itemName: {
    marginRight: 8,
    fontFamily: FONTS.CAFE_BOLD,
    fontSize: 15,
    textAlign: 'center',
    color: AppTheme.Colors.SECONDARY,
  },
});
export default Item;
