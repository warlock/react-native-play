
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import AppButton from '../components/AppButton'
import firebase from 'firebase/app'
import { SearchBar, Avatar } from 'react-native-elements'


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
      <View style={{ marginTop: 20 }}>
        <SearchBar
          lightTheme
          onChangeText={this.someMethod}
          onClearText={this.someMethod}
          placeholder='Type Here...'
        />
        <Avatar
          medium
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
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