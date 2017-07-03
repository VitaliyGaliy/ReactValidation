import { combineReducers } from 'redux'
import user from './user'
import login from './login'
import advts from './advts'
import pagination from './pagination'

export const rootReducer = combineReducers({
  user,
  login,
  advts,
  pagination
})
