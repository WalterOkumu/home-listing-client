import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

import AboutScreen from '../screens/about-screen';
import AddHomeScreen from '../screens/add-home-screen';
import HomeDetailsScreen from '../screens/home-details-screen';
import HomeListScreen from '../screens/home-list-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function stackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="HomeList" 
          component={HomeListScreen} 
        />
        <Stack.Screen 
          name="HomeDetails" 
          component={HomeDetailsScreen} 
        />
        <Stack.Screen 
          name="AddHome" 
          component={AddHomeScreen} 
        />
      </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={stackNavigator}
        />
        <Tab.Screen
          name='About'
          component={AboutScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;