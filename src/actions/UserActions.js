import {
  LOGIN_FAIL, //eslint-disable-line no-unused-vars
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SAVE_USER
} from '../constants/User'

import {
  ROUTING
} from '../constants/Routing'

export const saveUserInLS = userName => dispatch => new Promise(resolve => setTimeout(() => {         //eslint-disable-line no-unused-vars
  const usersInLS = JSON.parse(localStorage.getItem('users')) || []
  const users = JSON.stringify([...usersInLS, userName])
  localStorage.setItem('users', users)
  resolve(userName)
}, 20))
  .then(userName => dispatch(saveUser(userName)))

export function saveUser(userName) {
  return (dispatch) => {
    dispatch({
      type: SAVE_USER,
      userName
    })
  }
}

export function login(user) {
  const tokenUser = JSON.stringify(user)
  localStorage.setItem('token', tokenUser)
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    })

    dispatch({
      type: ROUTING,
      payload: {
        method: 'replace',
        nextUrl: '/'
      }
    })
  }
}

export function logout() {
  localStorage.removeItem('token')
  return (dispatch) => {

      dispatch({
        type: LOGOUT_SUCCESS
      })

      dispatch({
        type: ROUTING,
        payload: {
          method: 'replace',
          nextUrl: '/'
        }
      })
  }
}
