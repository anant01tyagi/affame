import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import FONTS from '../../../assets/fonts/Fonts';
import {AppTheme} from '../../../themes/AppTheme';

const PriceBreakup = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          <Text style={styles.keyText}>Sub Total</Text>
          <Text style={styles.subTotalValue}>Rs 280</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.keyText}>Products Discount</Text>
          <Text style={styles.discountValue}>-Rs 30</Text>
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.keyText}>Delivery Charges</Text>
          <Text style={styles.discountValue}>FREE</Text>
        </View>

        <View style={styles.totalContainer}>
          <Text style={styles.totalKey}>Total</Text>
          <Text style={styles.totalValue}>250</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
    paddingHorizontal: 18,
  },
  container: {
    backgroundColor: AppTheme.Colors.PRIMARY,
    paddingTop: 15,
    marginVertical: 18,
  },
  keyText: {
    fontFamily: FONTS.CAFE,
    fontSize: 13,
    color: AppTheme.Colors.SECONDARY,
  },
  subTotalValue: {
    fontFamily: FONTS.CAFE,
    fontSize: 13,
    color: AppTheme.Colors.SECONDARY,
  },
  discountValue: {
    fontFamily: FONTS.CAFE,
    fontSize: 13,
    color: AppTheme.Colors.POP,
  },
  totalKey: {
    fontFamily: FONTS.CAFE_BOLD,
    fontSize: 13,
    color: AppTheme.Colors.POP,
  },
  totalValue: {
    fontFamily: FONTS.CAFE_BOLD,
    fontSize: 13,
    color: AppTheme.Colors.POP,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 15,
    paddingHorizontal: 18,
    borderTopWidth: 1,
    borderColor: AppTheme.Colors.SECONDARY,
    height: 50,
  },
});

export default PriceBreakup;
