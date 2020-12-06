import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <App.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#312e38' },
        }}
      >
        <App.Screen name="Dashboard" component={Dashboard} />
      </App.Navigator>
    </>
  );
};

export default AppRoutes;
