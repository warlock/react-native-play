import React, { Component } from 'react'
import Main from './application/screens/Main'
import { store } from './application/store/store'
import { Provider } from 'react-redux'

export default class App extends Component {

  /*
  state = {
    loaded: false,
    isLogged: false
  }

  constructor () {
    super()
  }

  componentWillMount () {
    store.subscribe(() => {
      const { isLogged, loaded } = store.getState()
      this.setState({
        loaded,
        isLogged
      })
    })

    setTimeout(() => {
      console.log('aaara')
      store.dispatch({ type: 'LOAD_OK' })
      //store.dispatch({ type: 'LOAD_OK', payload: 'buuu' })
    }, 3000)
  }
*/
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
