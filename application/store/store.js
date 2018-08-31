import { createStore }  from 'redux'

const initialState = {
  isLogged: false,
  loaded: false,
  token: null
}


const reducer = (state = initialState, action) => {
  const newstate = Object.assign({}, state)
  switch (action.type) {
    case 'LOAD_OK':
      newstate.loaded = true
      return newstate
    default:
      return newstate
  }
}

export const store = createStore(reducer)
