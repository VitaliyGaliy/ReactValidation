import { SAVE_ADVT, UPDATE_ADVT, SET_ADVT, DELETE_ADVT } from '../constants/User'
import { ROUTING } from '../constants/Routing'


export const saveAdInLS = ad => dispatch => new Promise(resolve => setTimeout(() => { //eslint-disable-line no-unused-vars
  const adInLS = JSON.parse(localStorage.getItem('advts')) || []  //с помощью Promise происходит эмуляция
  const advts = JSON.stringify([...adInLS, ad])                   //ассинхронного запроса
  localStorage.setItem('advts', advts)
  resolve(ad)
}, 20))
  .then(ad => dispatch(saveAd(ad)))

export function saveAd(ad) {
  return (dispatch) => {
    dispatch({
      type: SAVE_ADVT,
      id: ad.id,
      ad
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

export const deleteItemInLS = ad => dispatch => new Promise(resolve => setTimeout(() => { //eslint-disable-line no-unused-vars
  const adInLS = JSON.parse(localStorage.getItem('advts'))
  const advts = JSON.stringify(adInLS.filter(a => a.id !== ad))
  localStorage.setItem('advts', advts)
  resolve(ad)
}, 20))
  .then(ad => dispatch(deleteAd(ad)))

export function deleteAd(ad) {
  return (dispatch) => {
    dispatch({
      type: DELETE_ADVT,
      id: ad.id,
      ad
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


export const updateAdInLS = ad => dispatch => new Promise(resolve => setTimeout(() => {         //eslint-disable-line no-unused-vars
  const adInLS = JSON.parse(localStorage.getItem('advts'))
  let editedAdInLS = adInLS.map(item => {
    if(item.id === ad.id) {
      let newItems = {};
      Object.keys(item).forEach((advtField) => {  //перебирвется массив с совпавшим id
        if(ad[advtField] === undefined){          //в который копируются элементы из
          newItems[advtField] = item[advtField]   //localStorage, которые не были изменены
        }else{
          newItems[advtField] = ad[advtField]
          }
        }
      )
    return item = newItems;
    }
    return item
  })
  const advts = JSON.stringify(editedAdInLS)
  localStorage.setItem('advts', advts)
  resolve(ad)
}, 20))
  .then(ad => dispatch(updateAd(ad)))

export function updateAd(ad) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_ADVT,
      ad
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

export const getAdvtsInLS = () => dispatch => new Promise(resolve => setTimeout(() => {         //eslint-disable-line no-unused-vars
  const ad = JSON.parse(localStorage.getItem('advts'));
  resolve(ad)
}, 20))
  .then(ad => dispatch(getAdvts(ad)))

export const getAdvts = ad => dispatch => { //eslint-disable-line no-unused-vars
    if(ad === null) {
      return Promise.resolve()
    }

    return dispatch({
        type: SET_ADVT,
        ad
      })
    }
