import { createStore, applyMiddleware } from "redux";
// import { createStore, applyMiddleware } from '../myRedux'
// import logger from 'redux-logger'
// import thunk from "redux-thunk";
import { logger, thunk } from '../myRedux/middlewares'
export function countReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state = state + 1
    case 'MINUS':
      return state = state - 1
    default:
      return state
  }
}

const store = createStore(countReducer, applyMiddleware(thunk, logger))
export default store