import React from 'react'
import { Button } from 'semantic-ui-react'
import { FORM_INPUT_GROUP } from 'redux/constants/configuration-panel-modes'
import { useDispatch } from 'react-redux'
import { setConfigurationPanelMode } from 'redux/actions/index'

const AddGroupButton = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <Button
        primary
        onClick={() => dispatch(setConfigurationPanelMode(FORM_INPUT_GROUP))}
      >
        Add form input group
      </Button>
    </div>
  )
}
export default AddGroupButton
