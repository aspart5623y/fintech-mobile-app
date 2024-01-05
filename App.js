// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { Foundation } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import AccountScreen from './screens/AccountScreen';
import ContactInfoScreen from './screens/ContactInfoScreen';
import NotificationScreen from './screens/NotificationScreen';


function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 30, backgroundColor: '#F6F6F9' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icon = options.tabBarIcon ? options.tabBarIcon : null;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', gap: 4 }}
          >
            {icon && React.cloneElement(icon, { color: isFocused ? '#31A063' : '#999999' })}
            <Text style={{ color: isFocused ? '#31A063' : '#999999' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Stack = createNativeStackNavigator();
// const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// function AccountTabs () {
//   return (
//     <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
//       <ProfileStack.Screen 
//         name="Profile" 
//         component={AccountScreen} 
//       />
//       <ProfileStack.Screen 
//         name="ContactInfo" 
//         component={ContactInfoScreen} 
//       />
//     </ProfileStack.Navigator>
//   )
// }


function MyTabs() {
  return (
    <SafeAreaProvider>
      <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ tabBarIcon: <Foundation name="home" size={24} /> }}
        />
        <Tab.Screen 
          name="Product" 
          component={HomeScreen}
          options={{ tabBarIcon: <Feather name="search" size={24} /> }}
        />
        <Tab.Screen 
          name="Transaction" 
          component={HomeScreen} 
          options={{ tabBarIcon: <MaterialIcons name="compare-arrows" size={24} /> }}
        />
        <Tab.Screen 
          name="Account" 
          component={AccountScreen} 
          options={{ tabBarIcon: <AntDesign name="user" size={24} /> }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
}


export default function App () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen 
            name="Welcome" 
            component={WelcomeScreen} 
          />
          <Stack.Screen 
            name="CreateAccount" 
            component={CreateAccountScreen} 
          />
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
          />
          <Stack.Screen 
            name="Main" 
            component={MyTabs} 
          />
          <Stack.Screen 
            name="ContactInfo" 
            component={ContactInfoScreen} 
          />
          <Stack.Screen 
            name="Notification" 
            component={NotificationScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}