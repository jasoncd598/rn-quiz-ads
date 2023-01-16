import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

//Screens
import Main from '../screens/Main';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import Category from '../screens/Category';

import Math_Level1 from '../screens/category_math/Math_Level1';
import Math_Level2 from '../screens/category_math/Math_Level2';
import Math_Level3 from '../screens/category_math/Math_Level3';
import Math_Level5 from '../screens/category_math/Math_Level5';
import Math_Level4 from '../screens/category_math/Math_Level4';
import Math_Level6 from '../screens/category_math/Math_Level6';
import Math_Level7 from '../screens/category_math/Math_Level7';
import Math_Level8 from '../screens/category_math/Math_Level8';
import Math_Level9 from '../screens/category_math/Math_Level9';
import Math_Level10 from '../screens/category_math/Math_Level10';
import Math_Level11 from '../screens/category_math/Math_Level11';
import Math_Level12 from '../screens/category_math/Math_Level12';
import Math_Level13 from '../screens/category_math/Math_Level13';
import Math_Level14 from '../screens/category_math/Math_Level14';
import Math_Level15 from '../screens/category_math/Math_Level15';
import Math_Level16 from '../screens/category_math/Math_Level16';
import Math_Level17 from '../screens/category_math/Math_Level17';
import Math_Level18 from '../screens/category_math/Math_Level18';
import Math_Level19 from '../screens/category_math/Math_Level19';
import Math_Level20 from '../screens/category_math/Math_Level20';
import Math_Level21 from '../screens/category_math/Math_Level21';
import Math_Level22 from '../screens/category_math/Math_Level22';
import Math_Level23 from '../screens/category_math/Math_Level23';
import Math_Level24 from '../screens/category_math/Math_Level24';
import Math_Level25 from '../screens/category_math/Math_Level25';
import FinishMath from '../screens/category_math/FinishMath';

import Science_Level1 from '../screens/category_science/Science_Level1';
import Science_Level2 from '../screens/category_science/Science_Level2';
import Science_Level3 from '../screens/category_science/Science_Level3';
import Science_Level5 from '../screens/category_science/Science_Level5';
import Science_Level4 from '../screens/category_science/Science_Level4';
import Science_Level6 from '../screens/category_science/Science_Level6';
import Science_Level7 from '../screens/category_science/Science_Level7';
import Science_Level8 from '../screens/category_science/Science_Level8';
import Science_Level9 from '../screens/category_science/Science_Level9';
import Science_Level10 from '../screens/category_science/Science_Level10';
import Science_Level11 from '../screens/category_science/Science_Level11';
import Science_Level12 from '../screens/category_science/Science_Level12';
import Science_Level13 from '../screens/category_science/Science_Level13';
import Science_Level14 from '../screens/category_science/Science_Level14';
import Science_Level15 from '../screens/category_science/Science_Level15';
import Science_Level16 from '../screens/category_science/Science_Level16';
import Science_Level17 from '../screens/category_science/Science_Level17';
import Science_Level18 from '../screens/category_science/Science_Level18';
import Science_Level19 from '../screens/category_science/Science_Level19';
import Science_Level20 from '../screens/category_science/Science_Level20';
import Science_Level21 from '../screens/category_science/Science_Level21';
import Science_Level22 from '../screens/category_science/Science_Level22';
import Science_Level23 from '../screens/category_science/Science_Level23';
import Science_Level24 from '../screens/category_science/Science_Level24';
import Science_Level25 from '../screens/category_science/Science_Level25';
import FinishScience from '../screens/category_science/FinishScience';

import Technology_Level1 from '../screens/category_technology/Technology_Level1';
import Technology_Level2 from '../screens/category_technology/Technology_Level2';
import Technology_Level3 from '../screens/category_technology/Technology_Level3';
import Technology_Level5 from '../screens/category_technology/Technology_Level5';
import Technology_Level4 from '../screens/category_technology/Technology_Level4';
import Technology_Level6 from '../screens/category_technology/Technology_Level6';
import Technology_Level7 from '../screens/category_technology/Technology_Level7';
import Technology_Level8 from '../screens/category_technology/Technology_Level8';
import Technology_Level9 from '../screens/category_technology/Technology_Level9';
import Technology_Level10 from '../screens/category_technology/Technology_Level10';
import Technology_Level11 from '../screens/category_technology/Technology_Level11';
import Technology_Level12 from '../screens/category_technology/Technology_Level12';
import Technology_Level13 from '../screens/category_technology/Technology_Level13';
import Technology_Level14 from '../screens/category_technology/Technology_Level14';
import Technology_Level15 from '../screens/category_technology/Technology_Level15';
import Technology_Level16 from '../screens/category_technology/Technology_Level16';
import Technology_Level17 from '../screens/category_technology/Technology_Level17';
import Technology_Level18 from '../screens/category_technology/Technology_Level18';
import Technology_Level19 from '../screens/category_technology/Technology_Level19';
import Technology_Level20 from '../screens/category_technology/Technology_Level20';
import Technology_Level21 from '../screens/category_technology/Technology_Level21';
import Technology_Level22 from '../screens/category_technology/Technology_Level22';
import Technology_Level23 from '../screens/category_technology/Technology_Level23';
import Technology_Level24 from '../screens/category_technology/Technology_Level24';
import Technology_Level25 from '../screens/category_technology/Technology_Level25';
import FinishTechnology from '../screens/category_technology/FinishTechnology';

const NavigationRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="MainScreen" component={Main} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="CategoryScreen" component={Category} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicy} options={{ headerShown:false, gestureEnabled:false }}/>

        {/* MATHEMATICS ROUTES */}
        <Stack.Screen name="Math_Level1Screen" component={Math_Level1} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level2Screen" component={Math_Level2} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level3Screen" component={Math_Level3} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level4Screen" component={Math_Level4} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level5Screen" component={Math_Level5} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level6Screen" component={Math_Level6} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level7Screen" component={Math_Level7} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level8Screen" component={Math_Level8} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level9Screen" component={Math_Level9} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level10Screen" component={Math_Level10} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level11Screen" component={Math_Level11} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level12Screen" component={Math_Level12} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level13Screen" component={Math_Level13} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level14Screen" component={Math_Level14} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level15Screen" component={Math_Level15} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level16Screen" component={Math_Level16} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level17Screen" component={Math_Level17} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level18Screen" component={Math_Level18} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level19Screen" component={Math_Level19} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level20Screen" component={Math_Level20} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level21Screen" component={Math_Level21} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level22Screen" component={Math_Level22} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level23Screen" component={Math_Level23} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level24Screen" component={Math_Level24} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Math_Level25Screen" component={Math_Level25} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="FinishMath" component={FinishMath} options={{ headerShown:false, gestureEnabled:false }}/>

        {/* // SCIENCE ROUTES */}
        <Stack.Screen name="Science_Level1Screen" component={Science_Level1} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level2Screen" component={Science_Level2} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level3Screen" component={Science_Level3} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level4Screen" component={Science_Level4} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level5Screen" component={Science_Level5} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level6Screen" component={Science_Level6} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level7Screen" component={Science_Level7} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level8Screen" component={Science_Level8} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level9Screen" component={Science_Level9} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level10Screen" component={Science_Level10} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level11Screen" component={Science_Level11} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level12Screen" component={Science_Level12} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level13Screen" component={Science_Level13} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level14Screen" component={Science_Level14} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level15Screen" component={Science_Level15} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level16Screen" component={Science_Level16} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level17Screen" component={Science_Level17} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level18Screen" component={Science_Level18} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level19Screen" component={Science_Level19} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level20Screen" component={Science_Level20} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level21Screen" component={Science_Level21} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level22Screen" component={Science_Level22} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level23Screen" component={Science_Level23} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level24Screen" component={Science_Level24} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Science_Level25Screen" component={Science_Level25} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="FinishScience" component={FinishScience} options={{ headerShown:false, gestureEnabled:false }}/>

        {/* // TECHNOLOGY ROUTES */}
        <Stack.Screen name="Technology_Level1Screen" component={Technology_Level1} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level2Screen" component={Technology_Level2} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level3Screen" component={Technology_Level3} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level4Screen" component={Technology_Level4} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level5Screen" component={Technology_Level5} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level6Screen" component={Technology_Level6} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level7Screen" component={Technology_Level7} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level8Screen" component={Technology_Level8} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level9Screen" component={Technology_Level9} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level10Screen" component={Technology_Level10} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level11Screen" component={Technology_Level11} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level12Screen" component={Technology_Level12} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level13Screen" component={Technology_Level13} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level14Screen" component={Technology_Level14} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level15Screen" component={Technology_Level15} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level16Screen" component={Technology_Level16} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level17Screen" component={Technology_Level17} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level18Screen" component={Technology_Level18} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level19Screen" component={Technology_Level19} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level20Screen" component={Technology_Level20} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level21Screen" component={Technology_Level21} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level22Screen" component={Technology_Level22} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level23Screen" component={Technology_Level23} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level24Screen" component={Technology_Level24} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="Technology_Level25Screen" component={Technology_Level25} options={{ headerShown:false, gestureEnabled:false }}/>
        <Stack.Screen name="FinishTechnology" component={FinishTechnology} options={{ headerShown:false, gestureEnabled:false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRoute