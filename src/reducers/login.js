import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/User'

const initialState = {
  isAuthenticated: false
}

export default function login(state = initialState, action) {

  switch (action.type) {
  case LOGIN_SUCCESS:
    return { ...state, isAuthenticated: true, user: action.payload }

  case LOGOUT_SUCCESS:
    return { ...state, isAuthenticated: false, user: '' }

  default:
    return state
  }
}
