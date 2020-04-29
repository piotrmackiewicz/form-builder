import React from 'react'
import { Form } from 'semantic-ui-react'

const LabelInput = ({ value, onChange }) => (
  <Form.Input
    placeholder="Label"
    name="label"
    value={value}
    onChange={onChange}
  />
)

export default LabelInput
