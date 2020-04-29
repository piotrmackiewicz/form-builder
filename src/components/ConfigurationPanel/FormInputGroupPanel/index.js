import React, { useState } from 'react'
import { Header, Grid, Form, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addFormGroup, setConfigurationPanelMode } from 'redux/actions/index'
import styled from 'styled-components'

const ButtonsWrapper = styled.div`
  display: flex;
`

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
            <Form.Input
              placeholder="Label"
              name="label"
              value={label}
              onChange={handleChange}
            ></Form.Input>
            <ButtonsWrapper>
              <Button primary onClick={handleSubmit}>
                Create
              </Button>
              <Button color="red" onClick={handleCancel}>
                Cancel
              </Button>
            </ButtonsWrapper>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}

export default FormInputGroupPanel
