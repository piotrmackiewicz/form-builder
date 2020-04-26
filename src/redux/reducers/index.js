import initialState from 'redux/store/initialState'
import {
  SET_FORM_TITLE,
  SET_CONFIGURATION_PANEL_MODE,
  ADD_FORM_ELEMENT,
} from 'redux/constants/action-types'

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_TITLE:
      return { ...state, formTitle: action.title }
    case SET_CONFIGURATION_PANEL_MODE:
      return { ...state, configurationPanelMode: action.mode }
    case ADD_FORM_ELEMENT:
      return {
        ...state,
        formElements: [...state.formElements, action.element],
      }
    default:
      return state
  }
}

export default rootReducer
