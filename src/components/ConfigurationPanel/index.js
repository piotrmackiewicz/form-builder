import React from 'react'
import FormInputGroupPanel from './FormInputGroupPanel/index'
import PresentationElementPanel from './PresentationElementPanel/index'
import {
  FORM_INPUT_GROUP,
  PRESENTATION_ELEMENT,
} from 'redux/constants/configuration-panel-modes'

const ConfigurationPanel = ({ mode, onFormSubmit }) => {
  switch (mode) {
    case FORM_INPUT_GROUP:
      return <FormInputGroupPanel onSubmit={onFormSubmit} />
    case PRESENTATION_ELEMENT:
      return <PresentationElementPanel />
    default:
      return null
  }
}

export default ConfigurationPanel
