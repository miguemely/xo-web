import reduxThunk from 'redux-thunk'
import { createHashHistory } from 'history'
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from 'redux'
import {
  reduxReactRouter,
  routerStateReducer
} from 'redux-router'

// ===================================================================

// Action handlers are reducers but bound to a specific action.
function combineActionHandlers (initialState, handlers) {
  return (state = initialState, action) => {
    const handler = handlers[action.type]

    if (handler) {
      return handler(state, action)
    }

    return state
  }
}

// -------------------------------------------------------------------

const REDUCERS = {
  counter: combineActionHandlers(0, {
    DECREMENT: state => state - 1,
    INCREMENT: state => state + 1
  })
}

// ===================================================================

// Injects router reducer.
REDUCERS.router = routerStateReducer

export default compose(
  applyMiddleware(reduxThunk),
  reduxReactRouter({ createHistory: createHashHistory })
)(createStore)(combineReducers(REDUCERS))
