import { SAVE_ADVT,
         SET_ADVT,
         UPDATE_ADVT,
         DELETE_ADVT
        } from '../constants/User'

const initialState = []

export default function saveAd(state = initialState, action) {

  switch (action.type) {

    case SAVE_ADVT:
      return [
        ...state,
        action.ad
      ];

    case DELETE_ADVT:
      return state.filter(item => item.id !== action.ad);

    case UPDATE_ADVT:
      return state.map(item => {
        if(item.id === action.ad.id) {
          let newItems = {};
          Object.keys(item).forEach((advtField) => {
            if(action.ad[advtField] === undefined){
              newItems[advtField] = item[advtField]
            }else{
              newItems[advtField] = action.ad[advtField]
              }
            }
          )
        return item = newItems;
        }
        return item
      })

      case SET_ADVT:
        return action.ad

    default:
      return state
    }
}
