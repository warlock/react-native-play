import React, { Component } from 'react'
import { View } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
import AppButton from '../components/AppButton'
import { NavigationActions } from 'react-navigation'
import firebase from 'firebase/app'
import facebook from '../utils/facebook'
import google from '../utils/google'

export default class Start extends Component {
  
  static navigationOptions = {
    title: 'Titulo'
  }

  login () {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Login'
    })
    this.props.navigation.dispatch(navigateAction)
  }

  register () {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Register'
    })
    this.props.navigation.dispatch(navigateAction)
  }

  async facebook () {
    var credential = null
    try {
      const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(facebook.config.application_id, { permissions: facebook.permissions })
      credential = firebase.auth.FacebookAuthProvider.credential(token)
    } catch (error) {
      console.log(error)
    }

    try {
      await firebase.auth().signInAndRetrieveDataWithCredential(credential)
    } catch (error) {
      alert(error.message)
    }
  }

  async google () {
    var credential = null
    try {
      const { type, token } = await Expo.Google.logInAsync(google.config)
      credential = firebase.auth.GoogleAuthProvider.credential(token)
    } catch (error) {
      console.log(error)
    }
    
    try {
      await firebase.auth().signInWithCredential(credential)
    } catch (error) {
      alert(error.message)
    }
  }

  render () {
    return (
      <BackgroundImage
        source={require('../../assets/images/cityback.jpeg')}
      >
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <AppButton
            bgColor="rgba(111, 38, 74, 0.7)"
            title="Entrar"
            action={this.login.bind(this)}
            iconName="sign-in"
            iconSize={30}
            iconColor="#fff"
          />
          <AppButton
            bgColor="rgba(200, 200, 50, 0.7)"
            title="Registra"
            action={this.register.bind(this)}
            iconName="user-plus"
            iconSize={30}
            iconColor="#fff"
          />
          <AppButton
            bgColor="rgba(67, 67, 146, 0.7)"
            title="Facebook"
            action={this.facebook.bind(this)}
            iconName="facebook"
            iconSize={30}
            iconColor="#fff"
          />
        </View>
      </BackgroundImage>
    )
  }
}