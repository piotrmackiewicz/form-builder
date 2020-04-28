import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const DeleteFieldButton = styled(Button)`
  position: absolute;
  top: -5px;
  right: 0;
  background-color: red !important;
  display: flex !important;
  width: 13px;
  height: 13px;
  justify-content: center;
  align-items: center;
  color: white !important;
  padding: 3px 6px 5px !important;
  font-size: 0.7em !important;
  z-index: 1;
`

export default DeleteFieldButton
