import React from 'react'
import { Form } from 'semantic-ui-react'

const ButtonProperties = ({ buttonText, noButtonTextError, onChange }) => (
  <Form.Input
    placeholder="Button text"
    name="buttonText"
    value={buttonText}
    onChange={onChange}
    error={
      noButtonTextError && {
        content: 'Please enter button text',
        pointing: 'below',
      }
    }
  />
)

export default ButtonProperties
