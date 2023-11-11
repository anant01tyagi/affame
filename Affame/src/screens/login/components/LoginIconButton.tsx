import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {AppTheme} from '../../../themes/AppTheme';

const LoginIconButton = (props: {source: ImageSourcePropType; text: any}) => {
  const visible = require('../../../assets/icons/google.png');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Image source={props.source} style={{width: 25, height: 25}}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    margin: 10,
    borderColor: AppTheme.Colors.SECONDARY,
    borderWidth: 0.5,
    elevation: 6,
    backgroundColor: AppTheme.Colors.WHITE,
  },
  text: {
    fontWeight: 'bold',
    flex: 0.8,
    textAlign: 'center',
  },
  container: {
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default LoginIconButton;
