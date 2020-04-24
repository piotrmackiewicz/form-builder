import React from 'react'
import { Grid } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import FormInputGroupPanel from './FormInputGroupPanel/index'
import PresentationElementPanel from './PresentationElementPanel/index'
import {
  FORM_INPUT_GROUP,
  PRESENTATION_ELEMENT,
} from 'redux/constants/configuration-panel-modes'

const ConfigurationPanel = () => {
  const configurationPanelMode = useSelector((s) => s.configurationPanelMode)
  let currentModePanel = null
  switch (configurationPanelMode) {
    case FORM_INPUT_GROUP:
      currentModePanel = <FormInputGroupPanel />
      break
    case PRESENTATION_ELEMENT:
      currentModePanel = <PresentationElementPanel />
      break
    default:
      break
  }
  return (
    <Grid.Column width={8} style={{ backgroundColor: 'blue', zIndex: 1 }}>
      {currentModePanel}
    </Grid.Column>
  )
}

export default ConfigurationPanel
