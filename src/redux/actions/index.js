import {
  SET_FORM_TITLE,
  SET_CONFIGURATION_PANEL_MODE,
  ADD_FORM_GROUP,
  REMOVE_FORM_GROUP,
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
