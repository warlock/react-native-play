
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import AppButton from '../components/AppButton'
import firebase from 'firebase/app'

@connect()
class Home extends Component {
  constructor () {
    super()
    this.logout = this.logout.bind(this)
  }

  async logout () {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
      alert(error.message)
    })
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