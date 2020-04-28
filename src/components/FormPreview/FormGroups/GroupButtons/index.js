import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const ButtonsWrapper = styled.div`
  margin-bottom: 1em;
  margin-left: 1em;
`

const ArrowIcon = styled(Icon)`
  margin-right: 0;
`

const GroupButtons = ({
  onRemoveGroupClick,
  onAddFieldClick,
  onMoveUpClick,
  onMoveDownClick,
}) => (
  <ButtonsWrapper>
    <Button size="small" primary onClick={onAddFieldClick}>
      <Icon name="add" /> Add field
    </Button>
    <Button size="small" color="red" onClick={onRemoveGroupClick}>
      <Icon name="remove" /> Remove group
    </Button>
    <Button size="small" primary onClick={onMoveUpClick}>
      <ArrowIcon name="arrow up" style={{ marginRight: 0 }} />
    </Button>
    <Button size="small" primary onClick={onMoveDownClick}>
      <ArrowIcon name="arrow down" style={{ marginRight: 0 }} />
    </Button>
  </ButtonsWrapper>
)

export default GroupButtons
