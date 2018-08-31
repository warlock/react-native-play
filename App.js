import React, { Component } from 'react'
import Main from './application/screens/Main'
import { store } from './application/store/store'
import { Provider } from 'react-redux'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
