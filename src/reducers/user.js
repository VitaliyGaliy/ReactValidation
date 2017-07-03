import { SAVE_USER } from '../constants/User'

const initialState = []

export default function userstate(state = initialState, action) {

  switch (action.type) {

    case SAVE_USER:
      return [
        ...state,
        action.userName
      ];

    default:
      return state
    }
}
