import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Wrapper from './Wrapper'
import ArrowIcon from './ArrowIcon'

const GroupButtons = ({
  onRemoveGroupClick,
  onAddFieldClick,
  onMoveUpClick,
  onMoveDownClick,
}) => (
  <Wrapper>
    <Button size="small" primary onClick={onAddFieldClick}>
      <Icon name="add" /> Add field
    </Button>
    <Button size="small" color="red" onClick={onRemoveGroupClick}>
      <Icon name="remove" /> Remove group
    </Button>
    <Button size="small" primary onClick={onMoveUpClick}>
      <ArrowIcon name="arrow up" />
    </Button>
    <Button size="small" primary onClick={onMoveDownClick}>
      <ArrowIcon name="arrow down" />
    </Button>
  </Wrapper>
)

export default GroupButtons
