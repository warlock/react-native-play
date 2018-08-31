import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'
import GuestNavigation from '../navigations/guest'
import PreLoader from '../components/PreLoader'
import Home from './Home'
import firebaseConfig from '../utils/firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
firebase.initializeApp(firebaseConfig)

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
        return (<Home />)
      } else {
        return (<GuestNavigation />)
      }
    } else {
      return (<PreLoader />)
    }
  }
}



export default App