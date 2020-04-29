import React, { useState } from 'react'
import { Popup } from 'semantic-ui-react'
import PopupButton from './PopupButton'
import ButtonsWrapper from './ButtonsWrapper'
import ButtonIcon from './ButtonIcon'

const FieldPopup = ({
  triggerComponent,
  onLeftClick,
  onRightClick,
  onEditClick,
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
      <ButtonsWrapper>
        <PopupButton
          primary
          onClick={() => {
            setOpen(false)
            onLeftClick()
          }}
        >
          <ButtonIcon name="arrow left" />
        </PopupButton>
        <PopupButton
          primary
          onClick={() => {
            setOpen(false)
            onRightClick()
          }}
        >
          <ButtonIcon name="arrow right" />
        </PopupButton>
        <PopupButton color="orange" onClick={onEditClick}>
          <ButtonIcon name="edit" />
        </PopupButton>
        <PopupButton
          color="red"
          onClick={() => {
            setOpen(false)
            onRemoveClick()
          }}
        >
          <ButtonIcon name="delete" />
        </PopupButton>
      </ButtonsWrapper>
    </Popup>
  )
}

export default FieldPopup
