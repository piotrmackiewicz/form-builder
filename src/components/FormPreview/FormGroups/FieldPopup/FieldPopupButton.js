import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const FieldPopupButton = styled(Button)`
  ${(props) => {
    if (props.color) {
      return `background-color: ${props.color} !important;`
    }
  }}
  display: flex !important;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  color: white !important;
  padding: 3px 6px 5px !important;
  font-size: 0.7em !important;
  z-index: 1;
`

export default FieldPopupButton
