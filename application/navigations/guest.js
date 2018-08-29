import React from 'react'
import { createStackNavigator } from 'react-navigation'
import StartScreen from '../screens/Start'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register'

export default createStackNavigator(
  {
    Start: {
      screen: StartScreen
    },
    Login: {
      screen: LoginScreen
    },
    Register: {
      screen: RegisterScreen
    }
  },
  {
    initialRouteName: 'Start',
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