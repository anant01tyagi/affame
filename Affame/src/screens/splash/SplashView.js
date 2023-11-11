import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import logo from '../../assets/icons/logo.png';
import {AppTheme} from '../../themes/AppTheme';
import FONTS from '../../assets/fonts/Fonts';
const SplashView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtWelcome}>Welcome to affamé</Text>
      <Text style={styles.txtSub}>affamé? Food at your door!</Text>

      <Image style={styles.imgLogo} source={logo}></Image>

      <View style={styles.touchableContainer}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.txtlogin}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.txtlogin}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: AppTheme.Colors.TERTIARY,
    alignItems: 'center',
    padding: 10,
    //justifyContent: 'flex-start',
  },
  imgLogo: {
    width: '60%',
    height: '45%',
    resizeMode: 'contain',
  },
  touchableContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  touchable: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: AppTheme.Colors.POP,
    padding: 15,
    width: '35%',
    alignItems: 'center',
    backgroundColor: AppTheme.Colors.PRIMARY,
    shadowColor: AppTheme.Colors.BLACK,
    shadowRadius: 10,
    shadowOffset: 4,
    elevation: 6,
  },
  txtWelcome: {
    fontSize: 36,
    color: AppTheme.Colors.PRIMARY,
    textAlign: 'center',
    fontFamily: FONTS.CAFE_LIGHT,
    width: '70%',
  },
  txtlogin: {
    color: AppTheme.Colors.POP,
    fontFamily: FONTS.CAFE_BOLD,
    fontWeight: '600',
    fontSize: 18,
  },
  txtSub: {
    //marginVertical: 5,
    fontSize: 15,
    color: AppTheme.Colors.PRIMARY,
    fontFamily: FONTS.CAFE_LIGHT_ITALIC,
    marginTop: 15,
  },
});

export default SplashView;
