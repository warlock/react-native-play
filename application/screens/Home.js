
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import AppButton from '../components/AppButton'
import firebase from 'firebase/app'
import { SearchBar } from 'react-native-elements'


@connect()
class Home extends Component {
  constructor () {
    super()
    this.logout = this.logout.bind(this)
  }

  async logout () {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      console.log(error)
    }
  }

  someMethod () {}

  render () {
    return (
      <View>
        <SearchBar
          lightTheme
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder='Type Here...'
        />
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