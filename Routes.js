import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/pages/login';
import Home from './src/pages/home';
import Movie from './src/pages/movie';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'#fff'}
      shifting={false}
      barStyle={{backgroundColor: '#141414'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <Icon name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Soon"
        component={Home}
        options={{
          tabBarLabel: 'Coming soon',
          tabBarIcon: ({color}) => (
            <Icon name="play-speed" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Home}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color}) => (
            <Icon name="download" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Home}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => <Icon name="menu" color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
