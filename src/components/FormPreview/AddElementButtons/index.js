import React from 'react'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { setConfigurationPanelMode } from 'redux/actions/index'
import {
  FORM_INPUT_GROUP,
  PRESENTATION_ELEMENT,
} from 'redux/constants/configuration-panel-modes'

const AddElementButtons = () => {
  const dispatch = useDispatch()

  const handleModeButtonClick = (mode) =>
    dispatch(setConfigurationPanelMode(mode))

  return (
    <div>
      <Button primary onClick={() => handleModeButtonClick(FORM_INPUT_GROUP)}>
        Add form input group
      </Button>
      <Button
        color="green"
        onClick={() => handleModeButtonClick(PRESENTATION_ELEMENT)}
      >
        Add presentation element
      </Button>
    </div>
  )
}
export default AddElementButtons
