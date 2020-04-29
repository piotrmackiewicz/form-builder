import React from 'react'
import { Button } from 'semantic-ui-react'
import Wrapper from './Wrapper'

const FormButtons = ({ onSubmit, onCancel }) => (
  <Wrapper>
    <Button primary onClick={onSubmit}>
      Create
    </Button>
    <Button color="red" onClick={onCancel}>
      Cancel
    </Button>
  </Wrapper>
)

export default FormButtons
