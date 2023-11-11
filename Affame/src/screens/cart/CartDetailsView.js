import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import PriceBreakup from './components/PriceBreakup';
import {AppTheme} from '../../themes/AppTheme';
import FONTS from '../../assets/fonts/Fonts';
import CartItems from './components/CartItems';

const CartDetailsView = () => {
  const img = require('../../assets/icons/logo.png');

  const menu = [
    {
      name: 'Butter Paneer',
      price: '280',
      image: img,
      quantity: '250',
    },
    {
      name: 'Butter Paneer',
      price: '280',
      image: img,
      quantity: '250',
    },
    {
      name: 'Butter Paneer',
      price: '280',
      image: img,
      quantity: '250',
    },
    {
      name: 'Butter Paneer',
      price: '280',
      image: img,
      quantity: '250',
    },
  ];
  return (
    <View
      style={{
        backgroundColor: AppTheme.Colors.WHITE,
        height: '100%',
        position: 'relative',
      }}>
      <View style={{padding: 20, height: '62%'}}>
        <Text style={styles.txtCart}>Cart Items</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={menu}
          renderItem={({item}) => (
            <CartItems item={item}></CartItems>
          )}></FlatList>
      </View>
      <PriceBreakup></PriceBreakup>

      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.text}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: AppTheme.Colors.POP,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: '8%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  text: {
    fontSize: 18,
    color: AppTheme.Colors.BEIGE,
    fontFamily: FONTS.CAFE_BOLD,
  },
  txtCart: {
    fontSize: 20,
    color: AppTheme.Colors.BLACK,
    fontFamily: FONTS.CAFE_BOLD,
    fontWeight: '600',
    //textAlign: 'center',
  },
});
export default CartDetailsView;
