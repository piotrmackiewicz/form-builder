import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const CloseButton = styled(Button)`
  margin-right: 0 !important;
  box-shadow: none !important;
  position: absolute;
  top: 0;
  right: 0;
`

const CloseIcon = styled(Icon)`
  margin-right: 0;
`

const CloseConfigurationPanelButton = ({ onClick }) => (
  <CloseButton basic size="tiny" onClick={onClick}>
    <CloseIcon name="delete" style={{ marginRight: 0 }} />
  </CloseButton>
)

export default CloseConfigurationPanelButton
