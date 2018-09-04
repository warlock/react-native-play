import React, { Component } from 'react'
import { connect } from 'react-redux'
import GuestNavigation from '../navigations/Guest'
import LoggedNavigation from '../navigations/Logged'
import PreLoader from '../components/PreLoader'
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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.dispatch({
          type: 'SIGN_IN'
        })
      } else {
        this.props.dispatch({ type: 'SIGN_OUT' })
      }
    })
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