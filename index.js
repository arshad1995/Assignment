/**
 * @format
 */

import { AppRegistry } from 'react-native';
import router from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => router);
