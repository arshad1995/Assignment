import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './src/containers/Container';
import EmptyPage from './src/components/EmptyPage';

import { Provider } from 'react-redux';
import store from './store';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  EmptyPage: {
    screen: EmptyPage,
    navigationOptions: {
      header: null,
    },
  },
});

const RootNavigator = createAppContainer(AppNavigator);

const Router = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default Router;
