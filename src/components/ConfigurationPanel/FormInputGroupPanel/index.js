import React, { useState } from 'react'
import { Header, Grid, Form } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addFormGroup, setConfigurationPanelMode } from 'redux/actions/index'

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

  return (
    <React.Fragment>
      <Grid.Row>
        <Grid.Column>
          <Header as="h2">New input group</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              placeholder="Label"
              name="label"
              value={label}
              onChange={handleChange}
            ></Form.Input>
            <Form.Button primary content="Create" />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}

export default FormInputGroupPanel
