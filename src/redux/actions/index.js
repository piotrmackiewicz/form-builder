import {
  SET_FORM_TITLE,
  SET_CONFIGURATION_PANEL_MODE,
} from 'redux/constants/action-types'

export const setFormTitle = (title) => ({
  type: SET_FORM_TITLE,
  title,
})

export const setConfigurationPanelMode = (mode) => ({
  type: SET_CONFIGURATION_PANEL_MODE,
  mode,
})
