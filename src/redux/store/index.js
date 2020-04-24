import { createStore } from 'redux'
import rootReducer from 'redux/reducers/index'
import initialState from './initialState'

const store = createStore(rootReducer, initialState)

export default store
