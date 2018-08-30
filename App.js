import React, { Component } from 'react'
import { AsyncStorage } from "react-native"
import GuestNavigation from './application/navigations/guest'
import PreLoader from './application/components/PreLoader'
import Home from './application/components/Home'

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      isLogged: false,
      loaded: false
    }
  }

  async componentDidMount () {

    const value = await AsyncStorage.getItem('@app:token')
    if (value) {
      this.setState({
        isLogged: true,
        loaded: true
      })
    } else {
      this.setState({
        isLogged: false,
        loaded: true
      })
    }
  }

  render() {
    const { isLogged, loaded } = this.state

    if (!loaded) {
      return (<PreLoader />)
    } else {
      if (isLogged) {
        return (<Home />)
      } else {
        return (<GuestNavigation />)
      }
    }
  }
}
