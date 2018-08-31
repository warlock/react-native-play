import React, { Component } from 'react'
import GuestNavigation from '../navigations/guest'
import PreLoader from '../components/PreLoader'
import Home from '../components/Home'
import { store } from '../store/store'
import { connect } from 'react-redux'

class App extends Component {

  componentWillMount () {
    setTimeout(() => {
      console.log('aaara')
      store.dispatch({ type: 'LOAD_OK' })
    }, 3000)
  }

  render () {
    if (this.props.loaded) {
      if (this.props.isLogged) {
        return (<Home />)
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
    isLogged: state.isLogged
  }
}

export default connect(mapStateToProps)(App)