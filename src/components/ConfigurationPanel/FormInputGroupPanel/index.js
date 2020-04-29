import React, { useState } from 'react'
import { Header, Grid, Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addFormGroup, setConfigurationPanelMode } from 'redux/actions/index'
import FormButtons from './FormButtons/index'
import LabelInput from './LabelInput'

const FormInputGroupPanel = () => {
  const [label, setLabel] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e) => setLabel(e.target.value)

  const handleSubmit = () => {
    dispatch(
      addFormGroup({
        label,
      })
    )
    dispatch(setConfigurationPanelMode(null))
  }

  const handleCancel = () => {
    setLabel('')
    dispatch(setConfigurationPanelMode(null))
  }

  return (
    <React.Fragment>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">New input group</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Form>
            <LabelInput value={label} onChange={handleChange} />
            <FormButtons onSubmit={handleSubmit} onCancel={handleCancel} />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}

export default FormInputGroupPanel
