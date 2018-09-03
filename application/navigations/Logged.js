import React from 'react'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/Home'

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTitleStyle: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1 // Magia para centrar titulo
      }
    }
  }
)