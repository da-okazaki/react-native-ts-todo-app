import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from 'src/screens/home-screen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      {/* 追加 screenOptions={ screenOption } */}
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }: any) => ({
  tabBarIcon: ({ color, size }: any) => {
    let iconName: any = '';
    if (route.name === 'Home') {
      iconName = 'home';
    }

    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});
