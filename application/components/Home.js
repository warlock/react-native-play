
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AppButton from '../components/AppButton'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      isLogged: true,
      loaded: true,
      token: null
    }
  }

  logout () {
    this.setState({
      isLogged: false,
      loaded: false,
      token: null
    })
    console.log('buu')
  }

  render () {
    return (
      <View style={{ marginTop: 10 }}>
        <Text>Hola user</Text>
        <AppButton
          bgColor="rgba(111, 38, 74, 07)"
          title="Logout"
          action={() => console.log('buu')}
          iconName="sign-in"
          iconSize={30}
          iconColor="#fff"
        />
      </View>
    )
  }
}
