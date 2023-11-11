import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';
import FONTS from '../../assets/fonts/Fonts';
import {AppTheme} from '../../themes/AppTheme';
import SearchBar from '../../components/SearchBar';
import Categories from './components/Categories';
import Restaurants from './components/Restaurants';
import axios from 'axios';

const HomeView = () => {
  //API call to get all food items
  const getFoodItems = async () => {
    await axios
      .post(`http://10.30.5.133:5000/api/foodData`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('Post request successful:');
        setFood(response.data[0]);
      })
      .catch(error => {
        console.error('Error making post request:', error);
      });
  };

  //API call to get all food categories
  const getFoodCategories = async () => {
    await axios
      .post(`http://10.30.5.133:5000/api/foodCategories`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('Post request successful:');
        setCategories(response.data[0]);
      })
      .catch(error => {
        console.error('Error making post request:', error);
      });
  };

  const [food, setFood] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getFoodItems();
    getFoodCategories();
  }, []);
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Categories categories={categories}></Categories>
      <Restaurants food={food}></Restaurants>
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
