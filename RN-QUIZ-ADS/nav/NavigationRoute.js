import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

//Screens
import Category from '../screens/category/Category';
import Main from '../screens/Main';
import HowToPlay from '../screens/HowToPlay';

const NavigationRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="MainScreen" component={Main} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="CategoryScreen" component={Category} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="HowToPlayScreen" component={HowToPlay} options={{ headerShown:false, gestureEnabled:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRoute