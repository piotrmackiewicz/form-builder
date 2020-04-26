import React from 'react'
import { Button } from 'semantic-ui-react'
import {
  FORM_INPUT_GROUP,
  PRESENTATION_ELEMENT,
} from 'redux/constants/configuration-panel-modes'
import { useDispatch } from 'react-redux'
import { setConfigurationPanelMode } from 'redux/actions/index'

const AddElementButtons = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        primary
        onClick={() => dispatch(setConfigurationPanelMode(FORM_INPUT_GROUP))}
      >
        Add form input group
      </Button>
      <Button
        color="green"
        onClick={() =>
          dispatch(setConfigurationPanelMode(PRESENTATION_ELEMENT))
        }
      >
        Add presentation element
      </Button>
    </div>
  )
}
export default AddElementButtons
