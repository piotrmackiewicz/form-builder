import React from 'react'
import { Form, Message, Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const InputGroupLabelField = styled(Form.Field)`
  margin-bottom: 0 !important;
`

const FormGroupWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
`

const ButtonsWrapper = styled.div`
  margin-bottom: 1em;
  margin-left: 1em;
`

const FormElements = ({ elements }) => {
  const renderFields = (fields) => {
    if (fields.length === 0) {
      return (
        <Message compact info size="mini">
          No input fields
        </Message>
      )
    }
    return null
  }

  const renderGroupLabel = (value) => (
    <InputGroupLabelField>
      <label>{value}</label>
    </InputGroupLabelField>
  )

  const renderGroups = () =>
    elements.map((e) => (
      <React.Fragment>
        {e.label && renderGroupLabel(e.label)}
        <FormGroupWrapper>
          <Form.Group key={e.id}>{renderFields(e.fields)}</Form.Group>
          <ButtonsWrapper>
            <Button size="small" primary>
              <Icon name="add" /> Add field
            </Button>
            <Button size="small" color="red">
              <Icon name="remove" /> Remove group
            </Button>
          </ButtonsWrapper>
        </FormGroupWrapper>
      </React.Fragment>
    ))

  return <Form>{renderGroups()}</Form>
}

export default FormElements
