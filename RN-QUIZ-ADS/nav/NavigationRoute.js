import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

//Screens
import Main from '../screens/Main';
import Category from '../screens/Category';
import Math_Level1 from '../screens/category_math/Math_Level1';

const NavigationRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="MainScreen" component={Main} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="CategoryScreen" component={Category} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level1Screen" component={Math_Level1} options={{ headerShown:false, gestureEnabled:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRoute