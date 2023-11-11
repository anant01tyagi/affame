//@ts-nocheck
import React from 'react';
import SplashView from './src/screens/splash/SplashView';
import {View} from 'react-native';
import LoginView from './src/screens/login/LoginView';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => {
  return <RootNavigation></RootNavigation>;
};

export default App;
