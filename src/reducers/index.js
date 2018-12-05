import { combineReducers } from 'redux'
import {
    RECEIVE_THREAD,
    TOGGLE_MESSAGE_DETAIL,
    RECEIVE_MESSAGE
} from '../actions'

export function uiReducer(state = { isMessageDetailOpen: true }, action) {
    switch (action.type) {
        //   case 'RECEIVE_THREAD': {
        //       return Object.assign({}, state, {
        //         visibilityFilter: action.filter
        //       })
        //     }
        // case 'TOGGLE_MESSAGE_DETAIL': {
        //     return Object.assign({}, state, {
        //       visibilityFilter: action.filter
        //     })
        //   }
        default:
            return state
    }
}

export function threadReducer(state=null, action) { // set to default action
    switch (action.type) {
        case 'RECEIVE_THREAD':
              return action.thread;

            default:
            return state
    }

     // in order to get /* ×
// Error: Reducer "thread" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined. */
//return state
}

export default combineReducers({
    ui: uiReducer,
    thread: threadReducer,
    // combineReducers can combine as many reducers as you need
})
