// @ts-nocheck
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
  ScrollView,
} from 'react-native';
import LoginIconButton from './components/LoginIconButton';
import {AppTheme} from '../../themes/AppTheme';
import FONTS from '../../assets/fonts/Fonts';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const LoginView = props => {
  const visible = require('../../assets/icons/view.png');
  const hidden = require('../../assets/icons/hide.png');

  const apple = require('../../assets/icons/apple.png');
  const google = require('../../assets/icons/google.png');
  const facebook = require('../../assets/icons/facebook.png');
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };

    const res = await axios
      .post(`http://10.30.5.133:5000/api/loginuser`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        console.log('Post request successful:', response.data);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error('Error making post request:', error);
        // ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <View style={styles.containerPass}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          id="passWord"
        />

        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          style={styles.touchableEye}>
          <Image
            source={secureTextEntry ? visible : hidden}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => {
          console.log('email: ', email);
          console.log('password: ', password);
          handleSubmit();
          // if (res.code == '200') {
          //   props.navigation.navigate('Home');
          // } else {
          //   ToastAndroid.show(res.error, ToastAndroid.SHORT);
          // }
          // ;
          // setEmail('');
          // setPassword('');
          //;
        }}>
        <Text style={styles.txtLogin}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.txtOR}>OR</Text>
      <View
        style={{
          width: '85%',
          marginTop: 40,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <LoginIconButton source={apple} text={'Apple'}></LoginIconButton>
        <LoginIconButton source={google} text={'Google'}></LoginIconButton>
        <LoginIconButton source={facebook} text={'Facebook'}></LoginIconButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: AppTheme.Colors.PRIMARY,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: AppTheme.Colors.POP,
    fontSize: 30,
    marginBottom: 20,
    alignSelf: 'center',
    width: '70%',
    fontFamily: FONTS.CAFE_BOLD,
    textAlign: 'center',
  },
  input: {
    backgroundColor: AppTheme.Colors.WHITE,
    width: '85%',
    marginTop: 20,
    alignItems: 'center',
    paddingLeft: 15,
    borderRadius: 10,
    elevation: 6,
    fontFamily: FONTS.CAFE,
  },
  touchable: {
    backgroundColor: AppTheme.Colors.SECONDARY,
    width: '85%',
    marginTop: 20,
    alignItems: 'center',
    //height: 50,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    shadowRadius: 5,
    shadowOpacity: 0.8,
    elevation: 6,
  },
  touchableEye: {
    position: 'absolute',
    top: 35,
    left: 320,
    bottom: 10,
    right: 10,
    opacity: 0.5,
    zIndex: 6,
  },
  containerPass: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  txtOR: {
    //marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
    color: AppTheme.Colors.TERTIARY,
    fontFamily: FONTS.CAFE_LIGHT,
  },
  txtLogin: {
    color: AppTheme.Colors.PRIMARY,
    fontFamily: FONTS.CAFE_BOLD,
  },
});
export default LoginView;
