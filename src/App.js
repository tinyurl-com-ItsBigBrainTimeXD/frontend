import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from "../stylesheets/appStyles.js";
import homeScreen from "./ui/homeScreen.js";
import addBoxScreen from "./ui/addBoxScreen.js"
import boxDataScreen from "./ui/boxDataScreen.js"
import { screenOptions } from "./constants/AppConstants";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={ screenOptions }>
        <Stack.Screen name="NOT Schrödinger's Box" component={homeScreen} /> 
        <Stack.Screen name="Add box" component={addBoxScreen} />
        <Stack.Screen name="box" component={boxDataScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
