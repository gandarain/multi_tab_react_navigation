import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {
  LoginScreen,
  UserHomeScreen,
  UserCartScreen,
  UserProfileScreen,
  VendorChatScreen,
  VendorListProductScreen,
} from './Screen';

const HomeUserStack = createStackNavigator({
  Home: {
    screen: UserHomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const CartUserStack = createStackNavigator({
  Cart: {
    screen: UserCartScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const ProfileUserStack = createStackNavigator({
  Profile: {
    screen: UserProfileScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const UserTabNavigator = createBottomTabNavigator(
  {
    Home: HomeUserStack,
    Cart: CartUserStack,
    Profile: ProfileUserStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Cart') {
          iconName = 'cart';
        } else if (routeName === 'Profile') {
          iconName = 'account';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#FFFF',
      },
    },
  },
);

const ChatVendorStack = createStackNavigator({
  Chat: {
    screen: VendorChatScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const ProductVendorScreen = createStackNavigator({
  Product: {
    screen: VendorListProductScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const VendorTabNavigator = createBottomTabNavigator(
  {
    Chat: ChatVendorStack,
    Product: ProductVendorScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      // eslint-disable-next-line react/display-name
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Chat') {
          iconName = 'chat';
        } else if (routeName === 'Product') {
          iconName = 'book-open';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#FFFF',
      },
    },
  },
);

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  VendorTabNavigator: VendorTabNavigator,
  UserTabNavigator: UserTabNavigator,
});

export default createAppContainer(AppNavigator);
