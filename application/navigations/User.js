import { createStackNavigator, createDrawerNavigator, DrawerActions } from 'react-navigation'
import React from 'react'
import { Text } from 'react-native'
import HomeScreen from '../screens/Home'

const DrawerStack = createDrawerNavigator({
  screen1: { screen: HomeScreen }
})



export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    drawerStack: { screen: DrawerStack },
    initialRouteName: 'Home',
    navigationOptions: {
    headerLeft: <Text onClick={DrawerActions.toggleDrawer()}>Menu</Text>,
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTitleStyle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
      }
    }
  }
)