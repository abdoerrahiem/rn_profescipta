/// <reference types="nativewind/types" />
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './navigation';
import {navigationRef} from './navigation/RootNavigation';
import {Provider} from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
