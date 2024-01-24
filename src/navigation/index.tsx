import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './interface';
import Home from '../screens/Home';
import MovieDetail from '../screens/MovieDetail';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{animation: 'slide_from_right', headerShown: false}}>
      <Stack.Screen component={Home} name="Home" />
      <Stack.Screen component={MovieDetail} name="MovieDetail" />
    </Stack.Navigator>
  );
}
