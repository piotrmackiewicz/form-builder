import {
  SET_FORM_TITLE,
  SET_CONFIGURATION_PANEL_MODE,
  ADD_FORM_ELEMENT,
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

export const addFormElement = (element, type) => {
  const newElement = {
    id: uuidv4(),
    type,
  }
  switch (type) {
    case 'inputGroup':
      newElement.label = element.label
      newElement.fields = []
      break
    default:
      return { type: null }
  }
  return {
    type: ADD_FORM_ELEMENT,
    element: newElement,
  }
}
