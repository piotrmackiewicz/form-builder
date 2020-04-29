import React, { useState } from 'react'
import { Popup, Icon } from 'semantic-ui-react'
import FieldPopupButton from './FieldPopupButton'
import styled from 'styled-components'

const PopupButtonsWrapper = styled.div`
  display: flex;
`

const PopupButtonIcon = styled(Icon)`
  color: white !important;
  margin-right: 0 !important;
  margin-left: 0 !important;
`

const FieldPopup = ({
  triggerComponent,
  onLeftClick,
  onRightClick,
  onRemoveClick,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <Popup
      pinned
      flowing
      hoverable
      trigger={triggerComponent}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    >
      <PopupButtonsWrapper>
        <FieldPopupButton
          primary
          onClick={() => {
            setOpen(false)
            onLeftClick()
          }}
        >
          <PopupButtonIcon name="arrow left" />
        </FieldPopupButton>
        <FieldPopupButton
          primary
          onClick={() => {
            setOpen(false)
            onRightClick()
          }}
        >
          <PopupButtonIcon name="arrow right" />
        </FieldPopupButton>
        <FieldPopupButton
          color="red"
          onClick={() => {
            setOpen(false)
            onRemoveClick()
          }}
        >
          <PopupButtonIcon name="delete" />
        </FieldPopupButton>
      </PopupButtonsWrapper>
    </Popup>
  )
}

export default FieldPopup
