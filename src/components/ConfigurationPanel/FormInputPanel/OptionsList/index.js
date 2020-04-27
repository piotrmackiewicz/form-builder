import React from 'react'
import { List } from 'semantic-ui-react'
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

const OptionsList = ({ options }) => (
  <MarginedList>
    {options.map((o) => (
      <List.Item key={o.id}>
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
