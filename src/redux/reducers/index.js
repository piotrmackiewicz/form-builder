import initialState from 'redux/store/initialState'
import {
  SET_FORM_TITLE,
  SET_CONFIGURATION_PANEL_MODE,
  ADD_FORM_GROUP,
  REMOVE_FORM_GROUP,
} from 'redux/constants/action-types'

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_TITLE:
      return { ...state, formTitle: action.title }
    case SET_CONFIGURATION_PANEL_MODE:
      return { ...state, configurationPanelMode: action.mode }
    case ADD_FORM_GROUP:
      return {
        ...state,
        formGroups: [...state.formGroups, action.group],
      }
    case REMOVE_FORM_GROUP:
      return {
        ...state,
        formGroups: state.formGroups.filter((fe) => fe.id !== action.groupId),
      }
    default:
      return state
  }
}

export default rootReducer
