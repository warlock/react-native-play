import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import GuestNavigation from '../navigations/Guest'
import UserNavigation from '../navigations/User'
import PreLoader from '../components/PreLoader'

class App extends Component {

  async componentDidMount () {
    const value = await AsyncStorage.getItem('@app:token')
    if (value) {
      this.props.dispatch({
        type: 'SIGN_IN',
        payload: value
      })
    } else {
      this.props.dispatch({
        type: 'LOAD_OK'
      })
    }
  }

  render () {
    if (this.props.loaded) {
      if (this.props.logged) {
        return (<UserNavigation />)
      } else {
        return (<GuestNavigation />)
      }
    } else {
      return (<PreLoader />)
    }
  }
}

const mapStateToProps = state => {
  return {
    loaded: state.loaded,
    logged: state.logged
  }
}

export default connect(mapStateToProps)(App)