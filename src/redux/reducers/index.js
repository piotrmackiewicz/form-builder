import initialState from 'redux/store/initialState'
import { SET_FORM_TITLE } from 'redux/constants/action-types'

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_TITLE:
      return { ...state, formTitle: action.title }
    default:
      return state
  }
}

export default rootReducer
