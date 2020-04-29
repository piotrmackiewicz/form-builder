import {
  SET_FORM_TITLE,
  SET_CONFIGURATION_PANEL_MODE,
  ADD_FORM_GROUP,
  REMOVE_FORM_GROUP,
  SET_CONFIGURATION_PANEL_GROUP_ID,
  ADD_INPUT_FIELD,
  CHANGE_GROUP_ORDER,
  REMOVE_INPUT_FIELD,
  CHANGE_FIELD_ORDER,
} from 'redux/constants/action-types'
import { v4 as uuidv4 } from 'uuid'

export const setFormTitle = (title) => ({
  type: SET_FORM_TITLE,
  title,
})

export const setConfigurationPanelMode = (mode) => ({
  type: SET_CONFIGURATION_PANEL_MODE,
  mode,
})

export const setConfigurationPanelGroupId = (groupId) => ({
  type: SET_CONFIGURATION_PANEL_GROUP_ID,
  groupId,
})

export const addFormGroup = (group) => {
  return {
    type: ADD_FORM_GROUP,
    group: {
      id: uuidv4(),
      label: group.label,
      fields: [],
    },
  }
}

export const removeFormGroup = (groupId) => ({
  type: REMOVE_FORM_GROUP,
  groupId,
})

export const addInputField = (groupId, input) => ({
  type: ADD_INPUT_FIELD,
  groupId,
  input,
})

export const changeGroupOrder = (idx, direction) => ({
  type: CHANGE_GROUP_ORDER,
  idx,
  direction,
})

export const removeInputField = (groupId, inputId) => ({
  type: REMOVE_INPUT_FIELD,
  groupId,
  inputId,
})

export const changeFieldOrder = (idx, direction, groupId) => ({
  type: CHANGE_FIELD_ORDER,
  idx,
  direction,
  groupId,
})
