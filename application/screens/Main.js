import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import GuestNavigation from '../navigations/Guest'
import LoggedNavigation from '../navigations/Logged'
import PreLoader from '../components/PreLoader'

const mapStateToProps = state => {
  return {
    loaded: state.loaded,
    logged: state.logged
  }
}

@connect(mapStateToProps)
class App extends Component {

  async componentDidMount () {
    const value = await AsyncStorage.getItem('@app:token')
    if (value) {
      console.log('estic aqui ' + value)
      this.props.dispatch({
        type: 'SIGN_IN',
        payload: value
      })
    } else {
      console.log('boh')
      this.props.dispatch({
        type: 'LOAD_OK'
      })
    }
  }

  render () {
    if (this.props.loaded) {
      if (this.props.logged) {
        return (<LoggedNavigation />)
      } else {
        return (<GuestNavigation />)
      }
    } else {
      return (<PreLoader />)
    }
  }
}



export default App