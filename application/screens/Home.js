
import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import AppButton from '../components/AppButton'

@connect()
class Home extends Component {
  constructor () {
    super()
    this.logout = this.logout.bind(this)
  }

  async logout () {
    try {
      await AsyncStorage.removeItem('@app:token')
    } catch (error) {
      console.log(error)
    }
    this.props.dispatch({ type: 'SIGN_OUT' })
  }

  render () {
    return (
      <View style={{ marginTop: 20 }}>
        <Text>Hola user</Text>
        <AppButton
          bgColor="rgba(111, 38, 74, 07)"
          title="Logout"
          action={this.logout}
          iconName="sign-in"
          iconSize={30}
          iconColor="#fff"
        />
      </View>
    )
  }
}


export default Home