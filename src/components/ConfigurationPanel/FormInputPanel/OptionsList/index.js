import React from 'react'
import { List, Button } from 'semantic-ui-react'
import styled from 'styled-components'

const OptionElement = styled.span`
  margin-right: 0.5em;
`

const OptionElementLabel = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`

const MarginedList = styled(List)`
  margin-bottom: 1em !important;
`

const OptionsList = ({ options, onDelete }) => (
  <MarginedList>
    {options.map((o) => (
      <List.Item key={o.id}>
        <List.Content floated="right">
          <Button color="red" size="tiny" onClick={() => onDelete(o.id)}>
            Delete
          </Button>
        </List.Content>
        <List.Content>
          <OptionElement>
            <OptionElementLabel>key: </OptionElementLabel>
            {o.key}
          </OptionElement>
          <OptionElement>
            <OptionElementLabel>text: </OptionElementLabel>
            {o.text}
          </OptionElement>
          <OptionElement>
            <OptionElementLabel>value: </OptionElementLabel>
            {o.value}
          </OptionElement>
        </List.Content>
      </List.Item>
    ))}
  </MarginedList>
)

export default OptionsList
