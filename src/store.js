import { createStore} from 'redux';
import {messageReducer} from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'
const initialState=[]

export const store = createStore(messageReducer,
    initialState,
    composeWithDevTools());