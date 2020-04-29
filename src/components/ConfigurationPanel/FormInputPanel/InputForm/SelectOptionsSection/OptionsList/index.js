import React from 'react'
import { List, Button } from 'semantic-ui-react'
import Wrapper from './Wrapper'
import OptionElement from './OptionElement'
import OptionElementLabel from './OptionElementLabel'

const OptionsList = ({ options, onDelete }) => (
  <Wrapper>
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
  </Wrapper>
)

export default OptionsList
