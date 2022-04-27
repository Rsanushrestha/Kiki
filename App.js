import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './src/components/Screens/WelcomeScreen';
import LoginScreen from './src/components/Screens/LoginScreen';
import SignupScreen from './src/components/Screens/SignupScreen';
import LocationScreen from './src/components/Screens/LocationScreen';
import ExperienceScreen from './src/components/Screens/ExperienceScreen';
import CategoriesScreen from './src/components/Screens/CategoriesScreen';
import OraganizersScreen from './src/components/Screens/OraganizersScreen';
import CongratulationsScreen from './src/components/Screens/CongratulationsScreen';
import ForgetScreen from './src/components/Screens/ForgetPassword/ForgetScreen';
import CodeScreen from './src/components/Screens/ForgetPassword/CodeScreen';
import ChangeScreen from './src/components/Screens/ForgetPassword/ChangeScreen';
import CongScreen from './src/components/Screens/ForgetPassword/CongScreen';
import SplashScreen from './src/components/Screens/SplashScreen/SplashScreen';
import OnbordingScreen from './src/components/Screens/Onbording/OnbordingScreen';

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboard"
          component={OnbordingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={LocationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Experience"
          component={ExperienceScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Organizers"
          component={OraganizersScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Congratulation"
          component={CongratulationsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Forget"
          component={ForgetScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Code"
          component={CodeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Change"
          component={ChangeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cong"
          component={CongScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
