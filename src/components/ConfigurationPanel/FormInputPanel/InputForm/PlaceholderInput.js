import React from 'react'
import { Form } from 'semantic-ui-react'

const PlaceholderInput = ({ value, onChange }) => (
  <Form.Input
    placeholder="Placeholder"
    name="placeholder"
    value={value}
    onChange={onChange}
  />
)

export default PlaceholderInput
