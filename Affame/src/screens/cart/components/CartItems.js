import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppTheme} from '../../../themes/AppTheme';
import FONTS from '../../../assets/fonts/Fonts';

const CartItems = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTxt}>
        <Text style={styles.txtName}>{item.name}</Text>
        <Text style={styles.txtQuantity}>{item.quantity}g</Text>
        <Text style={styles.txtPrice}>Rs {item.price}</Text>
      </View>
      <View style={styles.containerImgBtn}>
        <Image style={styles.img} source={item.image}></Image>
        <TouchableOpacity style={styles.touchableAdd}>
          <Text style={styles.txtAdd}>REMOVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: AppTheme.Colors.POP,
    paddingVertical: 10,
  },
  img: {
    width: '90%',
    height: 70,
    resizeMode: 'contain',
  },
  containerTxt: {
    width: '60%',
    justifyContent: 'center',
  },
  containerImgBtn: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtName: {
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.TERTIARY,
    fontSize: 20,
    marginVertical: 5,
  },
  txtQuantity: {
    fontFamily: FONTS.CAFE,
    color: AppTheme.Colors.TERTIARY,
    fontSize: 15,
  },
  txtPrice: {
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.BLACK,
    fontSize: 16,
    marginVertical: 5,
  },
  touchableAdd: {
    backgroundColor: AppTheme.Colors.SECONDARY,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    width: '70%',
    alignItems: 'center',
  },
  txtAdd: {
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.BEIGE,
    fontSize: 12,
  },
});
export default CartItems;
