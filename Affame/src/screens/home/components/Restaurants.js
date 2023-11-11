import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResItem from './ResItem';
import FONTS from '../../../assets/fonts/Fonts';
import {AppTheme} from '../../../themes/AppTheme';

const img = require('../../../assets/icons/logo.png');
const res = [
  {
    name: 'ZamZam',
    rating: '4.0',
    specialty: 'Chicken',
    address: 'Reningunta, Tirupati',
    image: img,
    menu: [
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
    ],
  },
  {
    name: 'ZamZam',
    rating: '4.0',
    specialty: 'Chicken',
    address: 'Reningunta, Tirupati',
    image: img,
  },
  {
    name: 'ZamZam',
    rating: '4.0',
    specialty: 'Chicken',
    address: 'Reningunta, Tirupati',
    image: img,
  },
  {
    name: 'ZamZam',
    rating: '4.0',
    specialty: 'Chicken',
    address: 'Reningunta, Tirupati',
    image: img,
  },
  {
    name: 'ZamZam',
    rating: '4.0',
    specialty: 'Chicken',
    address: 'Reningunta, Tirupati',
    image: img,
  },
  {
    name: 'ZamZam',
    rating: '4.0',
    specialty: 'Chicken',
    address: 'Reningunta, Tirupati',
    image: img,
  },
];

const Restaurants = ({food}) => {
  console.log(food);
  return (
    <View style={{flex: 1}}>
      <Text style={styles.txtRes}>Explore Food Items</Text>
      <FlatList
        data={food}
        renderItem={({item}) => <ResItem item={item}></ResItem>}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  txtRes: {
    marginHorizontal: 10,
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.POP,
    fontSize: 18,
    marginBottom: 5,
    marginTop: 15,
  },
});
export default Restaurants;
