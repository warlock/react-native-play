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
      newstate.logged = true
      newstate.loaded = true
      return newstate
    case 'SIGN_OUT':
      newstate.logged = false
      newstate.loaded = true
      return newstate
    default:
    return newstate
  }
}

export const store = createStore(reducer)
