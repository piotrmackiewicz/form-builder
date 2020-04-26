import React from 'react'
import FormInputGroupPanel from './FormInputGroupPanel/index'
import { FORM_INPUT_GROUP } from 'redux/constants/configuration-panel-modes'

const ConfigurationPanel = ({ mode, onFormSubmit }) => {
  switch (mode) {
    case FORM_INPUT_GROUP:
      return <FormInputGroupPanel onSubmit={onFormSubmit} />
    default:
      return null
  }
}

export default ConfigurationPanel
