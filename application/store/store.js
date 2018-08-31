import { createStore }  from 'redux'

const initialState = {
  logged: false,
  loaded: false,
  token: null
}

const reducer = (state = initialState, action) => {
  const newstate = Object.assign({}, state)
  switch (action.type) {
    case 'LOAD_OK':
      newstate.loaded = true
      return newstate
    case 'SIGN_IN':
      newstate.token = action.payload
      newstate.logged = true
      return newstate
    case 'SIGN_OUT':
      newstate.token = null
      newstate.logged = false
      return newstate
    default:
    return newstate
  }
}

export const store = createStore(reducer)
