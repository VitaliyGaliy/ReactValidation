import { SET_PAGE, SET_BUTTONPAGE } from '../constants/User'

export const setPagination = p => dispatch => {
    dispatch({
      type: SET_PAGE,
      p
    })
  }

  export const setButtonPage = p => dispatch => {
      dispatch({
        type: SET_BUTTONPAGE,
        p
      })
    }
