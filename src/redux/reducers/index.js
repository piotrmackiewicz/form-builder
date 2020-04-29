import initialState from 'redux/store/initialState'
import {
  SET_FORM_TITLE,
  SET_CONFIGURATION_PANEL_MODE,
  SET_CONFIGURATION_PANEL_GROUP_ID,
  ADD_FORM_GROUP,
  REMOVE_FORM_GROUP,
  ADD_INPUT_FIELD,
  CHANGE_GROUP_ORDER,
  REMOVE_INPUT_FIELD,
  CHANGE_FIELD_ORDER,
  SET_EDITED_FIELD_ID,
  EDIT_FIELD,
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
    case REMOVE_INPUT_FIELD:
      return {
        ...state,
        formGroups: state.formGroups.map((fg) => {
          if (fg.id === action.groupId) {
            return {
              ...fg,
              fields: fg.fields.filter((f) => f.id !== action.inputId),
            }
          } else {
            return fg
          }
        }),
      }
    case CHANGE_FIELD_ORDER:
      const fieldsCopy = [
        ...state.formGroups.find((fg) => fg.id === action.groupId).fields,
      ]
      const targetField = fieldsCopy.splice(action.idx, 1)
      if (action.direction === 'left') {
        fieldsCopy.splice(action.idx - 1, 0, targetField[0])
      } else if (action.direction === 'right') {
        fieldsCopy.splice(action.idx + 1, 0, targetField[0])
      } else {
        fieldsCopy.splice(action.idx, 0, targetField[0])
      }
      return {
        ...state,
        formGroups: state.formGroups.map((fg) => {
          if (fg.id === action.groupId) {
            return {
              ...fg,
              fields: fieldsCopy,
            }
          } else {
            return fg
          }
        }),
      }
    case SET_EDITED_FIELD_ID:
      return {
        ...state,
        editedFieldId: action.id,
      }
    case EDIT_FIELD:
      return {
        ...state,
        formGroups: state.formGroups.map((fg) => {
          if (fg.id === action.groupId) {
            return {
              ...fg,
              fields: fg.fields.map((f) => {
                if (f.id === action.fieldId) {
                  return {
                    ...f,
                    ...action.input,
                  }
                } else {
                  return f
                }
              }),
            }
          } else {
            return fg
          }
        }),
      }
    default:
      return state
  }
}

export default rootReducer
