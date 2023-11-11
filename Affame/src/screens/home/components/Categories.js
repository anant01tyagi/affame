import React from 'react';
import {View, StyleSheet, Text, TextInput, Image, FlatList} from 'react-native';
import Item from './Item';
import FONTS from '../../../assets/fonts/Fonts';
import {AppTheme} from '../../../themes/AppTheme';

const picture = require('../../../assets/icons/logo.png');
const categories = [
  {
    name: 'Burgers',
    image: picture,
  },
  {
    name: 'Burgers',
    image: picture,
  },
  {
    name: 'Burgers',
    image: picture,
  },
  {
    name: 'Burgers',
    image: picture,
  },
  {
    name: 'Burgers',
    image: picture,
  },
];

const Categories = () => {
  return (
    <View>
      <Text style={styles.txt}>Popular Categories</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={categories}
        renderItem={({item}) => <Item item={item}></Item>}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontFamily: FONTS.CAFE_BOLD,
    fontSize: 18,
    //textAlign: 'center',
    color: AppTheme.Colors.POP,
    marginVertical: 10,
    marginHorizontal: 8,
  },
});
export default Categories;
