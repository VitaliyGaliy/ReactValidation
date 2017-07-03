import {
  SET_PAGE,
  SET_BUTTONPAGE
} from '../constants/User'

const initialState = {}

export default function page(state = initialState, action) {

  switch (action.type) {
  case SET_PAGE:
    return { ...state, ...action.p }

  case SET_BUTTONPAGE:
    return { ...state, ...action.p }

  default:
    return state
  }
}
