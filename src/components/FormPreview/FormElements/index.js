import React from 'react'
import { Form, Input } from 'semantic-ui-react'
import styled from 'styled-components'

const InputGroupLabelField = styled(Form.Field)`
  margin-bottom: 0 !important;
`

const FormElements = ({ elements }) => {
  const renderGroups = () =>
    elements.map((e) => (
      <React.Fragment>
        <InputGroupLabelField>
          <label>{e.label}</label>
        </InputGroupLabelField>
        <Form.Group key={e.id}>
          <Form.Field>
            <Input placeholder="xxx" />
          </Form.Field>
          <Form.Field>
            <Input placeholder="xxxx" />
          </Form.Field>
        </Form.Group>
      </React.Fragment>
    ))

  return <Form>{renderGroups()}</Form>
}

export default FormElements
