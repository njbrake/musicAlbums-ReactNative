//import library to help create component
import React from 'react';
import { AppRegistry, Text } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
