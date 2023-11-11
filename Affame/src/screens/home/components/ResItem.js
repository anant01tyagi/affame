import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FONTS from '../../../assets/fonts/Fonts';
import {AppTheme} from '../../../themes/AppTheme';
import {useNavigation} from '@react-navigation/native';

const ResItem = props => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('RestaurantDetails', {item: props.item})
      }>
      <View style={styles.img}>
        <Image
          style={{width: '100%', resizeMode: 'contain', height: '100%'}}
          source={{uri: props.item.img}}></Image>
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.txtName}>{props.item.name}</Text>
        {/* <Text style={styles.txtRating}>{props.item.rating}</Text> */}
        <Text style={styles.txtSpecialty}>{props.item.CategoryName}</Text>
        <Text style={styles.txtaddress}>
          {props.item.description.length > 60
            ? props.item.description.slice(0, 60) + '...'
            : props.item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    padding: 24,
    //borderWidth: 1,
    margin: 8,
    borderRadius: 15,
    backgroundColor: AppTheme.Colors.WHITE,
    borderColor: AppTheme.Colors.SECONDARY,
    elevation: 4,
    //width: '80%',
    flex: 1,
  },
  img: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    //height: 40,
    //flex: 0.5,
  },
  containerDetails: {
    //width: '65%',
    marginLeft: 10,
    flex: 0.7,
  },
  txtName: {
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.SECONDARY,
    fontSize: 18,
  },
  txtRating: {
    fontFamily: FONTS.CAFE_BOLD,
    color: AppTheme.Colors.POP,
    fontSize: 15,
  },
  txtSpecialty: {
    fontFamily: FONTS.CAFE,
    color: AppTheme.Colors.TERTIARY,
    fontSize: 16,
  },
  txtaddress: {
    fontFamily: FONTS.CAFE,
    color: AppTheme.Colors.TERTIARY,
    fontSize: 13,
    marginTop: 5,
  },
});
export default ResItem;
