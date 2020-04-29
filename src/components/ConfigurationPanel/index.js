import React from 'react'
import FormInputGroupPanel from './FormInputGroupPanel/index'
import FormInputPanel from './FormInputPanel/index'
import {
  FORM_INPUT_GROUP,
  EDIT_FORM_INPUT,
  FORM_INPUT,
} from 'redux/constants/configuration-panel-modes'

const ConfigurationPanel = ({ mode }) => {
  switch (mode) {
    case FORM_INPUT_GROUP:
      return <FormInputGroupPanel />
    case FORM_INPUT:
      return <FormInputPanel />
    case EDIT_FORM_INPUT:
      return <FormInputPanel />
    default:
      return null
  }
}

export default ConfigurationPanel
