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
import LoginIconButton from '../login/components/LoginIconButton';
import {AppTheme} from '../../themes/AppTheme';
import FONTS from '../../assets/fonts/Fonts';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const SignUpView = props => {
  const visible = require('../../assets/icons/view.png');
  const hidden = require('../../assets/icons/hide.png');

  const apple = require('../../assets/icons/apple.png');
  const google = require('../../assets/icons/google.png');
  const facebook = require('../../assets/icons/facebook.png');
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [c_password, c_setPassword] = React.useState('');

  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [c_secureTextEntry, c_setSecureTextEntry] = React.useState(true);

  const handleSubmit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
      location: address,
    };

    await axios
      .post(`http://10.30.5.133:5000/api/createuser`, data, {
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
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder="Name"
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        placeholder="Address"
        value={address}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Email"
        value={email}
      />

      <View style={styles.containerPass}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={secureTextEntry}
          id="passWord"
          value={password}
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

      <View style={styles.containerPass}>
        <TextInput
          style={styles.input}
          onChangeText={c_setPassword}
          placeholder="Confirm Password"
          secureTextEntry={c_secureTextEntry}
          id="passWord"
          value={c_password}
        />

        <TouchableOpacity
          onPress={() => c_setSecureTextEntry(!c_secureTextEntry)}
          style={styles.touchableEye}>
          <Image
            source={c_secureTextEntry ? visible : hidden}
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
          //ToastAndroid.show('Submitted!', ToastAndroid.SHORT);
          //setEmail('');
          //setPassword('');
          //c_setPassword('');
          handleSubmit();
        }}>
        <Text style={styles.txtLogin}>Create Account</Text>
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
export default SignUpView;
