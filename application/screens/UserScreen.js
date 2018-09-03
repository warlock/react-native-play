import React, { Component } from 'react'
import { StyleSheet, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { createDrawerNavigator } from 'react-navigation'

class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name='rowing' />
    )
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    )
  }
}

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Icon name="3d-rotation" />
    )
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})

export const MyApp = createDrawerNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
})