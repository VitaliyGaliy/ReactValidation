import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { redirect } from '../middlewares/redirect'
import { rootReducer } from '../reducers'
import { LOGIN_SUCCESS } from '../constants/User'


export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger()),
    applyMiddleware(redirect),
  )(createStore)(rootReducer)


  const token = JSON.parse(localStorage.getItem('token')) //Проверка наличия токена и
  if (token) {                                            //обновление стейта
    store.dispatch({ type: LOGIN_SUCCESS, payload: token });
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}
