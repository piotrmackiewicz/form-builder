import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const ButtonsWrapper = styled.div`
  margin-bottom: 1em;
  margin-left: 1em;
`

const GroupButtons = ({ onRemoveGroupClick, onAddFieldClick }) => (
  <ButtonsWrapper>
    <Button size="small" primary onClick={onAddFieldClick}>
      <Icon name="add" /> Add field
    </Button>
    <Button size="small" color="red" onClick={onRemoveGroupClick}>
      <Icon name="remove" /> Remove group
    </Button>
  </ButtonsWrapper>
)

export default GroupButtons
