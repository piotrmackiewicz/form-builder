import initialState from 'redux/store/initialState'
import {
  SET_FORM_TITLE,
  SET_CONFIGURATION_PANEL_MODE,
  SET_CONFIGURATION_PANEL_GROUP_ID,
  ADD_FORM_GROUP,
  REMOVE_FORM_GROUP,
  ADD_INPUT_FIELD,
  CHANGE_GROUP_ORDER,
} from 'redux/constants/action-types'

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FORM_TITLE:
      return { ...state, formTitle: action.title }
    case SET_CONFIGURATION_PANEL_MODE:
      return { ...state, configurationPanelMode: action.mode }
    case SET_CONFIGURATION_PANEL_GROUP_ID:
      return { ...state, configurationPanelGroupId: action.groupId }
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
    case ADD_INPUT_FIELD:
      return {
        ...state,
        formGroups: state.formGroups.map((fg) => {
          if (fg.id === action.groupId) {
            return {
              ...fg,
              fields: [...fg.fields, action.input],
            }
          } else {
            return fg
          }
        }),
      }
    case CHANGE_GROUP_ORDER:
      const groupsCopy = [...state.formGroups]
      const targetGroup = groupsCopy.splice(action.idx, 1)
      if (action.direction === 'up') {
        groupsCopy.splice(action.idx - 1, 0, targetGroup[0])
      } else if (action.direction === 'down') {
        groupsCopy.splice(action.idx + 1, 0, targetGroup[0])
      } else {
        groupsCopy.splice(action.idx, 0, targetGroup[0])
      }
      return {
        ...state,
        formGroups: groupsCopy,
      }
    default:
      return state
  }
}

export default rootReducer
