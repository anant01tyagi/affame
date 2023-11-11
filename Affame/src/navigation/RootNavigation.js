import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import SplashView from '../screens/splash/SplashView';
import LoginView from '../screens/login/LoginView';
import SignUpView from '../screens/signUp/SignUpView';
import HomeView from '../screens/home/HomeView';
import Header from '../components/Header';
import RestaurantDetails from '../screens/restaurantDetails/RestaurantDetailsView';
import RestaurantDetailsView from '../screens/restaurantDetails/RestaurantDetailsView';
import CartDetailsView from '../screens/cart/CartDetailsView';

const RootStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="SplashScreen">
        <AuthStack.Screen
          name="SplashScreen"
          component={SplashView}
          options={{
            headerShown: false,
          }}></AuthStack.Screen>
        <AuthStack.Screen
          name="LogIn"
          component={LoginView}
          options={{
            headerShown: false,
          }}></AuthStack.Screen>
        <AuthStack.Screen
          name="SignUp"
          component={SignUpView}
          options={{
            headerShown: false,
          }}></AuthStack.Screen>
        <AuthStack.Screen
          name="Home"
          component={HomeView}
          options={{
            headerShown: true,
            header: Header,
          }}></AuthStack.Screen>
        <AuthStack.Screen
          name="RestaurantDetails"
          component={RestaurantDetailsView}
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            //header: Header,
          }}></AuthStack.Screen>
        <AuthStack.Screen
          name="Cart"
          component={CartDetailsView}
          options={{
            headerShown: true,
            header: Header,
          }}></AuthStack.Screen>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
