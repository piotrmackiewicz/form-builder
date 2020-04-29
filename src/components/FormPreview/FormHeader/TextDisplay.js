import React from 'react'
import styled from 'styled-components'
import { Header } from 'semantic-ui-react'

const Wrapper = styled(Header)`
  margin-bottom: 0;
`

const TextDisplay = ({ value }) => <Wrapper as="h1">{value}</Wrapper>

export default TextDisplay
