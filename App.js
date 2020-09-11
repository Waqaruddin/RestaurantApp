import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import RestaurantList from './src/Home';
import Details from './src/Details';
import Welcome from './src/Welcome'



const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Welcome">
        <Stack.Screen name = "Welcome" component={Welcome} />
        <Stack.Screen  options={{ headerTitle: 'Restaurant Search' }} name = "Restaurants" component = {RestaurantList}/>
        <Stack.Screen name = "Details" component = {Details} /> 
      </Stack.Navigator>
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
