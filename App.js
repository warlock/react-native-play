import React, { Component } from 'react'
import GuestNavigation from './application/navigations/guest'
import { Text } from 'react-native-elements'
import PreLoader from './application/components/PreLoader'

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      isLogged: false,
      loaded: false
    }
  }

  async componentDidMount () {
    setTimeout(() => {
      //Chequeja si esta loguejat
      this.setState({
        isLogged: false,
        loaded: true
      })
    }, 3000)
  }

  render() {
    const { isLogged, loaded } = this.state

    if (!loaded) {
      return (
        <PreLoader />
      )
    } else {
      if (isLogged) {
        return (<Text>Hola user</Text>)
      } else {
        return (
          <GuestNavigation />
        )
      }
    }
  }
}
